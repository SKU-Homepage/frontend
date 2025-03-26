"use client";
import { useEffect, useState } from "react";
import { ChildrenProp } from "./children.type";
import { cn } from "./cn";
import useIsPWA from "./isPWA";
import { usePathname } from "next/navigation";

const MainWrapper = ({ children }: ChildrenProp) => {
  const [pathname, setPathname] = useState<string | null>(null);
  const path = usePathname();

  useEffect(() => {
    setPathname(path);
  }, [path]);

  return (
    <div
      className={cn("pt-[73px]", {
        "h-[calc(100vh-75px)]": useIsPWA() === true,
        "pt-0": pathname === "/" || pathname?.includes("getInfo") || pathname?.includes("login"),
      })}
    >
      {children}
    </div>
  );
};

export default MainWrapper;
