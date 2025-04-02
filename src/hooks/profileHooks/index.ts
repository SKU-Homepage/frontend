"use client";
import { privateApi } from "@/api/axios";
import { queryOptions } from "@tanstack/react-query";

export const getMyProfile = async (): Promise<UserProfile | null> => {
  const baseURL = "/mypage/sku";
  const res = await privateApi.get(baseURL);
  const data = res.data;
  return data.result;
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
