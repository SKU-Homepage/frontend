"use client";

import { cn } from "@/utils/cn";

import EmptyHeart from "@/assets/images/notice/empty-heart.svg";
import RigthArrow from "@/assets/images/notice/direction.svg";
import RightArrow_Favorite from "@/assets/images/notice/arrow-favorite.svg";
import EmptyHeart_Favorite from "@/assets/images/notice/heart-favortie.svg";

type ButtonType = "favorite" | "normal";
interface NoticeBtnProps {
  noticeTitle: string;
  department: string;
  type: ButtonType;
  onClick: () => void;
}

const NoticeBtn = ({ noticeTitle, department, type, onClick }: NoticeBtnProps) => {
  if (
    typeof noticeTitle === "undefined" ||
    typeof department === "undefined" ||
    typeof type === "undefined"
  )
    throw new Error("noticeTitle, department, type 중 입력을 안하신 값이 있습니다.");

  return (
    <button
      className={cn("mb-5 flex h-16 w-full cursor-pointer items-center justify-center rounded-xl", {
        "bg-[#EEF0F1]": type === "normal",
        "bg-[#436185]": type === "favorite",
      })}
      onClick={() => onClick()}
    >
      <div className="relative flex h-[20px] flex-1 items-center justify-center">
        {type === "normal" ? (
          <EmptyHeart className="mb-5 block" />
        ) : (
          <EmptyHeart_Favorite className="mb-5 block" />
        )}
      </div>

      <div className="flex h-full flex-4 flex-col justify-evenly">
        <p
          className={cn("text-left text-xs font-bold", {
            "text-[#143967]": type === "normal",
            "text-white": type === "favorite",
          })}
        >
          {noticeTitle}
        </p>
        <p
          className={cn("text-left text-xs font-bold", {
            "text-[#143967]": type === "normal",
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
  );
};

export default NoticeBtn;
