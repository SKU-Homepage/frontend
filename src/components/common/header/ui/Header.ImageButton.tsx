"use client";

import { Button } from "@heroui/button";
import Image from "next/image";

interface HeaderImageButtonProps {
  src?: string;
  msg?: string;
  alt?: string;
  onClick?: () => void;
}

/**
 * HeaderWithBackButton에 사용하는 ImageButton 컴포넌트
 * 이미지 버튼 or msg
 */
const HeaderImageButton = ({ src, msg, alt, onClick }: HeaderImageButtonProps) => {
  return (
    <Button
      className="flex w-[15%] items-center justify-center"
      onClick={() => onClick && onClick()}
    >
      {src ? (
        <Image src={src} width={18} height={21} alt={alt ? alt : '"삭제"'} />
      ) : (
        <span className="cursor-pointer font-[#143967] text-[15px] font-medium">{msg}</span>
      )}
    </Button>
  );
};

export default HeaderImageButton;
