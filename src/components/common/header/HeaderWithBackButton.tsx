import HeaderBackButton from './ui/Header.BackButton';
import HeaderImageButton from './ui/Header.ImageButton';

interface HeaderWithBackButtonProps {
  src?: string;
  msg?: string;
  title?: string;
  onClick?: (boolean: boolean) => void;
}

/**
 * 최상단 뒤로 가기, 제목, 이미지 헤더
 * title(제목) : [optional]
 * src(이미지버튼 이미지) : [optional]
 * msg(글자, 이미지버튼 이미지 없을시) : [optional] 
*/
const HeaderWithBackButton = ({ src, msg, title, onClick }: HeaderWithBackButtonProps) => {
  return(
      <header className="fixed top-0 z-20 flex h-[73px] w-full max-w-[600px] items-center justify-between bg-white px-[18px]">
      <HeaderBackButton />
      <h1 className="w-[40%] text-center text-[17px] font-semibold">{title}</h1>
      <HeaderImageButton src={src} msg={msg} onClick={onClick} />
    </header>
  )
}

export default HeaderWithBackButton;