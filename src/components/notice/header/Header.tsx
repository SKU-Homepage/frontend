import HeaderRootLayout from "./Header.RootLayout";
import HeaderTitle from "./Header.Title";

interface HeaderProps {
  title: string;
  mention: string;
}

const Header = ({ title, mention }: HeaderProps) => {
  return (
    <HeaderRootLayout>
      <HeaderTitle title={title} mention={mention} />
    </HeaderRootLayout>
  );
};

export default Header;
