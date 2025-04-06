"use client";

import { calendarAtom, eventAtom } from "@/stores/calendar";
import { useAtom } from "jotai";
import { cn } from "@/utils/cn";
import SilverDot from "../../../../public/images/silver_dot.svg";
import dayjs, { Dayjs } from "dayjs";
import { days } from "../DatePicker";
import { useQueryClient } from "@tanstack/react-query";
import { BaseResponse } from "@/api/interfaces/BaseResponse";
import { CalendarResponse } from "@/app/calendar/page";
import convertEvents from "@/utils/convertEvents";

const List = () => {
  const [calendar] = useAtom(calendarAtom);

  const dateInDayjs = dayjs(calendar.currentDate);

  const today = dayjs();

  const queryClient = useQueryClient();
  const cachedCalendarData = queryClient.getQueryData<BaseResponse<CalendarResponse>>([
    "calendar",
    calendar.currentDate.getMonth(),
  ])?.result;

  return (
    <div className="flex flex-col">
      {[...Array(dateInDayjs.daysInMonth())]
        .map((_, index) => index + 1)
        .map((day) => {
          const getDate = dateInDayjs.date(day);

          const _events = cachedCalendarData
            ? convertEvents(cachedCalendarData)?.[dayjs().date(day).format("YYYY-MM-DD")]
            : [];

          return (
            <DayBlock
              key={day}
              rawDate={getDate}
              day={`${day}일 ${days[getDate.day()]}요일`}
              today={dayjs().date(day) === today}
              events={_events?.map((e) => ({
                id: e.id,
                title: e.title,
                startDate: getDate.format("YYYY-MM-DD"),
                endDate: e.endDate,
              }))}
            />
          );
        })}
    </div>
  );
};

interface DayBlockProps {
  day: string;
  rawDate: Dayjs;
  today?: boolean;
  events: {
    id: string;
    title: string;
    startDate: string;
    endDate: string;
  }[];
}

const DayBlock = ({ day, rawDate, today, events }: DayBlockProps) => {
  const [, setEvent] = useAtom(eventAtom);

  return (
    <div className="bg-[#E9EFF7] px-[20px] py-[16px]">
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "text-[15px]",
            today ? "font-[800] text-[#4D66EC]" : "font-[600] text-[#143967]"
          )}
        >
          {day}
          {today ? " (오늘)" : null}
        </span>
        <span
          className="cursor-pointer p-[8px] text-[15px] font-[600] text-[#143967] opacity-[0.64]"
          onClick={() =>
            setEvent((prev) => ({
              ...prev,
              title: "",
              isAllDay: false,
              startDate: {
                date: `${rawDate.year()}년 ${rawDate.month() + 1}월 ${rawDate.date()}일(${days[rawDate.day()]})`,
                hour: rawDate.hour(),
                minute: rawDate.minute(),
              },
              endDate: {
                date: `${rawDate.year()}년 ${rawDate.month() + 1}월 ${rawDate.date()}일(${days[rawDate.day()]})`,
                hour: rawDate.hour(),
                minute: rawDate.minute(),
              },
              isOpen: true,
            }))
          }
        >
          +
        </span>
      </div>
      <div className="h-[1.5px] w-full bg-[#44608142]"></div>
      {events?.length > 0 && (
        <div className="flex flex-col py-[20px]">
          {events?.map((event) => (
            <div key={event.id} className="flex items-center gap-[10px]">
              <SilverDot />
              <span className="text-[14px] font-[500] text-[#143967]">{event.title}</span>
              <span className="text-[11px] font-[400] text-[#143967]">
                {event.startDate} ~ {event.endDate}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
