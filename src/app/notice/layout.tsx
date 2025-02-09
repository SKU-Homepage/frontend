import { ReactNode } from "react";

export default function NoticeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-[600px] min-h-screen h-full mx-auto px-[4.6%] bg-[#F6F6F6]">
      {children}
    </div>
  );
}
