"use client";

import { useState } from "react";
import SlideUpModal from "../common/SlideUpModal";
import AddScheduleBtn from "./addSchedule/AddScheduleModal";
import WeeklyTable from "./WeeklyTable";
import AddModalContent from "./addSchedule/AddModalContent";
import Timetable from "./TimeTable";
import { useAtom } from "jotai";
import { scheduleType } from "@/stores/atoms";
import SchoolModalBody from "./addSchedule/schoolModalComponents/ModalBody";
import PersonalModalBody from "./addSchedule/personalModalComponent/ModalBody";

const ScheduleBody = () => {
  const [showModal, setShowModal] = useState<"school" | "personal" | null>(null);
  const [activeTab] = useAtom(scheduleType);

  return (
    <>
      {activeTab === "todo" ? <Timetable /> : <WeeklyTable />}
      <AddScheduleBtn setShowModal={setShowModal} />
      <SlideUpModal
        isOpen={showModal === "school"}
        setIsOpen={(bool) => setShowModal(bool as unknown as typeof showModal)}
        fullScreen
      >
        <AddModalContent title="학교 수업 추가하기" onClose={setShowModal}>
          <SchoolModalBody />
        </AddModalContent>
      </SlideUpModal>
      <SlideUpModal
        isOpen={showModal === "personal"}
        setIsOpen={(bool) => setShowModal(bool as unknown as typeof showModal)}
        fullScreen
      >
        <AddModalContent title="개인 일정 추가하기" onClose={setShowModal}>
          <PersonalModalBody close={() => setShowModal(null)} />
        </AddModalContent>
      </SlideUpModal>
    </>
  );
};

export default ScheduleBody;
