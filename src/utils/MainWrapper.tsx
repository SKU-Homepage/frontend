"use client";

import { ChildrenProp } from "./children.type";
import { cn } from "./cn";
import { usePathname } from "next/navigation";

const MainWrapper = ({ children }: ChildrenProp) => {
  const pathname = usePathname();

  return (
    <div
      className={cn("pt-[73px] pb-[75px]", {
        "pt-0 pb-0":
          pathname === "/" || pathname?.includes("getInfo") || pathname?.includes("login"),
      })}
    >
      {children}
    </div>
  );
};

export default MainWrapper;
