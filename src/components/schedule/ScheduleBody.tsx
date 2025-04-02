"use client";

import { useState } from "react";
import SlideUpModal from "../common/SlideUpModal";
import AddScheduleBtn from "./addSchedule/AddScheduleModal";
import WeeklyTable from "./WeeklyTable";
import AddModalContent from "./addSchedule/AddModalContent";
import Timetable from "./TimeTable";
import { useAtom } from "jotai";
import { scheduleType } from "@/stores/atoms";

const ScheduleBody = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeTab] = useAtom(scheduleType);

  return (
    <>
      {activeTab === "todo" ? <Timetable /> : <WeeklyTable />}
      <AddScheduleBtn setShowModal={setShowModal} />
      <SlideUpModal isOpen={showModal} setIsOpen={setShowModal} fullScreen>
        <AddModalContent onClose={setShowModal} />
      </SlideUpModal>
    </>
  );
};

export default ScheduleBody;
