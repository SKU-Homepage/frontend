"use client";

import Image from "next/image";

interface HeaderImageButtonProps {
  src?: string;
  msg?: string;
  onClick?: (boolean: boolean) => void;
}

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
