"use client";

import Image from "next/image";

const LoginBtn = () => {
  const handleLogin = () => {
    location.href = "/";
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center bg-[#809DF2] justify-center w-full h-[60px] relative rounded-[32px] bg-[rgba(128, 157, 242, 1)] bg-linear-[258deg,rgba(125,154,241,0.00)_1.21%,rgba(84,104,213,0.17)_82.51%,#809DF2]"
    >
      <Image
        className="absolute left-[20px]"
        width={28}
        height={28}
        src="/images/google.svg"
        alt="구글 로그인"
      />
      <span className="text-[#fff] text-[16px] font-semibold">학교 이메일로 로그인하기</span>
    </button>
  );
};

export default LoginBtn;
