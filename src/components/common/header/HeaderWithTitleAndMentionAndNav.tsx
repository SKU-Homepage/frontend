import HeaderNavItem from './ui/Header.NavItem';

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

const HeaderWithTitleAndMentionAndNav = ({title, mention, pathList}: HeaderWithTitleAndMentionProps) => {
  return(
    <header className='w-full'>

      <div className="mb-6">
        <h1 className="text-xl text-[#143967] font-semibold">{title}</h1>
        <p className="text-xs text-[#75869B] font-normal mt-2.5">{mention}</p>
      </div>

      <nav>
        <ul className="flex">
          {
            pathList.map((item) => <HeaderNavItem key={item.path} path={item.path} pathName={item.pathName}/>)
          }
        </ul>
      </nav>

    </header>
  );
}

export default HeaderWithTitleAndMentionAndNav;