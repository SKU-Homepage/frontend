"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

/**
 * HeaderWithBackButton에 사용하는 BackButton 컴포넌트
 * 뒤로 가기 기능
 */

const HeaderBackButton = () => {
  const navigate = useRouter();

  return (
    <button className="flex items-center justify-center w-[10%]" onClick={navigate.back}>
      <Image src="/images/back.svg" width={11} height={18} alt="뒤로가기" />
    </button>
  );
};

export default HeaderBackButton;
