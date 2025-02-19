import N from "@/components/notifications";
import HeaderSection from "@/components/notifications/HeaderSection";

export default function Notifications() {
  return (
    <N>
      <HeaderSection />
      <N.List>
        <N.Item />
        <N.Item />
        <N.Item />
        <N.Item />
        <N.Item />
        <N.Item />
        <N.Item />
      </N.List>
    </N>
  );
}
