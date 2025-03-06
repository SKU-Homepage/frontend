"use client";

import { useState } from "react";
import SlideUpModal from "../common/SlideUpModal";
import { cn } from "@/utils/cn";
import dayjs, { Dayjs } from "dayjs";
import DatePicker, { days } from "./DatePicker";

const formatDateString = (date: Dayjs) =>
  `${date.year()}년 ${date.month() + 1}월 ${date.date()}일(${days[date.day()]})`;

export interface PickedDate {
  date: string;
  hour: number;
  minute: number;
}

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const today = dayjs();

  const [isAllDay, setIsAllDay] = useState(false);
  const [startDate, setStartDate] = useState<PickedDate>({
    date: formatDateString(today),
    hour: today.hour(),
    minute: today.minute(),
  });
  const [endDate, setEndDate] = useState<PickedDate>();

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="fixed right-[25px] bottom-[25px] flex items-center justify-center rounded-[28px] bg-[#143967] px-[14px] py-[12px]"
      >
        <span className="text-[12px] font-[500] text-white">+ 새 일정 추가하기</span>
      </div>
      <SlideUpModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col gap-[24px]">
          <span className="text-[18px] font-[600] text-[#143967]">새 일정 추가하기</span>
          <div className="rounded-[10px] bg-[#d7dee569] p-[14px]">
            <div
              contentEditable
              className="outline-none empty:before:text-[14px] empty:before:font-[400] empty:before:text-[#14396769] empty:before:content-['제목_입력하기']"
            ></div>
          </div>
          <div className="rounded-[10px] bg-[#d7dee569]">
            <div className="flex items-center justify-between p-[14px]">
              <span className="text-[14px] font-[400] text-[#143967]">종일</span>
              <div className="relative flex h-[20px] w-[40px] items-center rounded-[10px] bg-[#7a8ea75c] p-[2px]">
                <div
                  className={cn(
                    "absolute z-[0] h-[16px] w-[20px] cursor-pointer rounded-[8px] bg-[#f6f6f6] transition-all duration-250",
                    isAllDay && "translate-x-[16px]"
                  )}
                  onClick={() => setIsAllDay((prev) => !prev)}
                ></div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#75869b45]"></div>
            <div className="flex items-center justify-between p-[14px]">
              <span className="text-[14px] font-[400] text-[#143967]">시작</span>
              <div></div>
            </div>
            <DatePicker date={startDate} setDate={setStartDate} />
            <div className="h-[1px] w-full bg-[#75869b45]"></div>
            <div className="flex items-center justify-between p-[14px]">
              <span className="text-[14px] font-[400] text-[#143967]">종료</span>
            </div>
          </div>
        </div>
      </SlideUpModal>
    </>
  );
};

export default FloatingActionButton;
