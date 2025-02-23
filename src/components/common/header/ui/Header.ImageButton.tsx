"use client";

import Image from "next/image";

interface HeaderImageButtonProps {
  src?: string;
  msg?: string;
  onClick?: (boolean: boolean) => void;
}

/**
 * HeaderWithBackButton에 사용하는 ImageButton 컴포넌트
 * 이미지 버튼 or msg 
 */
const HeaderImageButton = ({ src, msg, onClick }: HeaderImageButtonProps) => {
  return (
    <button
      className="flex items-center justify-center w-[10%]"
      onClick={() => onClick && onClick(true)}
    >
      {src ? <Image src={src} width={18} height={21} alt="삭제" /> : <span>{msg}</span>}
    </button>
  );
};



export default HeaderImageButton;
