"use client";

import { useRouter, usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

interface HeaderNavItemProps {
  path: string;
  pathName: string;
}

/**
 * HeaderWithTitleAndMentionAndNav에 사용되는 NavItem
 */

const HeaderNavItem = ({ path, pathName }: HeaderNavItemProps) => {
  const currentPathName = usePathname();
  const router = useRouter();

  return (
    <li
      className={cn(
        "flex-1 cursor-pointer rounded-xs pb-[10px] text-center text-base font-medium text-[#143967]",
        {
          "opacity-50": currentPathName !== path,
          "border-b-[2px]": currentPathName === path,
        }
      )}
      onClick={() => router.push(`${path}`)}
    >
      {pathName}
    </li>
  );
};

export default HeaderNavItem;
