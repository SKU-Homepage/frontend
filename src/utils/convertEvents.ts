import dayjs from "dayjs";

export interface InputEvent {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
}

export interface OutputEventItem {
  id: number;
  title: string;
  adjacent: "right" | "left" | "both" | "none";
  order: number;
}

export interface OutputEvent {
  [date: string]: OutputEventItem[];
}

const getAdjacentType = (
  currentDate: string,
  startDate: string,
  endDate: string
): "right" | "left" | "both" | "none" => {
  if (startDate === endDate) return "none";
  if (currentDate === startDate) return "right";
  if (currentDate === endDate) return "left";
  return "both";
};

const convertEvents = (events: InputEvent[]): OutputEvent => {
  const result: OutputEvent = {};

  events.forEach((event) => {
    const start = dayjs(event.startDate);
    const end = dayjs(event.endDate);
    const daysCount = end.diff(start, "day") + 1;

    // Generate all dates at once using Array.from
    const dates = Array.from({ length: daysCount }, (_, index) =>
      start.add(index, "day").format("YYYY-MM-DD")
    );

    dates.forEach((dateStr) => {
      const adjacent = getAdjacentType(dateStr, event.startDate, event.endDate);

      if (!result[dateStr]) {
        result[dateStr] = [];
      }

      result[dateStr].push({
        id: event.id,
        title: event.title,
        adjacent,
        order: result[dateStr].length + 1,
      });
    });
  });

  return result;
};

export default convertEvents;
