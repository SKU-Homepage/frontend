import Image from "next/image";
import { useEffect, useState } from "react";

const CurrentSearched = ({ setSearchName }: { setSearchName: (name: string) => void }) => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("searchHistory");
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  return (
    <div className="mt-[24px] w-full">
      <h1 className="mb-[30px] text-[14px] font-semibold">최근 검색</h1>
      <div className="flex w-full flex-col gap-[22px]">
        {searchHistory.map((item) => (
          <div
            onClick={() => {
              setSearchName(item);
              const searchHistory: string[] = JSON.parse(
                localStorage.getItem("searchHistory") || "[]"
              );
              const updatedHistory = [item, ...searchHistory.filter((list) => list !== item)];
              localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
            }}
            key={item}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-[14px]">
              <div className="relative flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#EEF0F1]">
                <Image src="/images/search.png" width={20} height={20} alt="최근검색 이미지" />
              </div>
              <span className="text-[14px] text-[#143967]">{item}</span>
            </div>
            <button className="rotate-45 text-[20px]">+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentSearched;
