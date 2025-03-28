import { HeaderWithBackButton } from "@/components/common";
import { ChildrenProp } from "@/utils/children.type";

export default function ScheduleLayout({ children }: ChildrenProp) {
  return (
    <>
      <HeaderWithBackButton title="수업 시간표" />
      {children}
    </>
  );
}
