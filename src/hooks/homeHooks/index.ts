import { privateApi } from "@/api/axios";
import { queryOptions } from "@tanstack/react-query";

export const getTodayTimeTable = async (): Promise<TimeTable[] | null> => {
  try {
    const baseURL = "/time-table/today";
    const res = await privateApi.get(baseURL);
    const data = res.data;
    return data.result.timeTables;
  } catch {
    return null;
  }
};

export const useTimeTable = queryOptions({
  queryKey: ["time-table"],
  queryFn: getTodayTimeTable,
  staleTime: 1000 * 60 * 60,
  enabled: false,
});

export type TimeTable = {
  time?: string;
  subject: string;
  classroom: string;
  classtime: string;
};
