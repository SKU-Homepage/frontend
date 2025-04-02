import { Button } from "@heroui/button";
import { useState } from "react";
import DialogModal from "../common/DialogModal";
import TimeTableDetailModal from "./TimeTableDetailModal";

const TimeTable = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);

  return (
    <>
      <Button
        onPress={() => setShowDetailModal(true)}
        className="flex h-auto w-full items-center justify-between rounded-[5px] bg-[#E7EAED8C] p-[13px] text-[11px] font-medium"
      >
        <div className="flex items-center gap-[20px]">
          <span className="text-[11px] font-medium">1-3교시</span>
          <div className="flex flex-col items-start">
            <p className="text-[11px] font-medium">10:00 - 11:50</p>
            <p className="text-[16px] font-semibold">World English 2</p>
          </div>
        </div>
        <span className="">은주관 505</span>
      </Button>
      <DialogModal isOpen={showDetailModal} setIsOpen={setShowDetailModal}>
        <TimeTableDetailModal onClose={setShowDetailModal} enrollMode />
      </DialogModal>
    </>
  );
};

export default TimeTable;
