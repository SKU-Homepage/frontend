import Image from "next/image";
import SearchedList from "./SearchedList";
import { useRef, useState } from "react";

const ModalBody = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchName, setSearchName] = useState("");

  const handleSearch = () => {
    if (searchRef.current) {
      const newSearch = searchRef.current.value.trim();
      if (!newSearch) return;

      setSearchName(newSearch);
      const searchHistory: string[] = JSON.parse(localStorage.getItem("searchHistory") || "[]");
      const updatedHistory = [newSearch, ...searchHistory.filter((item) => item !== newSearch)];

      if (updatedHistory.length > 10) updatedHistory.pop();

      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleSearch();
  };

  return (
    <div className="mt-[20px] h-full">
      <div className="relative flex w-full items-center gap-[9px] rounded-[7.8px] bg-[#EEF0F1] p-[9px]">
        <Image src="/images/search.png" width={16} height={16} alt="검색" />
        <input
          ref={(node) => {
            searchRef.current = node;
            if (searchRef.current) searchRef.current.value = searchName;
          }}
          placeholder="수업명을 입력해 주세요."
          className="w-full text-[16px] outline-none"
          onKeyDown={handleKeyDown} // 데스크톱 Enter 감지
          onBlur={handleSearch} // 모바일 확인 버튼 감지
        />
        <Image
          src="/images/circle-close.svg"
          width={12}
          height={12}
          alt="검색내용 삭제"
          onClick={() => {
            setSearchName("");
            if (searchRef.current) searchRef.current.value = "";
          }}
          className="cursor-pointer"
        />
      </div>
      <SearchedList searchName={searchName} setSearchName={setSearchName} />
    </div>
  );
};

export default ModalBody;
