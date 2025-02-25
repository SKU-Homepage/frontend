'use client'

import { useRouter, usePathname } from 'next/navigation'

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
      className={
        cn("flex-1 text-center text-base text-[#143967] font-medium border-b-[3px] rounded-xs cursor-pointer", {
          'opacity-50': currentPathName !== path
        })}
      onClick={() => router.push(`${path}`)}
    >
      {pathName}
    </li>
  );
};

export default HeaderNavItem;
