import { Header, NoticeKeywordButtonSection, NoticeKeywordInputSection } from "@/components/notice";

export default function NoticeKeyWordPage() {
  return (
    <>
      <Header title="키워드 설정" mention="원하는 키워드를 모아 볼 수 있어요" />
      <NoticeKeywordInputSection />
      <NoticeKeywordButtonSection />
    </>
  );
}
