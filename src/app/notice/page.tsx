"use client";

import { Header, NoticeButtonSection, TimeInformation } from "@/components/notice";

export default function Notice() {
  return (
    <>
      <Header
        title="공지사항"
        mention="전체 학사 일정과 개인 일정을 추가하여 한눈에 정리할 수 있어요"
      />
      <TimeInformation />
      <NoticeButtonSection />
    </>
  );
}
