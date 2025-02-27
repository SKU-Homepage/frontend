"use client";

import Image from "next/image";

const TableHeader = ({ number }: { number: number }) => {
  return (
    <div className="flex items-center gap-[7px] text-[15.7px]">
      <Image src="/images/sound-speaker.svg" width={23} height={23} alt="사운드 스피커" />
      <div className="leading-normal font-semibold text-[#143967]">
        <span>오늘은 </span>
        <span className="text-[#0072FF]">{number}개의</span>
        <span> 수업이 있어요</span>
      </div>
    </div>
  );
};

export default TableHeader;
