"use client";
import { ChildrenProp } from "./children.type";
import useIsPWA from "./isPWA";

const MainWrapper = ({ children }: ChildrenProp) => {
  const condition = useIsPWA() ? "h-[calc(100vh-75px)] pt-[73px] pb-[18px]" : "h-[100vh]";

  return <div className={condition}>{children}</div>;
};

export default MainWrapper;
