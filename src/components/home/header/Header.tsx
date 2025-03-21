import Image from "next/image";
import NtButton from "./NtButton";

export default function Header() {
  return (
    <header className="absolute top-0 z-10 flex h-[73px] w-full max-w-[600px] items-center justify-between px-[18px]">
      <h1 className="w-[10%] text-center text-[18px] font-semibold text-[#143967]">홈</h1>
      <div className="flex w-[20%] items-center gap-[3px]">
        <NtButton />
        <Image src="/images/hamburger.svg" width={17} height={17} alt="메뉴 버튼" />
      </div>
    </header>
  );
}
