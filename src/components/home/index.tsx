import { WidgetProps } from "@/constants/widgets";
import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";
import Link from "next/link";

export const Home = ({ children }: ChildrenProp) => {
  return (
    <div className="relative flex h-full w-full flex-col items-center overflow-y-auto px-[4.6%] pt-[73px] pb-[73px]">
      <div className="absolute top-0 h-[343px] w-full max-w-[600px]">
        <Image
          className="z-[-1] h-full"
          fill
          src="/images/home_background.png"
          alt="메인페이지 배경화면"
          priority
        />
      </div>
      {children}
    </div>
  );
};

const Header = ({ name }: { name: string }) => {
  return (
    <header className="flex w-full flex-col pt-[36px] pb-[21px] leading-normal text-[#fff]">
      <span className="text-[18.86px] font-bold">안녕하세요! {name}님!</span>
      <span className="text-[18.86px] font-medium">오늘도 열심히 준비해볼까요?</span>
    </header>
  );
};

const WidgetWrapper = ({ children }: ChildrenProp) => {
  return <div className="mt-[14px] mb-[28px] grid w-full grid-cols-2 gap-[10px]">{children}</div>;
};

const Widget = ({ title, description, src, url, onEditing }: WidgetProps) => {
  return (
    <Link
      href={url}
      className={`flex aspect-square flex-col items-end justify-between rounded-[15px] border-[rgba(233,235,240,0.83)] bg-[white] p-[15px] shadow-[0_4px_8.2px_0px_rgba(77,102,236,0.09)] transition-all duration-200 hover:bg-gray-100 hover:shadow-lg active:scale-95 active:bg-gray-200 active:shadow-md ${
        onEditing ? "animate-wiggle" : ""
      }`}
    >
      <div className="w-full">
        <div className="mb-[4.7px] flex w-full items-center justify-between text-[15.7px] font-semibold text-[#143967]">
          <h2>{title}</h2>
          <Image src="/images/direction.svg" alt="화살표" width={8.6} height={14} />
        </div>
        <p className="text-[12px] font-medium">{description}</p>
      </div>
      <div className="flex w-full justify-end">
        <Image
          className="aspect-square w-[35%]"
          quality={100}
          src={src}
          width={45}
          height={45}
          alt="공지사항"
        />
      </div>
    </Link>
  );
};

Home.Header = Header;
Home.WidgetWrapper = WidgetWrapper;
Home.Widget = Widget;

export default Home;
