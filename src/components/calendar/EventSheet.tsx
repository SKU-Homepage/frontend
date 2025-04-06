"use client";

import { useAtom } from "jotai";
import ChevronDownWide from "../../../public/images/chevron_down_wide.svg";
import Direction from "../../../public/images/direction.svg";
import { calendarAtom } from "@/stores/calendar";
import convertEvents from "@/utils/convertEvents";
import { EVENT_COLORS } from "./grid/EventBand";
import { days } from "./DatePicker";
import { Sheet, SheetRef } from "react-modal-sheet";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import FloatingActionButton from "./FloatingActionButton";
import { cn } from "@/utils/cn";
import { useRef, useState } from "react";
dayjs.extend(isBetween);

interface EventSheetProps {
  events: ReturnType<typeof convertEvents>;
}

const EventSheet = ({ events }: EventSheetProps) => {
  const [calendar] = useAtom(calendarAtom);

  const today = dayjs();
  const currentDateInDayjs = dayjs(calendar.currentDate);

  const [opened, setOpened] = useState(false);

  const ref = useRef<SheetRef>(null);
  const containerRef = useRef(null);

  const updateSheetHeight = () => {
    if (containerRef.current) {
      const transform = window.getComputedStyle(containerRef.current).transform;

      // Extract just the Y value from translateY()
      const translateY = transform.match(/translateY\(([^)]+)\)/);
      if (translateY && translateY[1]) {
        console.log("Sheet Y position:", translateY[1]);
      } else {
        // Fallback for matrix format
        const matrix = transform.match(/matrix\([^)]*,\s*([^)]*)\)/);
        if (matrix && matrix[1]) {
          const monthView = document.querySelector(".react-calendar__month-view");
          if (monthView) {
            (monthView as HTMLElement).style.height = `calc(100% - 73px - 300px + ${matrix[1]}px)`; // Set your desired height here
          }
        }
      }
    }
  };

  return (
    <>
      <FloatingActionButton opened={opened} />

      <Sheet
        isOpen={true}
        onClose={() => {
          ref.current?.snapTo(1);
        }}
        ref={ref}
        detent="full-height"
        snapPoints={[300, 150, 25]}
        initialSnap={1}
        dragCloseThreshold={1}
        mountPoint={
          typeof document !== "undefined" ? document.getElementById("calendar")! : undefined
        }
        style={{
          position: "absolute",
          zIndex: 15,
        }}
        onSnap={(index) => {
          if (index === 0) {
            setOpened(true);
          } else {
            setOpened(false);
          }

          updateSheetHeight();
        }}
        onPan={() => {
          updateSheetHeight();
        }}
      >
        <Sheet.Container ref={containerRef} style={{ background: "#EEF0F1", border: "none" }}>
          <Sheet.Header>
            <div className="flex items-center justify-center pt-[12px]">
              <ChevronDownWide className={cn(!opened && "rotate-180")} />
            </div>
          </Sheet.Header>
          <div className="flex h-full w-full flex-1 flex-col pb-[60px]">
            <div className="px-[20px] py-[20px]">
              <span className="text-[16px] font-[600] text-[#143967]">
                {calendar.currentDate.getDate()}일 {days[calendar.currentDate.getDay()]}요일{" "}
                {today.format("YYYY-MM-DD") === currentDateInDayjs.format("YYYY-MM-DD")
                  ? "(오늘)"
                  : ""}
              </span>
            </div>
            <div className="flex flex-col gap-[2px] overflow-y-auto">
              {events?.[currentDateInDayjs.format("YYYY-MM-DD")]?.length > 0 ? (
                events[currentDateInDayjs.format("YYYY-MM-DD")].map((event) => (
                  <EventBar
                    key={event.id}
                    color={EVENT_COLORS?.[event.order - 1]}
                    name={event.title}
                    startDate={currentDateInDayjs.format("YYYY-MM-DD")}
                    endDate={event.endDate!}
                  />
                ))
              ) : (
                <span className="text-center text-[14px] font-[400] text-[#143967]">
                  일정이 없습니다.
                </span>
              )}
            </div>
          </div>
        </Sheet.Container>
        {/* <Sheet.Backdrop /> */}
      </Sheet>
    </>
  );
};

interface EventBarProps {
  color: string;
  name: string;
  startDate: string;
  endDate: string;
}

const EventBar = ({ color, name, startDate, endDate }: EventBarProps) => {
  return (
    <div className="flex h-[60px] shrink-0 items-center bg-[#f6f6f6] px-[20px]">
      <div style={{ background: color }} className="h-full w-[8px]"></div>
      <div className="flex w-full items-center justify-between px-[20px] py-[16px]">
        <span className="text-[14px] font-[500] text-[#143967]">{name}</span>
        <div className="flex items-center gap-[10px]">
          <span className="text-[11px] font-[400] whitespace-nowrap text-[#143967]">
            {startDate === endDate ? startDate : `${startDate} ~ ${endDate}`}
          </span>
          <Direction />
        </div>
      </div>
    </div>
  );
};

export default EventSheet;
