import Image from "next/image";
import emptyHeart from "@/assets/images/notice/empty-heart.svg";
import rigthArrow from "@/assets/images/notice/direction.svg";

type ButtonType = "favorite" | "normal";
interface NoticeBtnProps {
  noticeTitle: string;
  department: string;
  type: ButtonType;
  onClick: (openState: boolean) => void;
}

const NoticeBtn = ({ noticeTitle, department, type, onClick }: NoticeBtnProps) => {
  const colorVariant = {
    normal:
      "flex w-full h-16 justify-center items-center cursor-pointer bg-[#EEF0F1] rounded-xl mb-5",
    favorite:
      "flex w-full h-16 justify-center items-center cursor-pointer bg-[#436185] rounded-xl mb-5",
  };

  if (
    typeof noticeTitle === "undefined" ||
    typeof department === "undefined" ||
    typeof type === "undefined"
  )
    throw new Error("noticeTitle, department, type 중 입력을 안하신 값이 있습니다.");

  return (
    <button
      className={
        type === "normal"
          ? colorVariant.normal
          : type === "favorite"
          ? colorVariant.favorite
          : undefined
      }
      onClick={() => onClick(true)}
    >
      <div className="flex flex-1 justify-center items-center h-[20px] relative">
        <Image src={emptyHeart} alt="empty-heart" fill={true} />
      </div>

      <div className="flex flex-col flex-4 h-full justify-evenly">
        <p className="font-bold text-xs text-[#143967] text-left">{noticeTitle}</p>
        <p className="font-normal text-[11px] text-[#143967] text-left opacity-60">{department}</p>
      </div>

      <div className="flex flex-1 h-[20px] relative">
        <Image src={rigthArrow} alt="empty-heart" fill={true} />
      </div>
    </button>
  );
};

export default NoticeBtn;
