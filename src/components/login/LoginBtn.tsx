"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@heroui/button";

const LoginBtn = () => {
  let domain = "";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    domain = window.location.origin;
  }, []);

  const handleLogin = () => {
    if (!domain) return;
    location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=198007563456-703p8smpd6b7ujujqva20gn0qvjbm85a.apps.googleusercontent.com&redirect_uri=${domain}/api/auth/callback/google&response_type=code&scope=openid%20email%20profile`;
  };

  return (
    <Button
      onPress={handleLogin}
      className="absolute bottom-[60px] flex aspect-[335/47] h-auto w-[85.2%] items-center justify-center rounded-[32px] bg-white"
    >
      <Image
        className="absolute left-[20px]"
        width={28}
        height={28}
        src="/images/google.svg"
        alt="구글 로그인"
      />
      <span className="text-[14px] font-semibold text-[#446081]">학교 이메일로 로그인하기</span>
    </Button>
  );
};

export default LoginBtn;
