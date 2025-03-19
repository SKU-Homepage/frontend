import { HeaderWithBackButton } from "@/components/common";
import { NoticeKeywordButtonSection, NoticeKeywordInputSection } from "@/components/notice";

export default function NoticeKeyWordPage() {
  return (
    <>
      <HeaderWithBackButton title="키워드 설정 (6/10)" />
      <NoticeKeywordInputSection />
      <NoticeKeywordButtonSection />
    </>
  );
}
