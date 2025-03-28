"use client";
import { cn } from "@/utils/cn";
import { useState } from "react";
import ScheduleTable from "@/components/schedule/ScheduleBtn";
import WeeklyTable from "@/components/schedule/WeeklyTable";
import AddScheduleBtn from "../../components/schedule/addSchedule/AddScheduleModal";
import SlideUpModal from "@/components/common/SlideUpModal";
import AddModalContent from "@/components/schedule/addSchedule/AddModalContent";

export default function Schedule() {
  const [activeTab, setActiveTab] = useState<"todo" | "weekly">("todo");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative w-full px-[4.6%]">
      <div className="relative mt-[23px] flex aspect-[362/40] rounded-[10px] bg-[#C9D0D9] p-[3px] font-semibold text-[#1439675E]">
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
      </div>
      {activeTab === "todo" ? <ScheduleTable /> : <WeeklyTable />}
      <AddScheduleBtn setShowModal={setShowModal} />
      <SlideUpModal isOpen={showModal} setIsOpen={setShowModal} fullScreen>
        <AddModalContent onClose={setShowModal} />
      </SlideUpModal>
    </div>
  );
}
