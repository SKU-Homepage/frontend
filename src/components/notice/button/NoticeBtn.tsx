"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";

import NoticeModal from "../modal/NoticeModal";

type ButtonType = "favorite" | "normal";
interface NoticeBtnProps {
  noticeTitle: string;
  department: string;
  type: ButtonType;
  date: string;
  url: string;
}

const NoticeBtn = ({ noticeTitle, department, type, date, url }: NoticeBtnProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (
    typeof noticeTitle === "undefined" ||
    typeof department === "undefined" ||
    typeof type === "undefined"
  )
    throw new Error("noticeTitle, department, type 중 입력을 안하신 값이 있습니다.");

  return (
    <>
      <button
        className={cn(
          "mb-[15px] flex h-[70px] w-full cursor-pointer items-center justify-center rounded-xl",
          {
            "bg-[#EEF0F1]": type === "normal",
            "bg-[#436185]": type === "favorite",
          }
        )}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative flex h-[20px] flex-1 items-center justify-center">
          <Image
            src={
              type === "normal"
                ? "/images/notice/empty-heart.svg"
                : "/images/notice/heart-favortie.svg"
            }
            alt="하트 아이콘"
            width={20}
            height={20}
            className="mb-5 block"
          />
        </div>

        <div className="h-full flex-5 flex-col overflow-hidden">
          <p
            className={cn("w-full truncate pt-[15px] text-left text-[14px] font-bold", {
              "text-[#143967]": type === "normal",
              "text-white": type === "favorite",
            })}
          >
            {noticeTitle}
          </p>
          <p
            className={cn("pt-[3px] text-left text-[11px] font-bold", {
              "text-[#1439679E]": type === "normal",
              "text-white": type === "favorite",
            })}
          >
            {department}
          </p>
        </div>

        <div className="relative flex h-[20px] flex-1">
          <Image
            src={
              type === "normal"
                ? "/images/notice/direction.svg"
                : "/images/notice/arrow-favorite.svg"
            }
            alt="화살표 아이콘"
            width={20}
            height={20}
            className="ml-7 block"
          />
        </div>
      </button>
      <NoticeModal
        isOpen={isOpen}
        onClose={setIsOpen}
        author={department}
        title={noticeTitle}
        date={date}
        url={url}
      />
    </>
  );
};

export default NoticeBtn;
