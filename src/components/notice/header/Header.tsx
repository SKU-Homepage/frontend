"use client";
import { useRouter } from "next/navigation";

import { HeaderWithBackButton, HeaderWithTitleAndMentionAndNav } from "@/components/common";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <HeaderWithBackButton msg="찜 목록" onClick={() => router.push("/notice/favorite")} />
      <HeaderWithTitleAndMentionAndNav
        title="공지사항"
        mention="전체 학사 일정과 개인 일정을 추가하여 한눈에 정리할 수 있어요"
        pathList={[
          {
            path: "/notice",
            pathName: "전체",
          },
          {
            path: "/notice/keyword",
            pathName: "키워드",
          },
        ]}
      />
    </>
  );
};

export default Header;
