"use client";

import { useAtom } from "jotai";
import { calendarAtom } from "@/stores/calendar";
import { Modal } from "../common/Modal";
import { useState } from "react";
import Picker from "react-mobile-picker";
import ChevronDown from "../../../public/images/chevron_down.svg";
import { cn } from "@/utils/cn";

const MonthAndYear = () => {
  const [{ currentDate }, setCalendarAtom] = useAtom(calendarAtom);

  const [open, setOpen] = useState(false);

  const [selectedMonth, setSelectedMonth] = useState<number | null>(currentDate.getMonth() + 1);

  return (
    <>
      <div className="flex cursor-pointer items-center gap-2" onClick={() => setOpen(true)}>
        <span className="text-[18px] font-[700] text-[#143967]">
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </span>
        <ChevronDown />
      </div>
      <Modal open={open} close={() => setOpen(false)}>
        <div className="flex flex-col items-center gap-[8px] p-[16px]">
          <div className="flex items-center gap-[30px]">
            <span className="text-[18px] font-[600] text-[#143967]">2025년</span>
            <Picker
              wheelMode="normal"
              value={{ selectedMonth: selectedMonth! }}
              onChange={(value) => setSelectedMonth(value.selectedMonth)}
              className="w-[80px]"
              height={120}
            >
              <Picker.Column name="selectedMonth">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                  <Picker.Item key={month} value={month}>
                    {({ selected }) => (
                      <span
                        className={cn(
                          "text-[18px] font-[600] text-[#D7DEE5]",
                          selected && "text-[#143967]"
                        )}
                      >
                        {month}월
                      </span>
                    )}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>
          <div className="space-x-[8px]">
            <button
              onClick={() => setOpen(false)}
              className="h-[40px] w-[120px] rounded-[9px] border border-neutral-300 text-[12px] font-[600] text-[#758698]"
            >
              취소
            </button>
            <button
              onClick={() => {
                console.log(new Date(2025, selectedMonth! - 1, 1));

                setCalendarAtom((prev) => ({
                  ...prev,
                  currentDate: new Date(2025, selectedMonth! - 1, 1),
                }));
                setOpen(false);
              }}
              className="h-[40px] w-[120px] rounded-[9px] border bg-[#1A4C89] text-[12px] font-[600] text-white"
            >
              확인
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MonthAndYear;
