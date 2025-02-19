import HeaderBtn from "./HeaderBtn";
import BackBtn from "./BackBtn";

export default function Header({ src, msg, title, onClick }: HeaderProps) {
  return (
    <header className="fixed top-0 z-20 flex h-[73px] w-full items-center justify-between bg-white px-[18px]">
      <BackBtn />
      <h1 className="w-[40%] text-center text-[17px] font-semibold">{title}</h1>
      <HeaderBtn src={src} msg={msg} onClick={onClick} />
    </header>
  );
}

interface HeaderProps {
  src?: string;
  msg?: string;
  title?: string;
  onClick?: (boolean: boolean) => void;
}
