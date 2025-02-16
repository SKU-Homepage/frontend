"use client";

import { useState } from "react";
import HeaderNavItem from "./Header.NavItem";
import HeaderNavLayout from "./Header.NavLayout";
import HeaderRootLayout from "./Header.RootLayout";
import HeaderTitle from "./Header.Title";

interface HeaderWithNavProps {
  title: string;
  mention: string;
}

const HeaderWithNav = ({ title, mention }: HeaderWithNavProps) => {
  const [isClicked, setIsCliked] = useState({
    allNoctice: true,
    calledDibsOnNotice: false,
  });
  return (
    <HeaderRootLayout>
      <HeaderTitle title={title} mention={mention} />

      <HeaderNavLayout>
        <HeaderNavItem
          pathName="전체"
          isClicked={isClicked.allNoctice}
          onClick={() => {
            setIsCliked((prev) => ({
              ...prev,
              allNoctice: true,
              calledDibsOnNotice: false,
            }));
          }}
        />
        <HeaderNavItem
          pathName="키워드"
          isClicked={isClicked.calledDibsOnNotice}
          onClick={() => {
            setIsCliked((prev) => ({
              ...prev,
              allNoctice: false,
              calledDibsOnNotice: true,
            }));
          }}
        />
      </HeaderNavLayout>
    </HeaderRootLayout>
  );
};

export default HeaderWithNav;
