"use client";

import { usePathname } from "next/navigation";
import T from "./Containers";
import { isPWA } from "@/utils/usePWA";

export default function TabBar() {
  const pathname = usePathname();

  if (pathname !== "/" && !pathname.includes("profile")) return;
  if (!isPWA) return;

  return (
    <T>
      <T.Content>
        {menuItems.map(({ label, href, src, alt }) => {
          const isActive = pathname === href;
          const imageSrc = isActive ? `/images/active-${src}` : `/images/${src}`;

          return (
            <T.Item
              key={href}
              label={label}
              href={href}
              src={imageSrc}
              alt={alt}
              isActive={isActive}
            />
          );
        })}
      </T.Content>
    </T>
  );
}

const menuItems = [
  { label: "홈", href: "/", src: "home.svg", alt: "홈 버튼" },
  { label: "시간표", href: "/schedule", src: "calendar.svg", alt: "시간표 버튼" },
  { label: "공지사항", href: "/notice", src: "speaker.svg", alt: "공지사항 버튼" },
  { label: "마이", href: "/profile", src: "my.svg", alt: "마이페이지 버튼" },
];
