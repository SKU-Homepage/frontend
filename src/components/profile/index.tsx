import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";
import Link from "next/link";

const Profile = ({ children }: ChildrenProp) => {
  return <div className="flex h-full w-full flex-col overflow-y-auto pb-[18px]">{children}</div>;
};

const Header = () => {
  return (
    <h1 className="mb-[22px] w-full text-center text-[17px] leading-normal font-semibold text-[#143967]">
      마이 페이지
    </h1>
  );
};

const InfoSection = ({ children }: ChildrenProp) => {
  return <div className="flex flex-col px-[4.6%]">{children}</div>;
};

const InfoWrapper = ({ children }: ChildrenProp) => {
  return (
    <div className="h-[155px] rounded-[9.4px] bg-[url('/images/profile_background.png')] pt-[20px] pl-[5.36%] shadow-[0_1.5px_6.4px_#F6F6F6]">
      <div className="flex gap-[25px]">{children}</div>
    </div>
  );
};

const WidgetSection = () => {
  const serviceWidgets = [
    {
      title: "내 시간표",
      src: "/images/gray-calendar.svg",
      url: "#",
    },
    {
      title: "키워드 알림",
      src: "/images/gray-speaker.svg",
      url: "#",
    },
    {
      title: "공지사항 찜 목록",
      src: "/images/gray-heart.svg",
      url: "#",
    },
  ];

  return (
    <div className="mt-[11px] mb-[30px] flex w-full justify-center gap-[2.2%] px-[4.6%]">
      {serviceWidgets.map(({ title, src, url }) => (
        <Widget key={title} url={url} title={title} src={src} />
      ))}
    </div>
  );
};

const Widget = ({ src, title, url }: WidgetProps) => {
  return (
    <Link
      href={url}
      className="flex aspect-[111/78] flex-1 flex-col items-center justify-center gap-[8px] rounded-[9px] shadow-[1px_1px_3.9px_0px_rgba(68,96,129,0.09)]"
    >
      <Image src={src} width={23} height={23} alt={title} />
      <p className="text-[11px] leading-[11.8px]">{title}</p>
    </Link>
  );
};

const ServiceSection = ({ children }: ChildrenProp) => {
  return <div className="flex flex-col">{children}</div>;
};

const ServiceHeader = () => {
  return (
    <header className="mb-[27px] ml-[4.6%] text-[17px] leading-normal font-semibold">
      전체 서비스
    </header>
  );
};

const Services = () => {
  const services = [
    {
      title: "공지사항",
      url: "/notice",
      src: "/images/color-speaker.svg",
    },
    {
      title: "캠퍼스맵",
      url: "#",
      src: "/images/school.svg",
    },
    {
      title: "학사일정",
      url: "/calendar",
      src: "/images/sound-speaker.svg",
    },
    {
      title: "수업 시간표",
      url: "#",
      src: "/images/note.svg",
    },
    {
      title: "비교과 프로그램",
      url: "#",
      src: "/images/book.svg",
    },
    {
      title: "문의사항",
      url: "#",
      src: "/images/warning.svg",
    },
  ];
  return (
    <div className="flex flex-col">
      {services.map(({ title, src, url }) => (
        <Service key={title} title={title} src={src} url={url} />
      ))}
    </div>
  );
};

const Service = ({ title, url, src }: WidgetProps) => {
  return (
    <Link href={url} className="flex h-[47px] w-full justify-between px-[4.6%] last:bg-[#FFD095]">
      <div className="flex items-center gap-[18px]">
        <div className="flex aspect-square w-[29px] items-center justify-center rounded-[4px] bg-[#E9EFF7]">
          <Image src={src} width={22} height={22} alt={title} />
        </div>
        <h3 className="text-[15px] font-medium text-[#143967]">{title}</h3>
      </div>
      <Image src="/images/direction.svg" width={8} height={14} alt="바로가기" />
    </Link>
  );
};

interface WidgetProps {
  url: string;
  src: string;
  title: string;
}

Profile.Header = Header;
Profile.InfoSection = InfoSection;
Profile.InfoWrapper = InfoWrapper;
Profile.WidgetSection = WidgetSection;
Profile.ServiceSection = ServiceSection;
Profile.ServiceHeader = ServiceHeader;
Profile.Services = Services;

export default Profile;
