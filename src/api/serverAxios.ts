"use server";
import axios, { AxiosInstance } from "axios";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// 🔹 비공개 API (서버)
export const createPrivateApi = async (): Promise<AxiosInstance> => {
  // ✅ 서버 환경: 쿠키를 직접 헤더에 추가
  const cookieStore = await cookies();
  const cookie = cookieStore.toString();

  return axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
      Cookie: cookie,
    },
  });
};
