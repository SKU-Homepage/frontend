"use client";

import EventSheet from "@/components/calendar/EventSheet";
import FloatingActionButton from "@/components/calendar/FloatingActionButton";
import Grid from "@/components/calendar/grid/Grid";
import List from "@/components/calendar/list/List";
import MonthAndYear from "@/components/calendar/MonthAndYear";
import SwitchButton from "@/components/calendar/SwitchButton";
import { calendarAtom } from "@/stores/calendar";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";

export default function Schedule() {
  const [{ viewMode }] = useAtom(calendarAtom);

  return (
    <div className="relative flex h-full flex-col">
      <div
        className={cn(
          "z-[9] flex items-center justify-between bg-[#f6f6f6] p-[20px]",
          viewMode === "list" &&
            "sticky top-0 shadow-[0px_3.144px_17.135px_0px_rgba(165,176,189,0.22)]"
        )}
      >
        <MonthAndYear />
        <SwitchButton />
      </div>
      {viewMode === "grid" && (
        <>
          <Grid />
          <EventSheet />
          <FloatingActionButton />
        </>
      )}
      {viewMode === "list" && <List />}
    </div>
  );
}
