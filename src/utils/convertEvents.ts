import dayjs from "dayjs";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";

dayjs.extend(isSameOrBefore);

export interface InputEvent {
  title: string;
  startDate: string;
  endDate: string;
}

export interface OutputEventItem {
  title: string;
  single: boolean;
  adjacent: "right" | "left" | "both" | "none";
  order: number;
}

export interface OutputFormat {
  [date: string]: OutputEventItem[];
}

const convertEvents = (events: InputEvent[]): OutputFormat => {
  const result: OutputFormat = {};

  events.forEach(({ title, startDate, endDate }, eventIndex) => {
    let currentDate = dayjs(startDate);
    const lastDate = dayjs(endDate);

    // For single day events
    const isSingle = startDate === endDate;
    if (isSingle) {
      const dateStr = startDate;
      if (!result[dateStr]) result[dateStr] = [];

      result[dateStr].push({
        title,
        single: isSingle,
        adjacent: "none",
        order: eventIndex + 1,
      });
    } else {
      // For multi-day events
      while (currentDate.isSameOrBefore(lastDate, "day")) {
        const dateStr = currentDate.format("YYYY-MM-DD");
        if (!result[dateStr]) result[dateStr] = [];

        const isStart = dateStr === startDate;
        const isEnd = dateStr === endDate;
        const adjacent = isStart ? "right" : isEnd ? "left" : "both";

        result[dateStr].push({
          title,
          single: false,
          adjacent,
          order: eventIndex + 1,
        });

        currentDate = currentDate.add(1, "day");
      }
    }
  });

  return result;
};

export default convertEvents;
