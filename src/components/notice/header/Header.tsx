"use client";

import { useState } from "react";
import HeaderNavItem from "./Header.NavItem";
import HeaderNavLayout from "./Header.NavLayout";
import HeaderRootLayout from "./Header.RootLayout";
import HeaderTitle from "./Header.Title";

const Header = () => {
  const [isClicked, setIsCliked] = useState({
    allNoctice: true,
    calledDibsOnNotice: false,
  });
  return (
    <HeaderRootLayout>
      <HeaderTitle
        title="공지사항"
        mention="전체 학사 일정과 개인 일정을 추가하여 한눈에 정리할 수 있어요"
      />

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

export default Header;
