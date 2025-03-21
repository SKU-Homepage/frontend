import { DialogTitle } from "@headlessui/react";
import NewWidgets from "./NewWidgets";
import Image from "next/image";
import { useEffect, useState } from "react";
import { WidgetProps } from "@/constants/widgets";
import { useAtom } from "jotai";
import { myWidgets } from "@/stores/atoms";
import { Button } from "@heroui/button";

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
        className="animate-fade-in absolute top-[-65px]"
      />
      <DialogTitle as="h3" className="flex flex-col items-center gap-[7px] text-[#143967]">
        <p className="text-[20px] font-semibold">위젯을 자유롭게 설정해보세요</p>
        <p className="text-[11px]">최근 학교 공지사항을 가장 빠르게 확인해보세요.</p>
      </DialogTitle>
      <NewWidgets selected={selectedWidgets} setSelected={setSelectedWidgets} />
      <div className="mt-[28px] flex w-full justify-between text-[12.5px] font-semibold">
        <Button
          className="h-auto w-[48%] rounded-[9px] border-[1px] border-[#75869B94] text-[#75869B] transition-all duration-200 hover:bg-gray-100 active:scale-95 active:bg-gray-200 active:shadow-md"
          onPress={handleClose}
        >
          닫기
        </Button>
        <Button
          className="aspect-[139/42] h-auto w-[48%] rounded-[9px] bg-[#1A4C89] text-[#fff] transition-all duration-200 hover:bg-[#163E6E] active:scale-95 active:bg-[#163E65] active:shadow-md"
          onPress={handleSaveWidget}
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
