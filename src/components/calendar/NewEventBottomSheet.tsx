import { useState } from "react";
import SlideUpModal from "@/components/common/SlideUpModal";
import { cn } from "@/utils/cn";
import DatePicker from "./DatePicker";
import ColorPicker from "./ColorPicker";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { eventAtom } from "@/stores/calendar";
import { privateApi } from "@/api/axios";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { toast } from "react-toastify";
import Toast from "./Toast";
dayjs.extend(customParseFormat);

export const NewEventBottomSheet = () => {
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const [{ isOpen, title, isAllDay, startDate, endDate, selectedColor, canAdd }, setEvent] =
    useAtom(eventAtom);

  const [dateSelectorType, setDateSelectorType] = useState<"start" | "end">("start");

  const queryClient = useQueryClient();

  const { mutate: addEvent } = useMutation({
    mutationFn: () =>
      privateApi.post("/calendar/users", {
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
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["personalEvent"],
      });
      setEvent((prev) => ({ ...prev, isOpen: false }));
      toast(<Toast message="일정 등록 완료!" />);
    },
    onError: () => {
      toast(<Toast message="오류가 발생하였습니다." error />);
    },
  });

  return (
    <SlideUpModal
      isOpen={isOpen}
      setIsOpen={(boolean) => setEvent((prev) => ({ ...prev, isOpen: boolean }))}
    >
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
            onChange={(e) => setEvent((prev) => ({ ...prev, title: e.target.value.trim() }))}
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
                  "absolute z-[0] h-[16px] w-[20px] cursor-pointer rounded-[8px] bg-white transition-all duration-250",
                  isAllDay && "translate-x-[16px]"
                )}
                onClick={() =>
                  setEvent((prev) => ({
                    ...prev,
                    isAllDay: !isAllDay,
                    endDate: {
                      date: prev.startDate.date,
                      hour: prev.startDate.hour,
                      minute: prev.startDate.minute,
                    },
                    canAdd: true,
                  }))
                }
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
            <span>
              {startDate.date} {!isAllDay && `${startDate.hour}:${startDate.minute}`}
            </span>
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
            <span className={cn(!canAdd && "text-red-500")}>
              {endDate.date} {!isAllDay && `${endDate.hour}:${endDate.minute}`}
            </span>
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
        className="mt-[32px] flex w-full cursor-pointer items-center justify-center rounded-[10px] bg-[#143967] py-[16px] text-[14px] font-[600] text-white disabled:bg-[#BDC6D0]"
        disabled={!canAdd || title.length === 0}
      >
        일정 등록하기
      </button>
    </SlideUpModal>
  );
};

export default NewEventBottomSheet;
