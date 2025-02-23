import HeaderBackButton from './ui/Header.BackButton';
import HeaderImageButton from './ui/Header.ImageButton';

interface HeaderWithBackButtonProps {
  src?: string;
  msg?: string;
  title?: string;
  onClick?: (boolean: boolean) => void;
}

const HeaderWithBackButton = ({ src, msg, title, onClick }: HeaderWithBackButtonProps) => {
  return(
      <header className="fixed top-0 z-20 flex h-[73px] w-full items-center justify-between bg-white px-[18px]">
      <HeaderBackButton />
      <h1 className="w-[40%] text-center text-[17px] font-semibold">{title}</h1>
      <HeaderImageButton src={src} msg={msg} onClick={onClick} />
    </header>
  )
}

export default HeaderWithBackButton;