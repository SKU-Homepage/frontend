"use client";

import Image from "next/image";
import ExtraCurricularModal from "../modal/ExtraCurricularModal";
import { useState } from "react";

interface ExtraCurricularPostProps {
  date: string;
  department: string;
  thumbnail?: string;
  title: string;
  url: string;
  like: boolean;
  viewCount: number;
}

const ExtraCurricularPost = ({
  date,
  department,
  thumbnail,
  title,
  viewCount,
  url,
}: ExtraCurricularPostProps) => {
  const [isOpen, setIsopen] = useState(false);

  return (
    <>
      <article onClick={() => setIsopen(true)} className="cursor-pointer">
        <div className="relative h-[130px] w-full overflow-hidden rounded-[8px] bg-[#F0F2F5]">
          <Image
            src={thumbnail || "/images/extracurricular/default.png"}
            alt="썸네일"
            fill
            sizes="50vw"
            className="object-cover"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="absolute top-[10px] right-[10px] flex h-[24px] w-[24px] items-center justify-center rounded-[4px] bg-white/80"
          >
            <Image
              src="/images/extracurricular/favorite.png"
              alt="즐겨찾기"
              width={11}
              height={14}
            />
          </button>
        </div>

        <p className="mt-[8px] truncate text-[14px] font-semibold text-[#143967]">
          {title}
        </p>
        <p className="mt-[2px] text-[10px] text-[#626262]">{department}</p>

        <div className="mt-[4px] flex items-center justify-between">
          <p className="text-[10px] text-[#B0B0B0]">
            {date.slice(0, 10).replaceAll("-", ".")}
          </p>
          <div className="flex items-center gap-[6px]">
            <div className="flex items-center gap-[2px]">
              <Image
                src="/images/extracurricular/favoriteCount.png"
                width={7}
                height={7}
                alt="찜"
              />
              <span className="text-[8px] text-[#B0B0B0]">10</span>
            </div>
            <div className="flex items-center gap-[2px]">
              <Image
                src="/images/extracurricular/showCount.png"
                width={7}
                height={7}
                alt="조회"
              />
              <span className="text-[8px] text-[#B0B0B0]">{viewCount}</span>
            </div>
          </div>
        </div>
      </article>

      <ExtraCurricularModal
        isOpen={isOpen}
        onClose={setIsopen}
        title={title}
        author={department}
        date={date}
        url={url}
      />
    </>
  );
};

export default ExtraCurricularPost;
