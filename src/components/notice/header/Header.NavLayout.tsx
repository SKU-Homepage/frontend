import { ReactNode } from "react";

const HeaderNavLayout = ({ children }: { children: ReactNode }) => {
  return (
    <nav>
      <ul className="flex">{children}</ul>
    </nav>
  );
};

export default HeaderNavLayout;
