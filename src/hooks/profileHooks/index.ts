import { createPrivateApi } from "@/api/serverAxios";
import { queryOptions } from "@tanstack/react-query";

export const getMyProfile = async (): Promise<UserProfile | null> => {
  try {
    const baseURL = "/mypage/sku";
    const res = (await createPrivateApi()).get(baseURL);
    const data = (await res).data;
    return data.result;
  } catch {
    return null;
  }
};

export const useProfile = queryOptions({
  queryKey: ["profile"],
  queryFn: getMyProfile,
  staleTime: 1000 * 60 * 60,
  gcTime: 1000 * 60 * 60,
  refetchOnMount: true,
  refetchOnReconnect: "always",
});

export type UserProfile = {
  name: string;
  college: string;
  department: string;
  major: string;
  studentNumber: string;
  grade: string;
};
