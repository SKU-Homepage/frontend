import P from "@/components/profile";
import ProfileImg from "./ProfileImg";
import UserInfo from "./userInfo/UserInfo";

const UserInfoSection = () => {
  return (
    <P.InfoWrapper>
      <ProfileImg />
      <UserInfo />
    </P.InfoWrapper>
  );
};

export default UserInfoSection;
