// /app/api/auth/refresh/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import axios from "axios";

export async function POST() {
  const refreshToken = (await cookies()).get("refreshToken")?.value;
  if (!refreshToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // 백엔드 API에 리프레시 토큰 전송하여 새로운 액세스 토큰 요청
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
      refreshToken,
    });

    const newToken = response.data.token;

    // 새로운 액세스 토큰을 쿠키에 저장
    (await cookies()).set("token", newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "strict",
    });

    return NextResponse.json({ token: newToken });
  } catch {
    return NextResponse.json({ error: "Token refresh failed" }, { status: 401 });
  }
}
