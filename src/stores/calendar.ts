import { days } from "@/components/calendar/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { atom } from "jotai";

export type CalendarAtomType = {
  viewMode: "grid" | "list";
  currentDate: Date;
};

export const calendarAtom = atom<CalendarAtomType>({
  viewMode: "grid",
  currentDate: new Date(),
});

export interface PickedDate {
  date: string;
  hour: number;
  minute: number;
}

const formatDateString = (date: Dayjs) =>
  `${date.year()}년 ${date.month() + 1}월 ${date.date()}일(${days[date.day()]})`;

const today = dayjs();

export type EventAtomType = {
  isOpen: boolean;
  title: string;
  isAllDay: boolean;
  startDate: PickedDate;
  endDate: PickedDate;
  selectedColor: string;
};

export const eventAtom = atom<EventAtomType>({
  isOpen: false,
  title: "",
  isAllDay: false,
  startDate: {
    date: formatDateString(today),
    hour: today.hour(),
    minute: today.minute(),
  },
  // TODO 종료 날짜 = 시작 날짜 + 1시간
  endDate: {
    date: formatDateString(today),
    hour: today.hour(),
    minute: today.minute(),
  },
  selectedColor: "#FF9272",
});
