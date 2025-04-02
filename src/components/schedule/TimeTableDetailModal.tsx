import Image from "next/image";
import Button from "../common/Button";
import { Lecture } from "@/hooks/scheduleHooks";

const TimeTableDetailModal = ({
  setSelectedLectures,
  data,
  onClose,
  enrollMode,
}: TimeTableDetailModalProps) => {
  const selectLecture = () => {
    let isError = false;
    if (setSelectedLectures) {
      setSelectedLectures((prev: Lecture[]) => {
        if (prev.some((lecture) => lecture.subjectId === data.subjectId)) {
          isError = true;
          return prev; // 중복 방지
        }
        return [...prev, data];
      });
    }
    if (isError) alert("이미 선택된 강의입니다.");
    onClose(false);
  };

  return (
    <div className="relative flex w-full flex-col gap-[13px] text-[#143967]">
      <header className="flex items-center justify-between text-[20px] font-semibold">
        <h1 className="leading-[100%]">{data.subject}</h1>
        <button onClick={() => onClose(false)} className="absolute right-0 rotate-45 text-[35px]">
          +
        </button>
      </header>
      <p className="text-[15px] leading-[100%] font-medium">{data.professor}</p>
      <div className="flex w-full flex-col gap-[14px] rounded-[5px] bg-[#E7EAED8C] p-[14px]">
        <div className="flex items-center gap-[14px] text-[11px]">
          <Image src="/images/clock.png" width={14} height={14} alt="일정 시간" />
          <span className="font-medium">화 10:00-11:50</span>
        </div>
        <div className="flex items-center gap-[14px] text-[11px]">
          <Image src="/images/pin.png" width={14} height={14} alt="일정 시간" />
          <span className="font-medium">{data.classroom}</span>
        </div>
        <div className="flex items-center gap-[14px] text-[11px]">
          <Image src="/images/blue-check.svg" width={14} height={14} alt="일정 시간" />
          <span className="font-medium">
            {data.grade !== "0" ? data.grade : "전체"}학년 {data.division} {data.credit}학점
          </span>
        </div>
      </div>
      {enrollMode && <Button msg="강의 선택하기" color="dark" handleClick={selectLecture} />}
    </div>
  );
};

interface TimeTableDetailModalProps {
  data: Lecture;
  onClose: (isOpen: boolean) => void;
  setSelectedLectures?: React.Dispatch<React.SetStateAction<Lecture[]>>;
  enrollMode?: boolean;
}

export default TimeTableDetailModal;
