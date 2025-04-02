"use client";

import { eventAtom } from "@/stores/calendar";
import { useAtom } from "jotai";

const FloatingActionButton = () => {
  const [, setEvent] = useAtom(eventAtom);

  return (
    <>
      <div
        onClick={() => setEvent((prev) => ({ ...prev, isOpen: true }))}
        className="fixed right-[25px] bottom-[25px] flex items-center justify-center rounded-[28px] bg-[#143967] px-[14px] py-[12px]"
      >
        <span className="text-[12px] font-[500] text-white">+ 새 일정 추가하기</span>
      </div>
    </>
  );
};

export default FloatingActionButton;
