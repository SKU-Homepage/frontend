import { TimeTable } from "@/hooks/homeHooks";
import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";

const Lecture = ({ subject, classroom, classtime }: TimeTable) => {
  return (
    <div className="flex w-full flex-col justify-center gap-[11px] rounded-[10px] bg-linear-[247deg,rgba(222,234,255,0.08)_-8.71%,rgba(154,191,255,0.15)_108.48%,rgba(200,217,237,0.16)] px-[16px] py-[11px] font-medium text-[#143967]">
      <p className="text-[11px]">{classtime}</p>
      <div className="flex w-full items-end justify-between">
        <span className="text-[15px] font-semibold">{subject}</span>
        <span className="text-[11px]">{classroom}</span>
      </div>
    </div>
  );
};

export const LecturesContainer = ({ children }: ChildrenProp) => {
  return <div className="mt-[16.5px] flex flex-col gap-[7.8px]">{children}</div>;
};

export const EmptyLecture = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-[10px] bg-linear-[247deg,rgba(222,234,255,0.08)_-8.71%,rgba(154,191,255,0.15)_108.48%,rgba(200,217,237,0.16)] px-[19px] py-[14px]">
      <div className="gap-[4px] text-[11px] font-medium text-[#75869B]">
        <p>오늘은 예정된 수업이 없어요!</p>
        <p>일정이나 수업이 있다면 추가해보세요</p>
      </div>
      <Image src="/images/cloud.png" width={47} height={37} alt="수업 없음" />
    </div>
  );
};

export default Lecture;
