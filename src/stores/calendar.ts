import { atom } from "jotai";

export type CalendarAtomType = {
  viewMode: "grid" | "list";
  currentDate: Date;
};

export const calendarAtom = atom<CalendarAtomType>({
  viewMode: "grid",
  currentDate: new Date(),
});
