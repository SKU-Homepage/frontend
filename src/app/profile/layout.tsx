import { HeaderWithBackButton } from "@/components/common";
import { ChildrenProp } from "@/utils/children.type";

export default function ProfileLayout({ children }: ChildrenProp) {
  return (
    <>
      <HeaderWithBackButton title="마이페이지" />
      {children}
    </>
  );
}
