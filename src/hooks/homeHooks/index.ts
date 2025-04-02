import { createPrivateApi } from "@/api/serverAxios";
import { queryOptions } from "@tanstack/react-query";
import { Lecture } from "../scheduleHooks";

export const getTodayTimeTable = async (): Promise<Lecture[] | null> => {
  try {
    const baseURL = "/time-table/today";
    const res = await (await createPrivateApi()).get(baseURL);
    return res.data.result.timeTables;
  } catch {
    return null;
  }
};

export const useTimeTable = queryOptions({
  queryKey: ["time-table"],
  queryFn: getTodayTimeTable,
  staleTime: 1000 * 60 * 60,
  gcTime: 1000 * 60 * 60,
  refetchOnMount: true,
  refetchOnReconnect: "always",
});
