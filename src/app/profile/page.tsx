import P from "@/components/profile";
import Service from "../../components/profile/Service";
import InfoSection from "@/components/profile/InfoSection/InfoSection";
import Header from "@/components/header/Header";

export default function Profile() {
  return (
    <P>
      <Header title="마이페이지" />
      <InfoSection />
      <P.WidgetSection />
      <Service />
    </P>
  );
}
