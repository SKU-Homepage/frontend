import { Button, DialogTitle } from "@headlessui/react";
import NewWidgets from "./NewWidgets";
import Image from "next/image";
import { useEffect, useState } from "react";
import { WidgetProps } from "@/constants/widgets";
import { useAtom } from "jotai";
import { myWidgets } from "@/stores/atoms";

const AddWidgetModalContent = ({ setIsOpen }: ModalContentProp) => {
  const [selectedWidgets, setSelectedWidgets] = useState<WidgetProps[]>([]);
  const [, setMyWidgets] = useAtom(myWidgets);

  const handleSaveWidget = () => {
    localStorage.setItem("selectedWidgets", JSON.stringify(selectedWidgets));
    setMyWidgets(selectedWidgets);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("selectedWidgets");
    const productArray = storedData ? JSON.parse(storedData) : [];
    setSelectedWidgets(productArray);
  }, []);

  return (
    <>
      <Image
        src="/images/big-setting.svg"
        width={105}
        height={105}
        alt="위젯 추가 설정 이미지"
        className="absolute top-[-65px]"
      />
      <DialogTitle as="h3" className="flex flex-col items-center text-[#143967] gap-[7px]">
        <p className="font-semibold text-[20px]">위젯을 자유롭게 설정해보세요</p>
        <p className="text-[11px]">최근 학교 공지사항을 가장 빠르게 확인해보세요.</p>
      </DialogTitle>
      <NewWidgets selected={selectedWidgets} setSelected={setSelectedWidgets} />
      <div className="flex justify-between mt-[28px] w-full font-semibold text-[12.5px]">
        <Button
          className="text-[#75869B] w-[48%] border-[1px] rounded-[9px] border-[#75869B94] "
          onClick={handleClose}
        >
          닫기
        </Button>
        <Button
          className="text-[#fff] w-[48%] rounded-[9px] bg-[#1A4C89] aspect-[139/42]"
          onClick={handleSaveWidget}
        >
          선택 완료
        </Button>
      </div>
    </>
  );
};

interface ModalContentProp {
  setIsOpen: (boolean: boolean) => void;
}

export default AddWidgetModalContent;
