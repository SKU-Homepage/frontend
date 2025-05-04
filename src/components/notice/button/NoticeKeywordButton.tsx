import Image from "next/image";

interface NoticeKeywordBtnProps {
  keyword: string;
}

const NoticeKeywordButton = ({ keyword }: NoticeKeywordBtnProps) => {
  return (
    <div className="mb-6 flex h-8 w-full items-center justify-between border-b-2 border-[#75869B21] pb-6">
      <p className="ml-1.5 text-[16px] font-medium text-[#143967]">{keyword}</p>
      <button className="mr-1.5 cursor-pointer">
        <Image src="/images/notice/trashIcon.png" alt="trash-icon" width={16} height={16} />
      </button>
    </div>
  );
};

export default NoticeKeywordButton;
