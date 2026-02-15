import { http, HttpResponse } from "msw";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.skuniv.co.kr/api";

export const handlers = [
  // 공지사항 목록
  http.get(`${BASE_URL}/api/notices/sku`, () => {
    return HttpResponse.json({
      isSuccess: true,
      code: "200",
      message: "성공",
      result: {
        timestamp: new Date().toISOString(),
        skuNoticeList: [
          {
            id: 1,
            category: "일반",
            date: "2025-02-10",
            title: "[Mock] 2025학년도 1학기 수강신청 안내",
            url: "https://example.com/notice/1",
            author: "학사팀",
            viewCount: 150,
            image: "",
            like: false,
          },
          {
            id: 2,
            category: "학사",
            date: "2025-02-08",
            title: "[Mock] 졸업요건 변경 안내",
            url: "https://example.com/notice/2",
            author: "학사팀",
            viewCount: 320,
            image: "",
            like: true,
          },
          {
            id: 3,
            category: "장학",
            date: "2025-02-05",
            title: "[Mock] 교내 장학금 신청 안내",
            url: "https://example.com/notice/3",
            author: "장학팀",
            viewCount: 540,
            image: "",
            like: false,
          },
        ],
      },
    });
  }),

  // 비교과 프로그램 목록
  http.get(`${BASE_URL}/ec-notices/sku`, () => {
    return HttpResponse.json({
      isSuccess: true,
      code: "200",
      message: "성공",
      result: {
        ecNoticeList: [
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
        ],
      },
    });
  }),

  // 회원가입
  http.post(`${BASE_URL}/mypage/sku/signup`, () => {
    return HttpResponse.json({
      isSuccess: true,
      code: "200",
      message: "회원가입 성공",
    });
  }),

  // 오늘 시간표
  http.get(`${BASE_URL}/time-table/today`, () => {
    return HttpResponse.json({
      isSuccess: true,
      code: "200",
      message: "성공",
      result: {
        timeTables: [
          {
            subjectId: 1,
            subject: "[Mock] 자료구조",
            professor: "김교수",
            day: "월",
            startTime: "09:00",
            endTime: "10:30",
            classroom: "정보관 301",
            credit: "3",
            grade: "2",
            target: "소프트웨어학과",
            division: "전공필수",
          },
          {
            subjectId: 2,
            subject: "[Mock] 운영체제",
            professor: "박교수",
            day: "월",
            startTime: "13:00",
            endTime: "14:30",
            classroom: "정보관 405",
            credit: "3",
            grade: "3",
            target: "소프트웨어학과",
            division: "전공선택",
          },
        ],
      },
    });
  }),

  // 강의 검색
  http.get(`${BASE_URL}/time-table/search/name`, () => {
    return HttpResponse.json({
      isSuccess: true,
      code: "200",
      message: "성공",
      result: {
        timeTables: [
          {
            subjectId: 10,
            subject: "[Mock] 알고리즘",
            professor: "이교수",
            day: "화",
            startTime: "10:00",
            endTime: "11:30",
            classroom: "정보관 201",
            credit: "3",
            grade: "3",
            target: "소프트웨어학과",
            division: "전공필수",
          },
        ],
      },
    });
  }),

  // 내 시간표
  http.get(`${BASE_URL}/time-table/myTimeTable`, () => {
    return HttpResponse.json({
      isSuccess: true,
      code: "200",
      message: "성공",
      result: {
        subjects: [
          {
            subjectId: 1,
            subject: "[Mock] 자료구조",
            professor: "김교수",
            day: "월",
            startTime: "09:00",
            endTime: "10:30",
            classroom: "정보관 301",
            credit: "3",
            grade: "2",
            target: "소프트웨어학과",
            division: "전공필수",
          },
          {
            subjectId: 2,
            subject: "[Mock] 운영체제",
            professor: "박교수",
            day: "수",
            startTime: "13:00",
            endTime: "14:30",
            classroom: "정보관 405",
            credit: "3",
            grade: "3",
            target: "소프트웨어학과",
            division: "전공선택",
          },
        ],
      },
    });
  }),

  // 시간표 추가
  http.post(`${BASE_URL}/time-table/add`, () => {
    return HttpResponse.json({
      isSuccess: true,
      code: "200",
      message: "시간표 추가 성공",
    });
  }),

  // 프로필
  http.get(`${BASE_URL}/mypage/sku`, () => {
    return HttpResponse.json({
      isSuccess: true,
      code: "200",
      message: "성공",
      result: {
        name: "홍길동",
        college: "정보통신대학",
        department: "소프트웨어학과",
        major: "소프트웨어학과",
        studentNumber: "20210001",
        grade: "3",
      },
    });
  }),

  // 학사 일정
  http.get(`${BASE_URL}/calendars/sku`, () => {
    const now = new Date();
    return HttpResponse.json({
      isSuccess: true,
      code: "200",
      message: "성공",
      result: [
        {
          id: "1",
          title: "[Mock] 중간고사",
          startDate: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-15`,
          endDate: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-20`,
        },
        {
          id: "2",
          title: "[Mock] 수강신청",
          startDate: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`,
          endDate: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-05`,
        },
      ],
    });
  }),

  // 알림
  http.get(`${BASE_URL}/fcm/alarm`, () => {
    return HttpResponse.json({
      isSuccess: true,
      code: "200",
      message: "성공",
      result: {
        notificationDTOS: [
          {
            id: 1,
            title: "[Mock] 새로운 공지사항이 등록되었습니다.",
            type: "NOTICE",
            time: "2025-02-10 10:00",
            isRead: false,
          },
          {
            id: 2,
            title: "[Mock] 시간표가 업데이트되었습니다.",
            type: "TIMETABLE",
            time: "2025-02-09 15:30",
            isRead: true,
          },
        ],
      },
    });
  }),

  // Google OAuth 로그인
  http.get(`${BASE_URL}/mypage/sku/oauth2/code/google`, () => {
    return HttpResponse.json({
      isSuccess: true,
      code: "200",
      message: "로그인 성공",
      result: {
        accessToken: "mock-access-token-12345",
      },
    });
  }),
];
