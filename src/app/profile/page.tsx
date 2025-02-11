import P from "@/components/profile";
import Service from "../../components/profile/Service";
import InfoSection from "@/components/profile/InfoSection";

export default function Profile() {
  return (
    <P>
      <P.Header />
      <InfoSection />
      <P.WidgetSection />
      <Service />
    </P>
  );
}
