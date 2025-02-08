const Tip = ({ msg }: TipProp) => {
  return (
    <div className="flex gap-[14.5px] w-full h-[48px] px-[17px] py-[12px] mt-[22px] rounded-[12px] bg-[#E9EFF7] items-center">
      <span className="text-[12px] font-bold">TIP !</span>
      <span className="text-[11px]">{msg}</span>
    </div>
  );
};

export default Tip;

interface TipProp {
  msg: string;
}
