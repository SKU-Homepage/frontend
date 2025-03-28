import Image from "next/image";
import Button from "../common/Button";

const TimeTableDetailModal = ({ onClose, enrollMode }: TimeTableDetailModalProps) => {
  return (
    <div className="relative flex w-full flex-col gap-[13px] text-[#143967]">
      <header className="flex items-center justify-between text-[20px] font-semibold">
        <h1 className="leading-[100%]">World English 2</h1>
        <button onClick={() => onClose(false)} className="absolute right-0 rotate-45 text-[35px]">
          +
        </button>
      </header>
      <p className="text-[15px] leading-[100%] font-medium">오일러</p>
      <div className="flex w-full flex-col gap-[14px] rounded-[5px] bg-[#E7EAED8C] p-[14px]">
        <div className="flex items-center gap-[14px] text-[11px]">
          <Image src="/images/clock.png" width={14} height={14} alt="일정 시간" />
          <span className="font-medium">화 10:00-11:50</span>
        </div>
        <div className="flex items-center gap-[14px] text-[11px]">
          <Image src="/images/pin.png" width={14} height={14} alt="일정 시간" />
          <span className="font-medium">은주관 503호</span>
        </div>
        <div className="flex items-center gap-[14px] text-[11px]">
          <Image src="/images/blue-check.svg" width={14} height={14} alt="일정 시간" />
          <span className="font-medium">전체학년 핵심교양 2학점</span>
        </div>
      </div>
      {enrollMode && <Button msg="강의 선택하기" color="dark" handleClick={() => onClose(false)} />}
    </div>
  );
};

interface TimeTableDetailModalProps {
  onClose: (isOpen: boolean) => void;
  enrollMode?: boolean;
}

export default TimeTableDetailModal;
