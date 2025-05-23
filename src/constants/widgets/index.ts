export type WidgetProps = {
  title: string;
  description: string;
  url: string;
  src: string;
  onEditing?: boolean;
};

export const data = [
  {
    title: "공지사항",
    description: "업데이트된 학교 소식을 받아주세요.",
    url: "/notice",
    src: "/images/color-speaker.png",
  },
  {
    title: "캠퍼스맵",
    description: "현재 준비중입니다.",
    url: "#",
    src: "/images/school.png",
  },
  {
    title: "학사일정",
    description: "학교 연간 일정을 한눈에 살펴보세요.",
    url: "/calendar",
    src: "/images/note.svg",
  },
  {
    title: "수업시간표",
    description: "나만의 학교 수업 스케줄과 개인일정을 손쉽게 관리해 보세요.",
    url: "/schedule",
    src: "/images/color-calendar.svg",
  },
  {
    title: "마이페이지",
    description: "나만의 페이지를 가져보세요.",
    url: "/profile",
    src: "/images/my-icon.svg",
  },
  {
    title: "비교과프로그램",
    description: "찾아보기 어렵고 귀찮았던 비교과 프로그램을 쉽게 확인해 보세요.",
    url: "/extracurricular",
    src: "/images/book.svg",
  },
];
