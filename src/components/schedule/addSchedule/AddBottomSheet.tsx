import Button from "@/components/common/Button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Sheet, SheetRef } from "react-modal-sheet";
import TimeTable from "../LectureCard";
import { cn } from "@/utils/cn";
import { Lecture, postLectures } from "@/hooks/scheduleHooks";
import NonSearched from "../NonSearched";

export default function AddBottomSheet({ selectedLectures }: AddBottomSheetProps) {
  const snapPoints = [450, 130];
  const ref = useRef<SheetRef>(null);
  const prevLectureCount = useRef(selectedLectures.length); // ✅ 이전 개수 저장
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    if (ref.current) ref.current.snapTo(1);
  }, []);

  useEffect(() => {
    if (selectedLectures.length > prevLectureCount.current) {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 300);
    }

    prevLectureCount.current = selectedLectures.length;
  }, [selectedLectures.length]);

  const handleEnroll = async () => {
    const lectureIds = selectedLectures.map((item) => item.subjectId);
    const res = await postLectures(lectureIds);

    if (res) location.reload();
  };

  const handleSnap = (index: number) => {
    if (ref.current) {
      const closestSnapPoint = snapPoints.reduce((prev, curr) =>
        Math.abs(curr - snapPoints[index]) < Math.abs(prev - snapPoints[index]) ? curr : prev
      );
      const targetIndex = snapPoints.indexOf(closestSnapPoint);
      if (targetIndex !== index) {
        ref.current.snapTo(targetIndex);
      }

      setIsExpanded(targetIndex === 0);
    }
  };

  const handleClose = () => {
    if (ref.current) ref.current.snapTo(1);
  };

  return (
    <Sheet
      initialSnap={1}
      snapPoints={snapPoints}
      ref={ref}
      isOpen
      onClose={handleClose}
      onSnap={handleSnap}
      className="z-30! flex justify-center"
    >
      {isExpanded ? <Sheet.Backdrop onTap={handleClose} /> : <></>}
      <Sheet.Container
        className={cn(`left-auto! max-w-xl justify-center`, {
          "animate-dooguen": isPulsing,
        })}
      >
        <Sheet.Header className="flex flex-col items-center justify-center gap-[9px] py-[7px]">
          <Image src="/images/direction-up.png" width={18} height={5} alt="up" />
          <span className="text-[12px] font-semibold text-[#143967]">
            <span className="font-bold text-[#4D66EC]">{selectedLectures?.length || 0}개</span>의
            수업이 선택되었어요
          </span>
        </Sheet.Header>
        <Sheet.Content disableDrag>
          <Sheet.Scroller>
            <div className="flex flex-col items-center p-4 pt-0">
              {isExpanded && (
                <div className="flex h-[300px] w-full flex-col gap-[10px] overflow-y-scroll">
                  {selectedLectures?.length ? (
                    selectedLectures.map((lecture) => (
                      <TimeTable key={lecture.subjectId} data={lecture} />
                    ))
                  ) : (
                    <NonSearched
                      title="선택된 수업이 없어요"
                      description="돌아가서 수업을 선택해 주세요"
                    />
                  )}
                </div>
              )}
              <div className={cn(`w-full`, { "mt-[17px]": isExpanded })}>
                <Button color="dark" handleClick={handleEnroll} msg="시간표에 추가하기" />
              </div>
            </div>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}

interface AddBottomSheetProps {
  selectedLectures: Lecture[];
}
