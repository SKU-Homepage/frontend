import { Header, NoticeBtn, NoticeBtnSection, TimeInformation } from "@/components/notice";

export default function Notice() {
  return (
    <>
      <Header
        title="공지사항"
        mention="전체 학사 일정과 개인 일정을 추가하여 한눈에 정리할 수 있어요"
      />
      <TimeInformation />
      <NoticeBtnSection>
        <NoticeBtn
          type="normal"
          department="학생처 2024.12.02"
          noticeTitle="2024 콘텐츠 인사이트 : 상상은 현실이 된다"
        />
      </NoticeBtnSection>
    </>
  );
}
