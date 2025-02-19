import { ChildrenProp } from "@/utils/children.type";
import Image from "next/image";
import DeleteBtn from "./DeleteBtn";

const Notifications = ({ children }: ChildrenProp) => {
  return <div className="h-full w-full overflow-y-auto pt-[73px]">{children}</div>;
};

const List = ({ children }: ChildrenProp) => {
  return <div className="flex w-full flex-col">{children}</div>;
};

const Item = () => {
  return (
    <div className="flex gap-[15px] py-[18px] pl-[6.6%]">
      <Image src="/images/color-speaker.svg" width={23} height={23} alt="공지사항" />
      <div className="flex w-[80%] flex-col overflow-hidden text-[#143967]">
        <div className="flex justify-between text-[11px]">
          <h3 className="opacity-62">공지사항 키워드 알림</h3>
          <span className="opacity-26">3시간 전</span>
        </div>
        <p className="w-full overflow-hidden text-[15px] font-medium text-ellipsis whitespace-nowrap text-[#143967]">
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
