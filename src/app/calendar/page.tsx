"use client";

import { privateApi } from "@/api/axios";
import { BaseResponse } from "@/api/interfaces/BaseResponse";
import EventSheet from "@/components/calendar/EventSheet";
import FloatingActionButton from "@/components/calendar/FloatingActionButton";
import Grid from "@/components/calendar/grid/Grid";
import List from "@/components/calendar/list/List";
import MonthAndYear from "@/components/calendar/MonthAndYear";
import NewEventBottomSheet from "@/components/calendar/NewEventBottomSheet";
import SwitchButton from "@/components/calendar/SwitchButton";
import { calendarAtom } from "@/stores/calendar";
import { cn } from "@/utils/cn";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";

export type CalendarResponse = {
  title: string;
  endDate: string;
  startDate: string;
}[];

export default function Schedule() {
  const [{ viewMode, currentDate }] = useAtom(calendarAtom);

  const { data } = useQuery<BaseResponse<CalendarResponse>>({
    queryKey: ["calendar", currentDate.getMonth()],
    queryFn: () =>
      axios
        .get("https://api.skuniv.co.kr/api/calendars/sku", {
          params: {
            year: currentDate.getFullYear(),
            month: currentDate.getMonth() + 1,
            day: currentDate.getDay(),
          },
          withCredentials: true,
        })
        .then((response) => response.data),
    enabled: !!currentDate,
  });

  return (
    <div className="relative flex h-full flex-col">
      <div
        className={cn(
          "z-[9] flex items-center justify-between bg-[#f6f6f6] p-[20px]",
          viewMode === "list" &&
            "sticky top-0 shadow-[0px_3.144px_17.135px_0px_rgba(165,176,189,0.22)]"
        )}
      >
        <MonthAndYear />
        <SwitchButton />
      </div>

      {/* 달력 */}
      {viewMode === "grid" && (
        <>
          <Grid events={data?.result} />
          <EventSheet />
          <FloatingActionButton />
        </>
      )}

      {/* 목록 */}
      {viewMode === "list" && <List />}

      {/* 새 일정 추가 */}
      <NewEventBottomSheet />
    </div>
  );
}
