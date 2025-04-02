"use client";

import { scheduleType } from "@/stores/atoms";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";

const TypeButton = () => {
  const [activeTab, setActiveTab] = useAtom(scheduleType);

  return (
    <>
      <div
        className={cn(
          "absolute inset-0 m-[3px] w-[calc(50%-3px)] rounded-[7.3px] bg-white transition-transform duration-300",
          {
            "translate-x-0": activeTab === "todo",
            "translate-x-full": activeTab === "weekly",
          }
        )}
      />
      {(["todo", "weekly"] as const).map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={cn("relative z-10 h-full flex-1", {
            "text-[#143967]": activeTab === tab,
          })}
        >
          {tab === "todo" ? "투두" : "위클리"}
        </button>
      ))}
    </>
  );
};

export default TypeButton;
