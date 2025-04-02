"use client";

import Image from "next/image";
import { useState } from "react";
import SearchInput from "./SearchInput";

export default function SearchAndSortSection() {
  const [isSearchInputOpen, setIsSearchInputOpen] = useState<boolean>(false);
  return (
    <section className="px-6">
      {isSearchInputOpen && <SearchInput />}
      {!isSearchInputOpen && (
        <button onClick={() => setIsSearchInputOpen((prev) => !prev)}>
          <Image
            src="/images/extracurricular/searchIcon.png"
            width={15}
            height={15}
            alt="검색하기"
          />
        </button>
      )}
    </section>
  );
}
