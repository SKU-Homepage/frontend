"use client";

import { eventAtom } from "@/stores/calendar";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";

interface FloatingActionButtonProps {
  opened: boolean;
}

const FloatingActionButton = ({ opened }: FloatingActionButtonProps) => {
  const [, setEvent] = useAtom(eventAtom);

  return (
    <>
      <div
        onClick={() => setEvent((prev) => ({ ...prev, isOpen: true }))}
        className={cn(
          "fixed right-[25px] bottom-[25px] z-20 flex items-center justify-center rounded-[28px] bg-[#143967] px-[14px] py-[12px]",
          !opened && "h-[50px] w-[50px]"
        )}
      >
        <span className={cn("text-[22px] font-[500] text-white", opened && "text-[14px]")}>
          + {opened && "새 일정 추가하기"}
        </span>
      </div>
    </>
  );
};

export default FloatingActionButton;
