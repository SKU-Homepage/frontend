import OnEditBtn from "./OnEditBtn";

const Tip = ({ msg, editMode }: TipProp) => {
  return (
    <div className="mt-[14px] flex h-[38px] w-full items-center justify-between rounded-[12px] bg-[#E9EFF7] px-[17px] py-[12px]">
      <div className="flex items-center gap-[11.4px]">
        <span className="text-[12px] font-bold text-[#143967]">TIP !</span>
        <span className="text-[11px] text-[#48658B]">{msg}</span>
      </div>
      {editMode && <OnEditBtn />}
    </div>
  );
};

export default Tip;

interface TipProp {
  msg: string;
  editMode?: boolean;
}
