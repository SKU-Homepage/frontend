import RightBtns from "./RightBtns";

export default function Header() {
  return (
    <header className="absolute top-0 z-10 flex h-[73px] w-full max-w-[600px] items-center justify-between px-[18px]">
      <h1 className="w-[10%] text-center text-[18px] font-semibold text-[#143967]">홈</h1>
      <RightBtns />
    </header>
  );
}
