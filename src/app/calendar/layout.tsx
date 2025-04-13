import { HeaderWithBackButton } from "@/components/common";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

export default function CalendarLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderWithBackButton title="학사일정" />
      {children}
      <ToastContainer
        closeButton={false}
        toastClassName="!bg-transparent !rounded-none overflow-hidden !p-0 !text-[14px] -tracking-[0.28px] !font-[500] !text-white !min-h-0"
        position={"bottom-center"}
        autoClose={2000}
      />
    </>
  );
}
