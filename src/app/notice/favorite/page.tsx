"use client";

import { HeaderWithBackButton, HeaderWithTitleAndMention } from "@/components/common";
import { NoticeBtn } from "@/components/notice";

export default function FavoriteNotificationPage() {
  return (
    <>
      <HeaderWithBackButton />
      <HeaderWithTitleAndMention
        title="찜 목록"
        mention="전체 학사 일정과 개인 일정을 추가하여 한눈에 정리할 수 있어요"
      />
      <NoticeBtn
        noticeTitle="test"
        department="test"
        type="favorite"
        onClick={() => console.log("test")}
      />
    </>
  );
}
