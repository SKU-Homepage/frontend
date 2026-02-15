import type { ExtraCurricularPost } from "@/api/extracurricular-service";

export const mockExtraCurricularPosts: ExtraCurricularPost[] = [
  {
    id: 1,
    title: "[Mock] AI 활용 프로젝트 경진대회",
    author: "교수학습센터",
    url: "https://example.com/ec/1",
    thumbnail: "",
    category: "GYOSU-HAKSEUB",
    date: "2025-02-10",
    like: false,
    viewCount: 88,
  },
  {
    id: 2,
    title: "[Mock] 취업 멘토링 프로그램",
    author: "진로취업센터",
    url: "https://example.com/ec/2",
    thumbnail: "",
    category: "JINLO_CHWIEOB",
    date: "2025-02-08",
    like: true,
    viewCount: 200,
  },
  {
    id: 3,
    title: "[Mock] 창업 아이디어 공모전",
    author: "대학혁신단",
    url: "https://example.com/ec/3",
    thumbnail: "",
    category: "DAEHAK_HYEOKSIN",
    date: "2025-02-05",
    like: false,
    viewCount: 135,
  },
];
