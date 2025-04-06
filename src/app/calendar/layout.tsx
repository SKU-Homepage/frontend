import { HeaderWithBackButton } from "@/components/common";
import { ReactNode } from "react";

export default function CalendarLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderWithBackButton title="학사일정" />
      {children}
    </>
  );
}
