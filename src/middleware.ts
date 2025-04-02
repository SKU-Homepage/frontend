import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = request.cookies?.get("token")?.value;

  if (!token) return NextResponse.redirect(new URL("/login", request.url));
  return NextResponse.next();
}

// 미들웨어 적용 경로 설정
export const config = {
  matcher: [
    "/calendar",
    "/extracurricular/:path",
    "/",
    "/profile",
    "/schedule",
    "/notice/:path", // /login, /getInfo를 제외한 모든 경로에 적용
  ],
};
