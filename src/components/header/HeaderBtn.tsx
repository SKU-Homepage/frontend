"use client";

import Image from "next/image";

const HeaderBtn = ({ src, msg, onClick }: HeaderBtnProps) => {
  return (
    <button
      className="flex items-center justify-center w-[10%]"
      onClick={() => onClick && onClick(true)}
    >
      {src ? <Image src={src} width={18} height={21} alt="삭제" /> : <span>{msg}</span>}
    </button>
  );
};

interface HeaderBtnProps {
  src?: string;
  msg?: string;
  onClick?: (boolean: boolean) => void;
}

export default HeaderBtn;
