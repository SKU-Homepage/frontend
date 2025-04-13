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

  return (
    <ReactCalendar
      key={calendar.currentDate.getMonth()} // 월 바뀔 때마다 강제 리렌더링
      calendarType="gregory"
      locale="ko"
      view="month"
      value={calendar.currentDate}
      onChange={(value) => {
        setCalendarAtom((prev) => ({ ...prev, currentDate: value as Date }));
      }}
      selectRange={false}
      showNavigation={false}
      formatDay={(locale, date) => dayjs(date).format("D")}
      tileContent={({ date }) => {
        const _events = events ? events[dayjs(date).format("YYYY-MM-DD")] : [];

        return _events && _events?.length > 0 ? (
          <div className="react-calendar__event">
            <Events events={_events} />
          </div>
        ) : null;
      }}
    />
  );
};

export default Grid;
