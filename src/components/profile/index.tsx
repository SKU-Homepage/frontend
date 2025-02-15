import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";
import Link from "next/link";

const Profile = ({ children }: ChildrenProp) => {
  return <div className="flex flex-col pt-[30px] pb-[18px] h-full overflow-y-auto">{children}</div>;
};

const Header = () => {
  return (
    <h1 className="w-full text-center text-[17px] font-semibold leading-normal mb-[22px] text-[#143967]">
      마이 페이지
    </h1>
  );
};

const InfoSection = ({ children }: ChildrenProp) => {
  return <div className="flex flex-col px-[4.6%]">{children}</div>;
};

const InfoWrapper = ({ children }: ChildrenProp) => {
  return (
    <div className="bg-[url('/images/profile_background.png')] pt-[20px] pl-[5.36%] h-[155px] rounded-[9.4px] shadow-[0_1.5px_6.4px_#F6F6F6]">
      <div className="flex gap-[25px]">{children}</div>
    </div>
  );
};

const UserInfo = () => {
  return (
    <div className="flex flex-col justify-end gap-[10px] leading-normal mb-[7px]">
      <h2 className="text-[18px] font-semibold">김서경</h2>
      <div className="text-[11px] font-medium">
        <p>예술대학 디자인학부 생활문화디자인전공</p>
        <p>2021418008 4학년 재학</p>
      </div>
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
    <div className="flex w-full justify-center gap-[2.2%] px-[4.6%] mt-[11px] mb-[30px]">
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
      className="flex flex-col items-center justify-center gap-[8px] flex-1 aspect-[111/78]"
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
    <header className="text-[17px] font-semibold leading-normal ml-[4.6%] mb-[27px]">
      전체 서비스
    </header>
  );
};

const Services = () => {
  const services = [
    {
      title: "공지사항",
      url: "#",
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
    <Link href={url} className="flex w-full h-[47px] justify-between last:bg-[#FFD095] px-[4.6%]">
      <div className="flex items-center gap-[18px]">
        <div className="flex justify-center items-center rounded-[4px] w-[29px] aspect-square bg-[#E9EFF7]">
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
Profile.UserInfo = UserInfo;
Profile.WidgetSection = WidgetSection;
Profile.ServiceSection = ServiceSection;
Profile.ServiceHeader = ServiceHeader;
Profile.Services = Services;

export default Profile;
