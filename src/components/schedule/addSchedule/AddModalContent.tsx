import Image from "next/image";
import TimeTable from "../TimeTable";

const AddModalContent = ({ onClose }: AddModalContentProps) => {
  return (
    <div>
      <header className="relative flex items-center justify-center">
        <h1 className="text-[20px] font-semibold text-[#143967]">학교 수업 추가하기</h1>
        <button onClick={() => onClose(false)} className="absolute right-0 rotate-45 text-[40px]">
          +
        </button>
      </header>
      <div className="mt-[38px]">
        <div className="relative flex w-full items-center gap-[9px] rounded-[7.8px] bg-[#EEF0F1] p-[9px]">
          <Image src="/images/search.png" width={16} height={16} alt="검색" />
          <input
            placeholder="수업명을 입력해 주세요."
            className="w-full text-[16px] outline-none"
          ></input>
          <Image src="/images/circle-close.svg" width={12} height={12} alt="검색내용 삭제" />
        </div>
        <div className="mt-[25px] flex flex-col gap-[17px]">
          <TimeTable />
          <TimeTable />
          <TimeTable />
        </div>
      </div>
    </div>
  );
};

export default AddModalContent;

interface AddModalContentProps {
  onClose: (isOpen: boolean) => void;
}
