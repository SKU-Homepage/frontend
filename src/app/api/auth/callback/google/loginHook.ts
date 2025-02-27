"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const loginHook = async (code: string) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/mypage/sku/oauth2/code/google`,
      {
        params: {
          code,
          env: process.env.VITE_PUBLIC_LOGIN_ENV,
        },
      }
    );

    (await cookies()).set("token", res.data.result.accessToken, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 14,
    });

    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) console.log(error?.response?.status || "로그인 실패 클라이언트");
    else console.log(" 아니 왜");
    return false;
  }
};
