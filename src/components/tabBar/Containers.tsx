"use cient";

import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Containers = ({ children }: ChildrenProp) => {
  return (
    <div className="flex z-10 bg-[#fff] pt-[10px] items-start h-[75px] fixed bottom-0 w-full shadow-[4px_0px_7px_0px_rgba(0,0,0,0.04)]">
      {children}
    </div>
  );
};

const Content = ({ children }: ChildrenProp) => {
  return <div className="flex justify-center w-full h-full">{children}</div>;
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
      className="flex flex-col w-[24%] gap-[4px] items-center"
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
