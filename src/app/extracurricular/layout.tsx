import { ReactNode } from "react";

import { HeaderWithBackButton, HeaderWithTitleAndMentionAndNav } from "@/components/common";

export default function ExtraCurricularLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderWithBackButton src="/images/extracurricular/favorite.png" alt="즐겨찾기" />
      <HeaderWithTitleAndMentionAndNav
        title="비교과 프로그램"
        mention="전체 학사 일정과 개인 일정을 추가하여 한 눈에 정리할 수 있어요"
        pathList={[
          {
            path: "/extracurricular",
            pathName: "전체",
          },
          {
            path: "/extracurricular/JINLO_CHWIEOB",
            pathName: "진로취업",
          },
          {
            path: "/extracurricular/GYOSU_HAKSEUB",
            pathName: "교수학습",
          },
          {
            path: "/extracurricular/DAEHAK_HYEOKSIN",
            pathName: "대학혁신",
          },
        ]}
      />
      {children}
    </>
  );
}
