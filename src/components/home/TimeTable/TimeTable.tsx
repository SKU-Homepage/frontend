import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";
import Link from "next/link";

const TimeTable = ({ children }: ChildrenProp) => {
  const date = new Date();
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const today = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${
    weekDays[date.getDay()]
  }요일`;

  return (
    <div className="border-[rgba(228, 228, 228, 1)] flex w-full flex-col rounded-[15px] border-[0.5px] bg-[#FFF] p-[18px] shadow-[0_4px_8.2px_0px_rgba(77,102,236,0.08)]">
      <div className="flex items-center gap-[7px]">
        <div className="w-[23px]" />
        <span className="text-[9px] leading-normal text-[#75869B]">{today}</span>
      </div>
      {children}
      <Link
        href="#"
        className="mt-[9px] flex w-full items-center justify-end gap-[3px] text-end text-[9px] text-[#75869B] opacity-56"
      >
        <span>내 시간표 확인하기</span>
        <Image src="/images/direction.svg" alt="화살표" width={5} height={8} />
      </Link>
    </div>
  );
};

export default TimeTable;
