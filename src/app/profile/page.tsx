import Tip from "@/components/common/Tip";
import P from "@/components/profile";
import UserInfo from "../../components/profile/UserInfo";
import Service from "../../components/profile/Service";

export default function Profile() {
  return (
    <P>
      <P.Header />
      <UserInfo />
      <Tip msg="위젯을 자유롭게 설정해보세요." />
      <Service />
    </P>
  );
}
