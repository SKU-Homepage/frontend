import P from "@/components/profile";
import Service from "../../components/profile/Service";
import InfoSection from "@/components/profile/InfoSection/InfoSection";

export default function Profile() {
  return (
    <P>
      <InfoSection />
      <P.WidgetSection />
      <Service />
    </P>
  );
}
