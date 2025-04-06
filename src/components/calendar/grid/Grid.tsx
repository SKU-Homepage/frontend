"use client";

import "react-calendar/dist/Calendar.css";
import "./Grid.scss";

import { Calendar as ReactCalendar } from "react-calendar";
import dayjs from "dayjs";

import convertEvents from "@/utils/convertEvents";
import Events from "./Events";
import { useAtom } from "jotai";
import { calendarAtom } from "@/stores/calendar";

interface GridProps {
  events: ReturnType<typeof convertEvents>;
}

const Grid = ({ events }: GridProps) => {
  const [calendar, setCalendarAtom] = useAtom(calendarAtom);

  // useEffect(() => {
  //   const updateRowHeights = () => {
  //     const container = document.getElementsByClassName("react-calendar__month-view__days")[0] as
  //       | HTMLElement
  //       | undefined;

  //     if (!container) return;

  //     const containerHeight = container.clientHeight;
  //     console.log(containerHeight);
  //     const rows = Array.from(container.children) as HTMLElement[];
  //     const rowHeight = (containerHeight - 300) / rowCount + 24;

  //     rows.forEach((child) => {
  //       child.style.height = `${rowHeight}px`;
  //     });
  //   };

  //   updateRowHeights();

  //   window.addEventListener("resize", updateRowHeights);
  //   return () => {
  //     window.removeEventListener("resize", updateRowHeights);
  //   };
  // }, []);

  return (
    <ReactCalendar
      key={calendar.currentDate.getMonth()} // 월 바뀔 때마다 강제 리렌더링
      calendarType="gregory"
      locale="ko"
      view="month"
      value={calendar.currentDate}
      onChange={(value) => {
        console.log(value);
        setCalendarAtom((prev) => ({ ...prev, currentDate: value as Date }));
      }}
      selectRange={false}
      showNavigation={false}
      formatDay={(locale, date) => dayjs(date).format("D")}
      tileContent={({ date }) => {
        const _events = events ? events[dayjs(date).format("YYYY-MM-DD")] : [];

        return (
          <div className="react-calendar__event">
            {_events && _events?.length > 0 ? <Events events={_events} /> : null}
          </div>
        );
      }}
    />
  );
};

export default Grid;
