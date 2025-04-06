"use client";

import { eventAtom } from "@/stores/calendar";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import { motion } from "motion/react";

interface FloatingActionButtonProps {
  opened: boolean;
}

const FloatingActionButton = ({ opened }: FloatingActionButtonProps) => {
  const [, setEvent] = useAtom(eventAtom);

  return (
    <>
      <motion.div
        onClick={() => setEvent((prev) => ({ ...prev, isOpen: true }))}
        animate={{
          width: opened ? 50 : 150,
        }}
        transition={{
          duration: 0.03,
          ease: "linear",
        }}
        className={
          "absolute right-[25px] bottom-[25px] z-20 flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-[28px] bg-[#143967] px-[14px] py-[12px] transition-all duration-200"
        }
      >
        <span
          className={cn(
            "text-[14px] font-[500] whitespace-nowrap text-white",
            opened && "text-[22px]"
          )}
        >
          + {!opened && "새 일정 추가하기"}
        </span>
      </motion.div>
    </>
  );
};

export default FloatingActionButton;
