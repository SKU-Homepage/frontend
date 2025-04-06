"use client";

import { publicApi } from "@/api/axios";
import { BaseResponse } from "@/api/interfaces/BaseResponse";
import EventSheet from "@/components/calendar/EventSheet";
import Grid from "@/components/calendar/grid/Grid";
import List from "@/components/calendar/list/List";
import MonthAndYearPicker from "@/components/calendar/MonthAndYearPicker";
import NewEventBottomSheet from "@/components/calendar/NewEventBottomSheet";
import SwitchButton from "@/components/calendar/SwitchButton";
import { calendarAtom } from "@/stores/calendar";
import { cn } from "@/utils/cn";
import convertEvents from "@/utils/convertEvents";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";

export type CalendarResponse = {
  id: string;
  title: string;
  endDate: string;
  startDate: string;
}[];

export default function Schedule() {
  const [calendar] = useAtom(calendarAtom);

  const { data } = useQuery<BaseResponse<CalendarResponse>>({
    queryKey: ["calendar", calendar.currentDate.getMonth()],
    queryFn: () =>
      publicApi
        .get("/calendars/sku", {
          params: {
            year: calendar.currentDate.getFullYear(),
            month: calendar.currentDate.getMonth() + 1,
            day: calendar.currentDate.getDay(),
          },
          withCredentials: true,
        })
        .then((response) => response.data),
    enabled: !!calendar.currentDate,
  });

  const events = convertEvents(data?.result ?? []);

  return (
    <>
      <div
        className={cn(
          "z-[9] flex items-center justify-between bg-[#f6f6f6] p-[20px]",
          calendar.viewMode === "list" &&
            "sticky top-[73px] w-full shadow-[0px_3.144px_17.135px_0px_rgba(165,176,189,0.22)]"
        )}
      >
        <MonthAndYearPicker />
        <SwitchButton />
      </div>
      <div className="relative flex h-full flex-col">
        {/* 달력 */}
        {calendar.viewMode === "grid" && (
          <>
            <Grid events={events} />
            <EventSheet events={events} />
          </>
        )}

        {/* 목록 */}
        {calendar.viewMode === "list" && <List />}

        {/* 새 일정 추가 */}
        <NewEventBottomSheet />
      </div>
    </>
  );
}
