"use client";

import "react-calendar/dist/Calendar.css";
import "./Grid.scss";

import { Calendar as ReactCalendar } from "react-calendar";
import dayjs from "dayjs";

import convertEvents from "@/utils/convertEvents";
import Events from "./Events";
import { useAtom } from "jotai";
import { calendarAtom } from "@/stores/calendar";
import { CalendarResponse } from "@/app/calendar/page";

interface GridProps {
  events: CalendarResponse | undefined;
}

const Grid = ({ events }: GridProps) => {
  const [{ currentDate }, setCalendarAtom] = useAtom(calendarAtom);

  return (
    <ReactCalendar
      calendarType="gregory"
      locale="ko"
      view="month"
      value={currentDate}
      onChange={(value) => setCalendarAtom((prev) => ({ ...prev, currentDate: value as Date }))}
      selectRange={false}
      showNavigation={false}
      formatDay={(locale, date) => dayjs(date).format("D")}
      tileContent={({ date }) => {
        const _events = events ? convertEvents(events)?.[dayjs(date).format("YYYY-MM-DD")] : [];

        return (
          <div className="react-calendar__event">
            {events && events?.length > 0 ? <Events events={_events} /> : null}
          </div>
        );
      }}
    />
  );
};

export default Grid;
