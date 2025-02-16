"use client";

import Image from "next/image";

const LoginBtn = () => {
  const handleLogin = () => {
    location.href = "/";
  };

  return (
    <button
      onClick={handleLogin}
      className="flex absolute bottom-[60px] items-center bg-white justify-center w-[85.2%] aspect-[335/47] rounded-[32px]"
    >
      <Image
        className="absolute left-[20px]"
        width={28}
        height={28}
        src="/images/google.svg"
        alt="구글 로그인"
      />
      <span className="text-[#446081] text-[14px] font-semibold">학교 이메일로 로그인하기</span>
    </button>
  );
};

export default LoginBtn;
