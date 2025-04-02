import Image from "next/image";

const TableLoader = () => {
  return (
    <>
      <div className="flex gap-[7px]">
        <Image src="/images/sound-speaker.svg" width={23} height={23} alt="사운드 스피커" />
        <div className="h-[25px] w-[50%] animate-pulse rounded-md bg-gray-200" />
      </div>
      <div className="mt-[16.5px] flex w-full flex-col justify-center gap-[11px] rounded-[10px] bg-linear-[247deg,rgba(222,234,255,0.08)_-8.71%,rgba(154,191,255,0.15)_108.48%,rgba(200,217,237,0.16)] px-[16px] py-[11px] font-medium text-[#143967]">
        <div className="h-[11px] w-[30%] animate-pulse rounded-md bg-gray-200"></div>
        <div className="flex w-full items-end justify-between">
          <div className="h-[15px] w-[50%] animate-pulse rounded-md bg-gray-200 font-semibold"></div>
          <div className="h-[11px] w-[20%] animate-pulse rounded-md bg-gray-200"></div>
        </div>
      </div>
    </>
  );
};

export default TableLoader;
