import dayjs from "dayjs";

// Type definitions
export interface InputEvent {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
}

export interface OutputEventItem {
  id: string;
  title: string;
  single: boolean;
  adjacent: "right" | "left" | "both" | "none";
  order: number;
  endDate: string;
}

export interface OutputFormat {
  [date: string]: OutputEventItem[];
}

/**
 * Converts an array of input events to a date-indexed object with event items
 * @param events Array of InputEvent objects
 * @returns An object with dates as keys and arrays of OutputEventItem as values
 */
const convertEvents = (events: InputEvent[]): OutputFormat => {
  const result: OutputFormat = {};

  // Map to store event ranges with their metadata
  const eventRanges = events.map((event) => {
    const { id, title, startDate, endDate } = event;

    // Calculate all dates in the range (inclusive)
    const start = dayjs(startDate);
    const end = dayjs(endDate);
    const daysCount = end.diff(start, "day") + 1;

    // Generate all dates efficiently
    const dates = Array.from({ length: daysCount }, (_, i) =>
      start.add(i, "day").format("YYYY-MM-DD")
    );

    return {
      id,
      title,
      dates,
      isSingleDay: dates.length === 1,
    };
  });

  // Sort events by start date and then by duration (longer events first)
  eventRanges.sort((a, b) => {
    // Compare by start date first
    const dateCompare = a.dates[0].localeCompare(b.dates[0]);
    if (dateCompare !== 0) return dateCompare;

    // If start dates match, longer events come first
    return b.dates.length - a.dates.length;
  });

  // Build overlap map using a more efficient approach
  const overlapMap = new Map<string, Set<string>>();

  // Initialize map entries
  eventRanges.forEach((event) => {
    overlapMap.set(event.id, new Set<string>());
  });

  // Helper function to quickly check if date ranges overlap
  const hasOverlap = (dates1: string[], dates2: string[]) => {
    // Convert dates to Set for O(1) lookups
    const dateSet = new Set(dates1);
    return dates2.some((date) => dateSet.has(date));
  };

  // Detect all overlaps
  for (let i = 0; i < eventRanges.length; i++) {
    const event1 = eventRanges[i];

    // Only need to compare with events that could potentially overlap
    // (events are sorted by start date)
    for (let j = i + 1; j < eventRanges.length; j++) {
      const event2 = eventRanges[j];

      // Early termination - if event2 starts after event1 ends, no need to check further
      if (event2.dates[0] > event1.dates[event1.dates.length - 1]) {
        break;
      }

      if (hasOverlap(event1.dates, event2.dates)) {
        overlapMap.get(event1.id)!.add(event2.id);
        overlapMap.get(event2.id)!.add(event1.id);
      }
    }
  }

  // Assign orders using an optimized graph coloring approach
  const eventOrders = new Map<string, number>();

  // Process events in order
  eventRanges.forEach((event) => {
    const overlappingEvents = overlapMap.get(event.id)!;

    // Use a Set to track used orders for O(1) lookups
    const usedOrders = new Set<number>();

    // Collect orders from overlapping events
    overlappingEvents.forEach((overlappingId) => {
      const order = eventOrders.get(overlappingId);
      if (order !== undefined) {
        usedOrders.add(order);
      }
    });

    // Find lowest available order
    let order = 1;
    while (usedOrders.has(order)) {
      order++;
    }

    // Assign order
    eventOrders.set(event.id, order);
  });

  // Build the final result structure
  eventRanges.forEach((event) => {
    const { id, title, dates, isSingleDay } = event;
    const order = eventOrders.get(id)!;

    // Process each date in the event
    dates.forEach((date, index) => {
      // Initialize date array if needed
      if (!result[date]) {
        result[date] = [];
      }

      // Determine adjacency type
      let adjacent: "right" | "left" | "both" | "none";
      if (isSingleDay) {
        adjacent = "none";
      } else if (index === 0) {
        adjacent = "right";
      } else if (index === dates.length - 1) {
        adjacent = "left";
      } else {
        adjacent = "both";
      }

      // Add event item
      result[date].push({
        id,
        title,
        single: isSingleDay,
        adjacent,
        order,
        endDate: isSingleDay ? dates[0] : dates[dates.length - 1],
      });
    });
  });

  return result;
};

export default convertEvents;
