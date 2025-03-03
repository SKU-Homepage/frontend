import Image from "next/image";

import trashIcon from "@/assets/images/notice/trashIcon.png";

interface NoticeKeywordBtnProps {
  keyword: string;
}

const NoticeKeywordButton = ({ keyword }: NoticeKeywordBtnProps) => {
  return (
    <div className="flex items-center justify-between w-full h-8 border-b-2 border-[#75869B21]">
      <p className="font-medium text-[16px] text-[#143967] ml-1.5">{keyword}</p>
      <button className="mr-1.5 cursor-pointer">
        <Image src={trashIcon} alt="trash-icon" />
      </button>
    </div>
  );
};

export default NoticeKeywordButton;
