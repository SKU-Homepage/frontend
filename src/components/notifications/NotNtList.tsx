import Image from "next/image";

const NontNtList = () => {
  return (
    <div className="flex h-[calc(100dvh-148px)] w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-[15px]">
        <Image src="/images/non-bell.png" width={45} height={46} alt="알림 없음" />
        <span className="text-[14px] font-medium text-[#75869B]">받은 알림이 없어요</span>
      </div>
    </div>
  );
};

export default NontNtList;
