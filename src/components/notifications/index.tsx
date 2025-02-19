import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";
import DeleteBtn from "./DeleteBtn";

const Notifications = ({ children }: ChildrenProp) => {
  return <div className="w-full h-full overflow-y-auto pt-[57px]">{children}</div>;
};

const List = ({ children }: ChildrenProp) => {
  return <div className="flex flex-col w-full">{children}</div>;
};

const Item = () => {
  return (
    <div className="flex pl-[6.6%] py-[18px] gap-[15px]">
      <Image src="/images/color-speaker.svg" width={23} height={23} alt="공지사항" />
      <div className="flex flex-col w-[80%] text-[#143967] overflow-hidden">
        <div className="flex justify-between text-[11px]">
          <h3 className="opacity-62">공지사항 키워드 알림</h3>
          <span className="opacity-26">3시간 전</span>
        </div>
        <p className="text-[15px] w-full font-medium text-[#143967] text-ellipsis overflow-hidden whitespace-nowrap">
          2024 콘텐츠 인사이트 : 상상은 현실이 된다asdfadfadfa
        </p>
      </div>
      <DeleteBtn />
    </div>
  );
};

Notifications.List = List;
Notifications.Item = Item;
export default Notifications;
