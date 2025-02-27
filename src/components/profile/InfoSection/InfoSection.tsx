import P from "@/components/profile";
import Tip from "../../common/Tip";
import UserInfoSection from "./UserInfoSection";

const InfoSection = () => {
  return (
    <P.InfoSection>
      <UserInfoSection />
      <Tip msg="위젯을 자유롭게 설정해보세요." />
    </P.InfoSection>
  );
};

export default InfoSection;
