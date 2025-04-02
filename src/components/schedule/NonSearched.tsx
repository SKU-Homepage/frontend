import Image from "next/image";

const NonSearched = ({ title, description }: NonSearchedProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-[10px]">
        <Image src="/images/cloud.png" width={55} height={40} alt="검색 결과 없음" />
        <span className="text-[14px] font-semibold text-[#14396785]">{title}</span>
        <span className="text-[11px] font-medium text-[#75869B]">{description}</span>
      </div>
    </div>
  );
};

interface NonSearchedProps {
  title: string;
  description: string;
}

export default NonSearched;
