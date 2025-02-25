import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const privateApi = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  withCredentials: true, // 쿠키 자동 포함
});

// 요청 인터셉터: Authorization 헤더 설정 안 해도 됨! (쿠키가 자동으로 포함됨)
privateApi.interceptors.request.use(
  async (config) => config,
  (error) => Promise.reject(error)
);

// 응답 인터셉터: 401 에러 발생 시 리프레시 요청
privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Next.js API 라우트에서 리프레시 토큰 요청
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const refreshResponse = await axios.post(
          "/api/auth/refresh",
          {},
          { withCredentials: true }
        );

        // 원래 요청 다시 보내기
        return privateApi(originalRequest);
      } catch (refreshError) {
        window.location.href = "/login"; // 로그인 페이지로 이동
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
