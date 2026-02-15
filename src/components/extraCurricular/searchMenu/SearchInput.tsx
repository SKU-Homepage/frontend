import Image from "next/image";

interface SearchInputProps {
  onClose: () => void;
}

export default function SearchInput({ onClose }: SearchInputProps) {
  return (
    <div className="mb-2 flex h-[35px] w-full items-center gap-2">
      <div className="relative flex-1">
        <Image
          src="/images/extracurricular/searchIcon.png"
          width={13}
          height={13}
          alt="검색"
          className="absolute top-1/2 left-3 -translate-y-1/2"
        />
        <input
          className="h-[35px] w-full rounded-[8px] border border-[#EEF0F16E] bg-[#14396717] pl-8 pr-3 text-[12px] font-normal text-[#143967] placeholder-[#14396769]"
          placeholder="비교과 프로그램 검색하기"
          type="text"
          autoFocus
        />
      </div>
      <button
        onClick={onClose}
        className="shrink-0 text-[12px] font-medium text-[#75869B]"
      >
        취소
      </button>
    </div>
  );
}
