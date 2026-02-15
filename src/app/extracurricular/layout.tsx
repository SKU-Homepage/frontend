"use client";

import { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Tabs, Tab } from "@heroui/tabs";

const tabs = [
  { key: "/extracurricular", label: "전체" },
  { key: "/extracurricular/JINLO_CHWIEOB", label: "진로취업" },
  { key: "/extracurricular/GYOSU_HAKSEUB", label: "교수학습" },
  { key: "/extracurricular/DAEHAK_HYEOKSIN", label: "대학혁신" },
];

export default function ExtraCurricularLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <div className="w-full border-b border-[#75869B21] px-[4.6%]">
        <Tabs
          className="w-full"
          aria-label="비교과 카테고리"
          variant="underlined"
          selectedKey={pathname}
          onSelectionChange={(key) => router.push(key as string)}
          classNames={{
            tabList: "gap-0 w-full p-0",
            tab: "flex-1 h-[40px] text-[14px] font-medium",
            cursor: "bg-[#143967]",
            tabContent:
              "text-[#B0B0B0] group-data-[selected=true]:text-[#143967] group-data-[selected=true]:font-semibold",
          }}
        >
          {tabs.map((tab) => (
            <Tab key={tab.key} title={tab.label} />
          ))}
        </Tabs>
      </div>
      {children}
    </>
  );
}
