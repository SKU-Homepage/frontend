import HeaderNavItem from "./ui/Header.NavItem";

interface PathItem {
  path: string;
  pathName: string;
}

interface HeaderWithTitleAndMentionProps {
  title: string;
  mention: string;
  pathList: PathItem[];
}

/**
 *  title(제목목), metion(한 줄 소개), 네이게이션바가 함께 들어있는 헤더
 *  noticePage, extracurricuar에 사용
 */

const HeaderWithTitleAndMentionAndNav = ({
  title,
  mention,
  pathList,
}: HeaderWithTitleAndMentionProps) => {
  return (
    <header className="w-full">
      <div className="mb-6 px-6">
        <h1 className="text-xl font-semibold text-[#143967]">{title}</h1>
        <p className="mt-2.5 text-xs font-normal text-[#75869B]">{mention}</p>
      </div>

      <nav>
        <ul className="flex">
          {pathList.map((item) => (
            <HeaderNavItem key={item.path} path={item.path} pathName={item.pathName} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderWithTitleAndMentionAndNav;
