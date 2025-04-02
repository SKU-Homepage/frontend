"use client";

import Image from "next/image";
import ButtonSection from "./ButtonSection";
import { Checkbox } from "@headlessui/react";
import { useState } from "react";
import { cn } from "@/utils/cn";

const CheckSection = () => {
  const [terms, setTerms] = useState([
    { id: 1, label: "이용 약관 동의", required: true, checked: false },
    { id: 2, label: "개인정보 수집 및 이용 동의", required: true, checked: false },
  ]);

  // 모든 항목이 체크되었는지 여부
  const allChecked = terms.every((term) => term.checked);

  // 개별 체크박스 변경
  const toggleTerm = (id: number) => {
    setTerms((prev) =>
      prev.map((term) => (term.id === id ? { ...term, checked: !term.checked } : term))
    );
  };

  // 전체 동의/해제
  const toggleAll = () => {
    const newChecked = !allChecked;
    setTerms((prev) => prev.map((term) => ({ ...term, checked: newChecked })));
  };

  return (
    <>
      <div className="mt-[42px] flex w-full flex-col gap-[15px]">
        <div
          onClick={toggleAll}
          className={cn(
            `w-full rounded-[11px] border-[0.8px] border-[#75869B0F] px-[15px] py-[15px] transition duration-200`,
            {
              "bg-[#EEF0F1]": !allChecked,
              "bg-[#4F68E9]": allChecked,
            }
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[5px]">
              <Checkbox
                checked={allChecked}
                className="group block size-4 rounded-full border-[#14396769] bg-[#1439671C] transition duration-200 data-[checked]:bg-white"
              >
                <svg
                  className={cn(
                    "stroke-[#4F68E9] opacity-0 transition",
                    allChecked && "opacity-100"
                  )}
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Checkbox>
              <label
                className={cn(`text-[14px] font-semibold text-[#14396769]`, {
                  "text-white": allChecked,
                })}
              >
                아래 약관에 모두 동의합니다
              </label>
            </div>
          </div>
        </div>

        {terms.map((term) => (
          <button
            key={term.id}
            onClick={() => toggleTerm(term.id)}
            className="w-full rounded-[11px] border-[0.8px] border-[#75869B0F] px-[15px] py-[15px] transition duration-500 hover:bg-gray-100 hover:shadow-lg active:scale-95 active:bg-gray-200 active:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[5px]">
                <Checkbox
                  checked={term.checked}
                  className="group block size-4 rounded-full border-[#14396769] bg-[#1439671C] transition duration-200 data-[checked]:bg-[#4F68E9]"
                >
                  <svg
                    className="stroke-white opacity-0 transition group-data-[checked]:opacity-100"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Checkbox>
                <label className="text-[14px] leading-[20px] font-semibold text-[#14396769] decoration-solid">
                  <span className="underline underline-offset-2">{term.label}</span>
                  {term.required && <span> (필수)</span>}
                </label>
              </div>
              <Image src="/images/direction.svg" width={7} height={15} alt="약관 보러 가기" />
            </div>
          </button>
        ))}
      </div>
      <ButtonSection allChecked={allChecked} />
    </>
  );
};

export default CheckSection;
