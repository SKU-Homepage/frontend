import P from "@/components/profile";
import ProfileImg from "./ProfileImg";

const UserInfo = () => {
  return (
    <P.InfoWrapper>
      <ProfileImg />
      <P.UserInfo />
    </P.InfoWrapper>
  );
};

export default UserInfo;
