import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";

const Profile = ({ children }: ChildrenProp) => {
  return <div className="flex flex-col px-[4.6%] pt-[30px]">{children}</div>;
};

const Header = () => {
  return (
    <h1 className="w-full text-center text-[17px] font-semibold leading-normal mb-[22px] text-[#143967]">
      마이 페이지
    </h1>
  );
};

const InfoWrapper = ({ children }: ChildrenProp) => {
  return (
    <div className="bg-[url('/images/profile_background.png')] pt-[20px] pl-[5.36%] h-[155px] rounded-[9.4px] shadow-[0_1.5px_6.4px_#F6F6F6]">
      <div className="flex gap-[25px]">{children}</div>
    </div>
  );
};

const ProfileImg = () => {
  return (
    <div className="relative">
      <Image src="/images/ex.svg" width={79} height={98} alt="예시 이미지" />
      <Image
        className="absolute bottom-[0px] right-[0px] translate-x-[50%] translate-y-[50%]"
        src="/images/edit.svg"
        width={26}
        height={26}
        alt="수정 이미지"
      />
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

const ServiceSection = ({ children }: ChildrenProp) => {
  return <div className="flex flex-col mt-[29px]">{children}</div>;
};

const ServiceHeader = () => {
  return (
    <header className="text-[17px] font-semibold leading-normal mb-[27px]">전체 서비스</header>
  );
};

const ServiceWrapper = ({ children }: ChildrenProp) => {
  return <div className="flex flex-col gap-[22px]">{children}</div>;
};

const Service = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-[18px]">
        <div className="flex justify-center items-center rounded-[4px] w-[29px] aspect-square bg-[#E9EFF7]">
          <Image src="/images/color-speaker.svg" width={22} height={22} alt="공지사항 버튼" />
        </div>
        <h3 className="text-[15px] font-medium text-[#143967]">공지사항</h3>
      </div>
      <Image src="/images/direction.svg" width={8} height={14} alt="바로가기" />
    </div>
  );
};

Profile.Header = Header;
Profile.InfoWrapper = InfoWrapper;
Profile.ProfileImg = ProfileImg;
Profile.UserInfo = UserInfo;
Profile.ServiceSection = ServiceSection;
Profile.ServiceHeader = ServiceHeader;
Profile.ServiceWrapper = ServiceWrapper;
Profile.Service = Service;
export default Profile;
