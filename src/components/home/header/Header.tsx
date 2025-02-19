import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex top-0 z-10 justify-between w-full py-[23px] px-[24px] items-center absolute">
      <h1 className="text-[18px] text-[#143967] font-semibold">홈</h1>
      <div className="flex gap-[10px]">
        <Link href="/notifications">
          <Image src="/images/bell.svg" width={18} height={19} alt="알림 버튼" />
        </Link>
        <Image src="/images/hamburger.svg" width={15} height={13} alt="메뉴 버튼" />
      </div>
    </header>
  );
}
