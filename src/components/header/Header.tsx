import HeaderBtn from "./HeaderBtn";
import BackBtn from "./BackBtn";

export default function Header({ src, msg, title, onClick }: HeaderProps) {
  return (
    <header className="flex justify-between items-center bg-white fixed top-0 px-[18px] h-[73px] w-full">
      <BackBtn />
      <h1 className="text-[17px] font-semibold">{title}</h1>
      <HeaderBtn src={src} msg={msg} onClick={onClick} />
    </header>
  );
}

interface HeaderProps {
  src?: string;
  msg?: string;
  title: string;
  onClick?: (boolean: boolean) => void;
}
