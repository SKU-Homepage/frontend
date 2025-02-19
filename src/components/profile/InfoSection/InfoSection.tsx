import P from "@/components/profile";
import UserInfo from "./UserInfo";
import Tip from "../../common/Tip";

const InfoSection = () => {
  return (
    <P.InfoSection>
      <UserInfo />
      <Tip msg="위젯을 자유롭게 설정해보세요." />
    </P.InfoSection>
  );
};

export default InfoSection;
