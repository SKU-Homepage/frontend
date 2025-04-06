"use cient";

import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Containers = ({ children }: ChildrenProp) => {
  return (
    <div className="fixed bottom-0 z-10 flex h-[75px] w-full max-w-[600px] items-start bg-[#fff] pt-[10px] shadow-[4px_0px_7px_0px_rgba(0,0,0,0.04)]">
      {children}
    </div>
  );
};

const Content = ({ children }: ChildrenProp) => {
  return <div className="flex h-full w-full justify-center">{children}</div>;
};

const Item = ({ src, alt, href, label, isActive }: ItemProps) => {
  const [isTouched, setIsTouched] = useState(false);
  return (
    <Link
      onClick={() => {
        setIsTouched(true);
        setTimeout(() => {
          setIsTouched(false);
        }, 200);
      }}
      href={href}
      className="flex w-[24%] flex-col items-center gap-[4px]"
    >
      <Image
        src={src}
        width={18}
        height={18}
        alt={alt}
        className={`transition duration-200 ease-in-out ${isTouched ? "scale-140" : ""}`}
      />
      <span className={`text-[10px] ${isActive ? "text-[#4F68E9]" : "text-[#BDBDBD]"}`}>
        {label}
      </span>
    </Link>
  );
};

interface ItemProps {
  src: string;
  alt: string;
  href: string;
  label: string;
  isActive: boolean;
}

Containers.Item = Item;
Containers.Content = Content;

export default Containers;
