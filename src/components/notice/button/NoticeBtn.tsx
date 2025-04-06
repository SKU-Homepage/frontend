"use client";

import { useState } from "react";

import { cn } from "@/utils/cn";

import NoticeModal from "../modal/NoticeModal";

import EmptyHeart from "@/assets/images/notice/empty-heart.svg";
import RigthArrow from "@/assets/images/notice/direction.svg";
import RightArrow_Favorite from "@/assets/images/notice/arrow-favorite.svg";
import EmptyHeart_Favorite from "@/assets/images/notice/heart-favortie.svg";

type ButtonType = "favorite" | "normal";
interface NoticeBtnProps {
  noticeTitle: string;
  department: string;
  date: string;
  url: string;
  type: ButtonType;
}

const NoticeBtn = ({ noticeTitle, department, type, url, date }: NoticeBtnProps) => {
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
          {type === "normal" ? (
            <EmptyHeart className="mb-5 block" />
          ) : (
            <EmptyHeart_Favorite className="mb-5 block" />
          )}
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
          {type === "normal" ? (
            <RigthArrow className="ml-7 block" />
          ) : (
            <RightArrow_Favorite className="ml-7 block" width="100%" height="100%" />
          )}
        </div>
      </button>
      <NoticeModal
        isOpen={isOpen}
        onClose={setIsOpen}
        title={noticeTitle}
        date={date}
        department={department}
        url={url}
      />
    </>
  );
};

export default NoticeBtn;
