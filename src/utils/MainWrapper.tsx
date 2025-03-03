"use client";
import { ChildrenProp } from "./children.type";
import { cn } from "./cn";
import useIsPWA from "./isPWA";

const MainWrapper = ({ children }: ChildrenProp) => {
  return (
    <div
      className={cn("pt-[73px] pb-[18px]", {
        "h-[calc(100vh-75px)]": useIsPWA() === true,
      })}
    >
      {children}
    </div>
  );
};

export default MainWrapper;
