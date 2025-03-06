"use client";

import { calendarAtom } from "@/stores/calendar";
import { useAtom } from "jotai";
import SilverDot from "../../../../public/images/silver_dot.svg";
import { cn } from "@/utils/cn";

const List = () => {
  const [{ date }] = useAtom(calendarAtom);

  return (
    <div className="flex flex-col">
      <DayBlock
        day="6일 화요일 (오늘)"
        today
        events={[
          {
            id: 1,
            title: "[졸업] 졸업전시회",
            startDate: "25.01.08",
            endDate: "25.01.10",
          },
        ]}
      />
    </div>
  );
};

interface DayBlockProps {
  day: string;
  today?: boolean;
  events: {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
  }[];
}

const DayBlock = ({ day, today, events }: DayBlockProps) => {
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
          {today ? "(오늘)" : null}
        </span>
        <span className="cursor-pointer text-[15px] font-[600] text-[#143967] opacity-[0.64]">
          +
        </span>
      </div>
      <div className="mt-[8px] h-[1.5px] w-full bg-[#44608142]"></div>
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
    </div>
  );
};

export default List;
