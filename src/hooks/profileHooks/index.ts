import { privateApi } from "@/api/axios";
import { queryOptions } from "@tanstack/react-query";

export const getMyProfile = async () => {
  try {
    const baseURL = "/mypage/sku";
    const res = await privateApi.get(baseURL);
    const data = res.data;
    return data.result;
  } catch {
    return null;
  }
};

export const useProfile = queryOptions({
  queryKey: ["profile"],
  queryFn: getMyProfile,
  staleTime: 1000 * 60 * 60,
  enabled: false,
});

export type TimeTable = {
  name: string;
  college: string;
  department: string;
  major: string;
  studentNumber: string;
  grade: string;
  status: string;
};
