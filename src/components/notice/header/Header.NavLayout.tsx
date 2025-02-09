const HeaderNavLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav>
      <ul className="flex">{children}</ul>
    </nav>
  );
};

export default HeaderNavLayout;
