"use client";
import axios from "axios";

export const loginHook = async (code: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/mypage/sku/oauth2/code/google`,
      {
        params: {
          code,
          env: process.env.NEXT_PUBLIC_LOGIN_ENV, //개발서버 0, 배포서버 1
        },
        withCredentials: true,
      }
    );
    const token = res.data.result.accessToken;
    // const expiryDate = new Date(Number(new Date()) + 315360000000);
    // setCookie("token", token, {
    //   domain: "skuniv.co.kr",
    //   expires: expiryDate,
    //   secure: true,
    //   sameSite: "none",
    // });

    return token;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error?.response?.data.message === "이메일 형식이 skuniv가 아닙니다")
        return "서경대학교 이메일 계정으로만 가입할 수 있습니다.";
      else return error?.response?.data.message;
    } else console.log(" 아니 왜");
    return "알 수 없는 오류가 발생했습니다.";
  }
};
