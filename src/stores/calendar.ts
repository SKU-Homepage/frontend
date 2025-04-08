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
  hour: string;
  minute: string;
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
  canAdd: boolean;
};

export const eventAtom = atom<EventAtomType>({
  isOpen: false,
  title: "",
  isAllDay: false,
  startDate: {
    date: formatDateString(today),
    hour: String(today.hour()).padStart(2, "0"),
    minute: String(today.minute()).padStart(2, "0"),
  },
  // TODO 종료 날짜 = 시작 날짜 + 1시간
  endDate: {
    date: formatDateString(today),
    hour: String(today.hour()).padStart(2, "0"),
    minute: String(today.minute()).padStart(2, "0"),
  },
  selectedColor: "#FF9272",
  canAdd: false,
});
