import { Button } from "@heroui/button";
import { useState } from "react";
import DialogModal from "../common/DialogModal";
import TimeTableDetailModal from "./TimeTableDetailModal";
import { Lecture } from "@/hooks/scheduleHooks";
import { cn } from "@/utils/cn";
import { useLongPress } from "use-long-press";

const LectureCard = ({ data, enrollMode, setSelectedLectures, isSelected }: TimeTableProps) => {
  const [showDetailModal, setShowDetailModal] = useState(false);

  const handleLongPress = () => {
    setSelectedLectures?.((prev) => {
      if (isSelected) {
        return prev.filter((lecture: Lecture) => lecture.subjectId !== data.subjectId);
      } else {
        return [...prev, data];
      }
    });
  };

  const bind = useLongPress(handleLongPress, {
    onCancel: () => setShowDetailModal(true),
    threshold: 500,
    captureEvent: true,
    cancelOnMovement: true,
  });

  return (
    <>
      <Button
        {...bind()}
        className={cn(
          `event flex h-auto w-full flex-none items-center justify-between rounded-[5px] bg-[#E7EAED8C] p-[13px] text-[11px] font-medium`,
          {
            "border-[1.5px] border-[#4F68E9]": isSelected,
          }
        )}
      >
        <div className="flex items-center gap-[20px]">
          <span className="text-[11px] font-medium">1-3교시</span>
          <div className="flex flex-col items-start">
            <p className="text-[11px] font-medium">10:00 - 11:50</p>
            <p className="text-[16px] font-semibold">{data.subject}</p>
          </div>
        </div>
        <span className="">{data.classroom}</span>
      </Button>

      <DialogModal isOpen={showDetailModal} setIsOpen={setShowDetailModal}>
        <TimeTableDetailModal
          setSelectedLectures={setSelectedLectures}
          isSelected={isSelected}
          data={data}
          onClose={setShowDetailModal}
          enrollMode={enrollMode}
        />
      </DialogModal>
    </>
  );
};

interface TimeTableProps {
  data: Lecture;
  enrollMode?: boolean;
  setSelectedLectures?: React.Dispatch<React.SetStateAction<Lecture[]>>;
  isSelected?: boolean;
}

export default LectureCard;
