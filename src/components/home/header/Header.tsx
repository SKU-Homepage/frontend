import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 z-10 flex w-full max-w-[600px] items-center justify-between px-[18px] py-[23px]">
      <h1 className="w-[10%] text-center text-[18px] font-semibold text-[#143967]">홈</h1>
      <div className="flex w-[20%] items-center justify-center gap-[15px]">
        <Link className="flex justify-center" href="/notifications">
          <Image src="/images/bell.svg" width={18} height={19} alt="알림 버튼" />
        </Link>
        <Image src="/images/hamburger.svg" width={15} height={13} alt="메뉴 버튼" />
      </div>
    </header>
  );
}
