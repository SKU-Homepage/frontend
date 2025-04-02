import { privateApi, publicApi } from "@/api/axios";
import { queryOptions, useQuery } from "@tanstack/react-query";

const getLectures = async (searchName: string): Promise<Lecture[] | []> => {
  try {
    const baseURL = "/time-table/search/name";
    const res = await publicApi.get(baseURL, {
      params: { name: searchName },
    });
    const data = res.data;
    return data.result.timeTables;
  } catch {
    return [];
  }
};

const getMySchedules = async (): Promise<Lecture[] | []> => {
  try {
    const baseURL = "/time-table/myTimeTable";
    const res = await privateApi.get(baseURL);
    const data = res.data;
    return data.result.subjects;
  } catch {
    return [];
  }
};

export const postLectures = async (selectedLectures: number[]) => {
  try {
    const baseURL = "/time-table/add";
    const res = await privateApi.post(baseURL, {
      subjectIds: selectedLectures,
    });
    return res.data.isSuccess;
  } catch {
    return false;
  }
};

export const useMySchedules = () => {
  const { data: lectures, isLoading } = useQuery({
    queryKey: ["mySchedules"],
    queryFn: getMySchedules,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    refetchOnMount: true,
    refetchOnReconnect: "always",
  });

  if (!lectures?.length) return { lectures: [], isLoading };

  // 요일 문자열을 숫자로 변환 (FullCalendar는 0(일)~6(토) 사용)
  const dayToNumber: Record<string, number> = {
    월: 1,
    화: 2,
    수: 3,
    목: 4,
    금: 5,
    토: 6,
    일: 0,
  };

  const events = lectures
    .map((lecture: Lecture) => ({
      title: lecture.subject,
      location: lecture.classroom,
      daysOfWeek: [dayToNumber[lecture.day]], // 요일을 숫자로 변환
      startTime: lecture.startTime + ":00",
      endTime: lecture.endTime + ":00",
    }))
    .filter((event: Schedule) => event.daysOfWeek[0] !== undefined); // 유효하지 않은 데이터 제거

  return { lectures: events, isLoading };
};

export const useLectures = (searchName: string) => {
  return queryOptions({
    queryKey: ["schedules", searchName],
    queryFn: () => getLectures(searchName),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
    refetchOnMount: true,
    refetchOnReconnect: "always",
  });
};

export type Lecture = {
  subjectId: number;
  subject: string;
  professor: string;
  day: string;
  startTime: string;
  endTime: string;
  classroom: string;
  credit: string;
  grade: string;
  target: string;
  division: string;
};

export type Schedule = {
  title: string;
  location: string;
  daysOfWeek: number[];
  startTime: string;
  endTime: string;
};
