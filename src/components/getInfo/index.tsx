import { ChildrenProp } from "@/utils/children.type";

const GetInfo = ({ children }: ChildrenProp) => {
  return <div className="h-full overflow-y-auto px-[4.6%] pt-[30px] pb-[27px]">{children}</div>;
};

const Content = ({ children }: ChildrenProp) => {
  return <div>{children}</div>;
};

const Header = ({ msg, msg2, msg3, description }: HeaderProps) => {
  return (
    <header className="flex flex-col gap-[10px]">
      <div className="text-[23px] font-bold text-[#143967]">
        <p>반가워요!</p>
        <div>
          <span>{msg} </span>
          <span className="text-[#4D66EC]">{msg2}</span>
          <span>{msg3}</span>
        </div>
      </div>
      <p className="text-[12px] text-[#75869B]">{description}</p>
    </header>
  );
};

interface HeaderProps {
  msg: string;
  msg2: string;
  msg3: string;
  description: string;
}

GetInfo.Header = Header;
GetInfo.Content = Content;
export default GetInfo;
