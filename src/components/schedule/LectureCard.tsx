import { Button } from "@heroui/button";
import { useState } from "react";
import DialogModal from "../common/DialogModal";
import TimeTableDetailModal from "./TimeTableDetailModal";
import { Lecture } from "@/hooks/scheduleHooks";
import { cn } from "@/utils/cn";

const LectureCard = ({ data, enrollMode, setSelectedLectures, isSelected }: TimeTableProps) => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null);
  const [wasLongPressed, setWasLongPressed] = useState(false);

  // 길게 눌렀을 때 실행될 함수
  const handleLongPress = () => {
    setWasLongPressed(true); // 길게 눌렀음을 기록

    setSelectedLectures?.((prev) => {
      if (isSelected) {
        // 현재 선택되어 있다면 제거
        return prev.filter((lecture: Lecture) => lecture.subjectId !== data.subjectId);
      } else {
        // 선택되어 있지 않다면 추가
        return [...prev, data];
      }
    });
  };

  const handleMouseDown = () => {
    setWasLongPressed(false); // 새 클릭 시작 시 초기화
    const timer = setTimeout(() => {
      handleLongPress(); // 1초 이상 누르면 실행
    }, 500);
    setPressTimer(timer);
  };

  const handleMouseUp = () => {
    if (pressTimer) {
      clearTimeout(pressTimer); // 1초 전에 떼면 실행 안 됨
      setPressTimer(null);
    }
  };

  const handlePress = () => {
    if (!wasLongPressed) {
      setShowDetailModal(true); // 길게 누르지 않았을 때만 실행
    }
  };

  const handleTouchStart = () => {
    setWasLongPressed(false);
    const timer = setTimeout(() => {
      handleLongPress();
    }, 500);
    setPressTimer(timer);
  };

  const handleTouchEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
  };

  return (
    <>
      <Button
        onPress={handlePress} // 길게 누르면 실행 안 됨
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart} // 모바일 터치 대응
        onTouchEnd={handleTouchEnd}
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
