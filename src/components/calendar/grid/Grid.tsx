"use client";

import "react-calendar/dist/Calendar.css";
import "./Grid.scss";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Calendar as ReactCalendar } from "react-calendar";
import dayjs from "dayjs";

import convertEvents from "@/utils/convertEvents";
import Events from "./Events";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarProps {}

const Calendar = ({}: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState<Value>(new Date());

  //dummy
  const dummy = useMemo(
    () =>
      convertEvents([
        {
          id: 1,
          title: "제 75회 전기 학위수여식",
          startDate: "2025-02-15",
          endDate: "2025-02-20",
        },
        {
          id: 2,
          title: "test",
          startDate: "2025-02-17",
          endDate: "2025-02-17",
        },
      ]),
    []
  );

  return (
    <ReactCalendar
      calendarType="gregory"
      locale="ko"
      view="month"
      value={currentDate}
      onChange={setCurrentDate}
      selectRange={false}
      showNavigation={false}
      formatDay={(locale, date) => dayjs(date).format("D")}
      tileContent={({ activeStartDate, date, view }) => {
        const events = dummy?.[dayjs(date).format("YYYY-MM-DD")];

        return (
          <div className="react-calendar__event">
            {events?.length > 0 ? <Events events={events} /> : null}
          </div>
        );
      }}
    />
  );
};

export default Calendar;
