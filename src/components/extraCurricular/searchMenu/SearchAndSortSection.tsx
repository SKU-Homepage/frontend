"use client";

import Image from "next/image";
import { useState } from "react";
import SearchInput from "./SearchInput";

const SORT_OPTIONS = [
  { label: "추천순", value: "LIKE_COUNT" },
  { label: "최신순", value: "DATE" },
  { label: "조회순", value: "VIEW_COUNT" },
] as const;

export default function SearchAndSortSection() {
  const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
  const [sortIndex, setSortIndex] = useState(0);
  const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <section className="px-[4.6%] pt-4">
      {isSearchInputOpen && (
        <SearchInput onClose={() => setIsSearchInputOpen(false)} />
      )}
      <div className="flex items-center justify-between">
        {!isSearchInputOpen && (
          <button onClick={() => setIsSearchInputOpen(true)}>
            <Image
              src="/images/extracurricular/searchIcon.png"
              width={15}
              height={15}
              alt="검색하기"
            />
          </button>
        )}
        <div className="relative ml-auto">
          <button
            onClick={() => setIsSortOpen((prev) => !prev)}
            className="flex items-center gap-1 text-[12px] font-medium text-[#143967]"
          >
            {SORT_OPTIONS[sortIndex].label}
            <Image
              src="/images/extracurricular/bottomArrow.png"
              width={10}
              height={5}
              alt="정렬"
            />
          </button>
          {isSortOpen && (
            <ul className="absolute right-0 z-10 mt-1 w-[80px] rounded-[8px] bg-white py-1 shadow-md">
              {SORT_OPTIONS.map((option, index) => (
                <li key={option.value}>
                  <button
                    onClick={() => {
                      setSortIndex(index);
                      setIsSortOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-[11px] ${
                      sortIndex === index
                        ? "font-semibold text-[#4D66EC]"
                        : "text-[#143967]"
                    }`}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
