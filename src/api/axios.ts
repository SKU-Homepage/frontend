"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export const privateApi = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  withCredentials: true, // 쿠키 자동 포함
});

// 서버에서 직접 리프레시 토큰 요청
async function refreshAccessToken() {
  try {
    const cookieHeader = Object.entries((await cookies()).getAll())
      .map(([key, cookie]) => `${key}=${cookie.value}`)
      .join("; ");

    const refreshResponse = await axios.post(
      `${BASE_URL}/auth/refresh`,
      {},
      {
        headers: {
          Cookie: cookieHeader,
        },
        withCredentials: true,
      }
    );

    const newToken = refreshResponse.data.token;

    // 새로운 토큰을 쿠키에 저장
    (await cookies()).set("token", newToken, { path: "/" });

    return newToken;
  } catch {
    throw new Error("Unauthorized");
  }
}

// 요청 인터셉터: 요청마다 최신 token 쿠키를 Authorization 헤더에 추가
privateApi.interceptors.request.use(
  async (config) => {
    const token = (await cookies()).get("token"); // 최신 토큰 가져오기

    if (token) {
      config.headers.Authorization = `Bearer ${token.value}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터: 401 발생 시 서버 액션을 통해 토큰 갱신
privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (!originalRequest) return Promise.reject(error);

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // 서버에서 직접 리프레시 토큰 요청
        const newToken = await refreshAccessToken();

        // 새로운 토큰을 원래 요청의 Authorization 헤더에 추가
        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        // 원래 요청 다시 보내기
        return privateApi(originalRequest);
      } catch (refreshError) {
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        } else {
          redirect("/login");
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
