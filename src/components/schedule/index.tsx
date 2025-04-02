import { ChildrenProp } from "@/utils/children.type";

export default function Schedule({ children }: ChildrenProp) {
  return <div className="relative w-full px-[4.6%]">{children}</div>;
}

const TypeBtnWrapper = ({ children }: ChildrenProp) => {
  return (
    <div className="relative mt-[23px] flex aspect-[362/40] rounded-[10px] bg-[#C9D0D9] p-[3px] font-semibold text-[#1439675E]">
      {children}
    </div>
  );
};

Schedule.TypeBtnWrapper = TypeBtnWrapper;
