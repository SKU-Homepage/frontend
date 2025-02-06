import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";
import Link from "next/link";

export const Home = ({ children }: ChildrenProp) => {
  return (
    <div className="flex box flex-col bg-[#F6F6F6] bg-[url('/images/home_background.png')] bg-no-repeat items-center px-[24px] h-[calc(100vh-75px)] overflow-y-auto">
      {children}
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex flex-col leading-normal text-[#fff] w-full pt-[36px] pb-[21px] gap-[6px]">
      <span className="text-[18.86px] font-bold">안녕하세요! 서경대님!</span>
      <span className="text-[18.86px] font-medium">오늘도 열심히 준비해볼까요?</span>
    </header>
  );
};

const TimeTable = ({ children }: ChildrenProp) => {
  const date = new Date();
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const today = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${
    weekDays[date.getDay()]
  }요일`;

  return (
    <div className="flex w-full p-[18px] bg-[#FFF] flex-col border-[0.5px] border-[rgba(228, 228, 228, 1)] rounded-[15px] shadow-[0_4px_8.2px_0px_rgba(77,102,236,0.08)]">
      <div className="flex items-center gap-[7px]">
        <div className="w-[23px]" />
        <span className="text-[9px] leading-normal text-[#75869B]">{today}</span>
      </div>
      <div className="flex items-center gap-[7px] text-[15.7px]">
        <Image src="/images/sound-speaker.svg" width={23} height={23} alt="사운드 스피커" />
        <div className="leading-normal text-[#143967] font-semibold">
          <span>오늘은 </span>
          <span className="text-[#0072FF]">2개의</span>
          <span> 수업이 있어요</span>
        </div>
      </div>
      <div className="flex flex-col gap-[7.8px] mt-[16.5px]">{children}</div>
      <Link
        href="#"
        className="flex justify-end items-center gap-[3px] w-full text-end text-[9px] mt-[9px] opacity-56 text-[#75869B]"
      >
        <span>내 시간표 확인하기</span>
        <Image src="/images/direction.svg" alt="화살표" width={5} height={8} />
      </Link>
    </div>
  );
};

const Lecture = () => {
  return (
    <div className="flex flex-col gap-[11px] w-full rounded-[10px] px-[16px] py-[11px] font-medium justify-center text-[#143967] bg-linear-[247deg,rgba(222,234,255,0.08)_-8.71%,rgba(154,191,255,0.15)_108.48%,rgba(200,217,237,0.16)]">
      <p className="text-[11px] ">10:00 - 11:50</p>
      <div className="flex justify-between items-end w-full">
        <span className="text-[15px] font-semibold">World English2</span>
        <span className="text-[11px]">은주관 505</span>
      </div>
    </div>
  );
};

const Tip = () => {
  return (
    <div className="flex gap-[14.5px] w-full h-[48px] px-[17px] py-[12px] mt-[22px] mb-[14px] rounded-[12px] bg-[#E9EFF7] items-center">
      <span className="text-[12px] font-bold">TIP !</span>
      <span className="text-[11px]">위젯을 자유롭게 설정해봐요</span>
    </div>
  );
};

const WidgetWrapper = ({ children }: ChildrenProp) => {
  return <div className="grid grid-cols-2 w-full gap-[2.8%] mb-[28px]">{children}</div>;
};

const Widget = () => {
  return (
    <div className="flex flex-col p-[15px] !bg-[white] rounded-[15px]">
      <Link className="aspect-square flex flex-col justify-between" href="#">
        <div>
          <div className="flex w-full justify-between mb-[4.7px] text-[15.7px] font-semibold items-center text-[#143967]">
            <h2>공지사항</h2>
            <Image src="/images/direction.svg" alt="화살표" width={8.6} height={14} />
          </div>
          <p className="text-[12px] font-medium">공지사항을 빠르게 확인해보세요.</p>
        </div>
        <div className="flex w-full justify-end">
          <Image src="/images/color-speaker.svg" width={58} height={58} alt="공지사항" />
        </div>
      </Link>
    </div>
  );
};

const AddWidget = () => {
  return (
    <button className="flex items-center text-[#98AABF] text-[20px] opacity-78 justify-center p-[22px] rounded-[15px] border-[3px] border-[rgba(233,235,240,0.83)]">
      +
    </button>
  );
};

Home.Header = Header;
Home.TimeTable = TimeTable;
Home.Lecture = Lecture;
Home.Tip = Tip;
Home.WidgetWrapper = WidgetWrapper;
Home.Widget = Widget;
Home.AddWidget = AddWidget;
export default Home;
