"use cient";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";

export default function Containers({ children }: ChildrenProp) {
  return (
    <div className="flex justify-between pt-[10px] items-start h-[95px] px-[51px] fixed bottom-0 w-full shadow-[4px_0px_7px_0px_rgba(0,0,0,0.04)]">
      {children}
    </div>
  );
}

function Content({ children }: ChildrenProp) {
  return <div className="flex justify-between w-full h-full">{children}</div>;
}

function Item({ src, alt, href, label, isActive }: ItemProps) {
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
      className="flex flex-col gap-[4px] items-center"
    >
      <Image
        src={src}
        width={24}
        height={24}
        alt={alt}
        className={`transition duration-200 ease-in-out ${isTouched ? "scale-140" : ""}`}
      />
      <span className={`text-[13px] ${isActive ? "text-[#4F68E9]" : "text-[#BDBDBD]"}`}>
        {label}
      </span>
    </Link>
  );
}

interface ItemProps {
  src: string;
  alt: string;
  href: string;
  label: string;
  isActive: boolean;
}

interface ChildrenProp {
  children: ReactNode;
}

Containers.Item = Item;
Containers.Content = Content;
