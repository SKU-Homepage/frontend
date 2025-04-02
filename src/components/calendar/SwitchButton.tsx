"use client";

import { calendarAtom, type CalendarAtomType } from "@/stores/calendar";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";

const SwitchButton = () => {
  const [{ viewMode }] = useAtom(calendarAtom);

  return (
    <div className="relative flex items-center rounded-[27px] bg-[#7a8ea75c] p-[2px]">
      <div
        className={cn(
          "absolute z-[0] h-[30px] w-[50px] rounded-[25px] bg-[#f6f6f6] transition-all duration-300",
          viewMode === "list" && "translate-x-[46px]"
        )}
      ></div>
      <Chip name="달력" label="grid" active={viewMode === "grid"} />
      <Chip name="목록" label="list" active={viewMode === "list"} />
    </div>
  );
};

interface ChipProps {
  name: string;
  label: string;
  active: boolean;
}

const Chip = ({ name, label, active }: ChipProps) => {
  const [, setCalendarAtom] = useAtom(calendarAtom);

  return (
    <button
      className={cn(
        "z-[1] h-[30px] w-[48px] cursor-pointer px-[12px] text-[11px] font-[500] transition-all duration-300",
        active ? "text-[#143967]" : "text-[#75869B]"
      )}
      onClick={() =>
        setCalendarAtom((p) => ({ ...p, viewMode: label as CalendarAtomType["viewMode"] }))
      }
    >
      {name}
    </button>
  );
};

export default SwitchButton;
