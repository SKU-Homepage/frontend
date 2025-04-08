import { Button } from "@heroui/button";
import { useState } from "react";
import DialogModal from "../common/DialogModal";
import TimeTableDetailModal from "./TimeTableDetailModal";
import { Lecture } from "@/hooks/scheduleHooks";
import { cn } from "@/utils/cn";
import { useLongPress } from "use-long-press";

const LectureCard = ({ data, enrollMode, setSelectedLectures, isSelected }: TimeTableProps) => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [didLongPress, setDidLongPress] = useState(false);

  const handleLongPress = () => {
    setDidLongPress(true); // 롱프레스가 발생했음을 저장
    setSelectedLectures?.((prev) => {
      if (isSelected) {
        return prev.filter((lecture: Lecture) => lecture.subjectId !== data.subjectId);
      } else {
        return [...prev, data];
      }
    });
  };

  const handleClick = () => {
    if (didLongPress) return; // 롱프레스가 발생했으면 클릭 무시
    setShowDetailModal(true);
  };

  const bind = useLongPress(handleLongPress, {
    threshold: 500,
    captureEvent: true,
    cancelOnMovement: true,
    onStart: () => setDidLongPress(false), // 새 터치마다 초기화
    onCancel: () => setDidLongPress(false), // 롱프레스 실패 시 초기화
  });

  return (
    <>
      <Button
        {...bind()}
        onPress={handleClick}
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
