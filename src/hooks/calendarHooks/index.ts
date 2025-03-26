import { privateApi } from "@/api/axios";
import { BaseResponse } from "@/api/interfaces/BaseResponse";
import { CalendarResponse } from "@/app/calendar/page";
import { queryOptions } from "@tanstack/react-query";

export const useCalendar = (currentDate: Date) => {
  return queryOptions<BaseResponse<CalendarResponse>>({
    queryKey: ["calendar"],
    queryFn: () =>
      privateApi
        .get("/calendars/sku", {
          params: {
            year: currentDate.getFullYear(),
            month: currentDate.getMonth() + 1,
            day: currentDate.getDay(),
          },
        })
        .then((response) => response.data),
    staleTime: 1000 * 60 * 60,
    enabled: !!currentDate,
  });
};
