import Header from "@/components/header/Header";
import { ChildrenProp } from "@/utils/children.type";

export default function ProfileLayout({ children }: ChildrenProp) {
  return (
    <>
      <Header title="마이페이지" />
      {children}
    </>
  );
}
