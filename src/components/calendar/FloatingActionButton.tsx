"use client";

import { useState } from "react";
import SlideUpModal from "../common/SlideUpModal";
import { cn } from "@/utils/cn";
import DatePicker from "./DatePicker";
import ColorPicker from "./ColorPicker";
import { useMutation } from "@tanstack/react-query";
import { privateApi } from "@/api/axios";
import { useAtom } from "jotai";
import { eventAtom } from "@/stores/calendar";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const [{ title, isAllDay, startDate, endDate, selectedColor }, setEvent] = useAtom(eventAtom);

  const [dateSelectorType, setDateSelectorType] = useState<"start" | "end">("start");

  const {
    isPending,
    isError,
    mutate: addEvent,
  } = useMutation({
    mutationFn: () =>
      privateApi
        .post("/calendar/users", {
          title,
          start: {
            date: "2025-04-02",
            time: "00:00:00",
          },
          end: {
            date: "2025-04-02",
            time: "00:00:30",
          },
          allDay: isAllDay,
          labelColor: selectedColor,
        })
        .then((response) => response.data),
    onSuccess: () => {
      setIsOpen(false);
    },
  });

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="fixed right-[25px] bottom-[25px] flex items-center justify-center rounded-[28px] bg-[#143967] px-[14px] py-[12px]"
      >
        <span className="text-[12px] font-[500] text-white">+ 새 일정 추가하기</span>
      </div>
      <SlideUpModal isOpen={isOpen} setIsOpen={setIsOpen}>
        {/* TODO folder refactoring */}
        <div className="flex flex-col gap-[24px]">
          <span className="text-[18px] font-[600] text-[#143967]">새 일정 추가하기</span>
          <div className="relative flex items-center rounded-[10px] bg-[#d7dee569] p-[14px]">
            <div
              className="absolute h-[16px] w-[16px] rounded-full"
              style={{ background: selectedColor }}
              onClick={() => setIsColorPickerOpen(true)}
            ></div>
            <SlideUpModal isOpen={isColorPickerOpen} setIsOpen={setIsColorPickerOpen}>
              <ColorPicker
                selectedColor={selectedColor}
                onChange={(newColor, autoClose) => {
                  setEvent((prev) => ({ ...prev, selectedColor: newColor }));
                  if (autoClose) setIsColorPickerOpen(false);
                }}
              />
            </SlideUpModal>
            <textarea
              rows={1}
              maxLength={30}
              placeholder="제목 입력하기"
              className="ml-[30px] w-full resize-none outline-none placeholder:text-[14px] placeholder:font-[400] placeholder:text-[#14396769]"
              value={title}
              onChange={(e) => setEvent((prev) => ({ ...prev, title: e.target.value }))}
            ></textarea>
          </div>
          <div className="rounded-[10px] bg-[#d7dee569]">
            <div className="flex items-center justify-between p-[14px]">
              <span className="text-[14px] font-[400] text-[#143967]">종일</span>
              <div
                className={cn(
                  "relative flex h-[20px] w-[40px] items-center rounded-[10px] bg-[#7a8ea75c] p-[2px]",
                  isAllDay && "bg-[#143967]"
                )}
              >
                <div
                  className={cn(
                    "absolute z-[0] h-[16px] w-[20px] cursor-pointer rounded-[8px] bg-[#f6f6f6] transition-all duration-250",
                    isAllDay && "translate-x-[16px]"
                  )}
                  onClick={() => setEvent((prev) => ({ ...prev, isAllDay: !isAllDay }))}
                ></div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#75869b45]"></div>
            {/* 시작 날짜 */}
            <div
              onClick={() => !isAllDay && setDateSelectorType("start")}
              className={cn(
                "text-[#143967 flex items-center justify-between p-[14px] text-[14px] font-[400]",
                isAllDay && "text-neutral-400"
              )}
            >
              <span>시작</span>
              {!isAllDay && (
                <span>
                  {startDate.date} {startDate.hour}:{startDate.minute}
                </span>
              )}
            </div>
            {!isAllDay && dateSelectorType === "start" && (
              <DatePicker
                date={startDate}
                onChange={(value) => setEvent((prev) => ({ ...prev, startDate: value }))}
              />
            )}
            <div className="h-[1px] w-full bg-[#75869b45]"></div>
            {/* 종료 날짜 */}
            <div
              onClick={() => !isAllDay && setDateSelectorType("end")}
              className={cn(
                "text-[#143967 flex items-center justify-between p-[14px] text-[14px] font-[400]",
                isAllDay && "text-neutral-400"
              )}
            >
              <span>종료</span>
              {!isAllDay && (
                <span>
                  {endDate.date} {endDate.hour}:{endDate.minute}
                </span>
              )}
            </div>
            {!isAllDay && dateSelectorType === "end" && (
              <DatePicker
                date={endDate}
                onChange={(value) => setEvent((prev) => ({ ...prev, endDate: value }))}
              />
            )}
          </div>
        </div>
        <button
          onClick={() => addEvent()}
          className="mt-[32px] flex w-full items-center justify-center rounded-[10px] bg-[#143967] py-[16px] text-[14px] font-[600] text-white"
        >
          일정 등록하기
        </button>
      </SlideUpModal>
    </>
  );
};

export default FloatingActionButton;
