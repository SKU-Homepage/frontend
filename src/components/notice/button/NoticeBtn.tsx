import Image from "next/image";

import { cn } from "@/utils/cn";

import emptyHeart from "@/assets/images/notice/empty-heart.svg";
import rigthArrow from "@/assets/images/notice/direction.svg";
import rightArrow_favorite from "@/assets/images/notice/arrow-favorite.svg";
import emptyHeart_favorite from "@/assets/images/notice/heart-favortie.svg";

type ButtonType = "favorite" | "normal";
interface NoticeBtnProps {
  noticeTitle: string;
  department: string;
  type: ButtonType;
  onClick: () => void;
}

const NoticeBtn = ({ noticeTitle, department, type, onClick }: NoticeBtnProps) => {
  // const colorVariant = {
  //   normal:
  //     "flex w-full h-16 justify-center items-center cursor-pointer bg-[#EEF0F1] rounded-xl mb-5",
  //   favorite:
  //     "flex w-full h-16 justify-center items-center cursor-pointer bg-[#436185] rounded-xl mb-5",
  // };

  if (
    typeof noticeTitle === "undefined" ||
    typeof department === "undefined" ||
    typeof type === "undefined"
  )
    throw new Error("noticeTitle, department, type 중 입력을 안하신 값이 있습니다.");

  return (
    <button
      className={cn("flex w-full h-16 justify-center items-center cursor-pointer rounded-xl mb-5", {
        "bg-[#EEF0F1]": type === "normal",
        " bg-[#436185]": type === "favorite",
      })}
      onClick={() => onClick()}
    >
      <div className="flex flex-1 justify-center items-center h-[20px] relative">
        <Image
          src={
            type === "normal" ? emptyHeart : type === "favorite" ? emptyHeart_favorite : undefined
          }
          alt="empty-heart"
          fill={true}
        />
      </div>

      <div className="flex flex-col flex-4 h-full justify-evenly">
        <p
          className={cn("font-bold text-xs  text-left", {
            "text-[#143967]": type === "normal",
            "text-white": type === "favorite",
          })}
        >
          {noticeTitle}
        </p>
        <p
          className={cn("font-bold text-xs  text-left", {
            "text-[#143967]": type === "normal",
            "text-white": type === "favorite",
          })}
        >
          {department}
        </p>
      </div>

      <div className="flex flex-1 h-[20px] relative">
        <Image
          src={
            type === "normal" ? rigthArrow : type === "favorite" ? rightArrow_favorite : undefined
          }
          alt="empty-heart"
          height={50}
          width={50}
        />
      </div>
    </button>
  );
};

export default NoticeBtn;
