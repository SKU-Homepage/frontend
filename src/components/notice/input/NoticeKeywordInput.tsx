"use client";

import React, { useState } from "react";

import { cn } from "@/utils/cn";

const NoticeKeywordInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex h-10 w-full rounded-sm bg-[#EEF0F1]">
      <input
        className="w-[80%] p-1.5 text-[14px] text-[#14396769] outline-none placeholder-shown:font-normal focus:border-none"
        placeholder="알림 받을 키워드를 입력해주세요"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className={cn("w-[20%] font-normal", {
          "text-[#14396738]": inputValue === "",
          "text-[#143967]": inputValue !== "",
        })}
      >
        등록
      </button>
    </div>
  );
};

export default NoticeKeywordInput;
