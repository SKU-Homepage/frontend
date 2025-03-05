import { WidgetProps } from "@/constants/widgets";
import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";
import Link from "next/link";

export const Home = ({ children }: ChildrenProp) => {
  return (
    <div className="relative flex h-full w-full flex-col items-center overflow-y-scroll px-[4.6%] pt-[73px]">
      <div className="absolute top-0 h-[343px] w-full max-w-[600px]">
        <Image
          className="z-[-1] h-full"
          fill
          src="/images/home_background.png"
          alt="메인페이지 배경화면"
        />
      </div>
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex w-full flex-col gap-[6px] pt-[36px] pb-[21px] leading-normal text-[#fff]">
      <span className="text-[18.86px] font-bold">안녕하세요! 서경대님!</span>
      <span className="text-[18.86px] font-medium">오늘도 열심히 준비해볼까요?</span>
    </header>
  );
};

const WidgetWrapper = ({ children }: ChildrenProp) => {
  return <div className="mt-[14px] mb-[28px] grid w-full grid-cols-2 gap-[10px]">{children}</div>;
};

const Widget = ({ title, description, src, url }: WidgetProps) => {
  return (
    <div className="flex aspect-square flex-col rounded-[15px] border-[3px] border-[rgba(233,235,240,0.83)] bg-[white] p-[15px]">
      <Link className="flex flex-col justify-between" href={url || "#"}>
        <div>
          <div className="mb-[4.7px] flex w-full items-center justify-between text-[15.7px] font-semibold text-[#143967]">
            <h2>{title}</h2>
            <Image src="/images/direction.svg" alt="화살표" width={8.6} height={14} />
          </div>
          <p className="text-[12px] font-medium">{description}</p>
        </div>
        <div className="flex w-full justify-end">
          <Image src={src} width={58} height={58} alt="공지사항" />
        </div>
      </Link>
    </div>
  );
};

Home.Header = Header;
Home.WidgetWrapper = WidgetWrapper;
Home.Widget = Widget;

export default Home;
