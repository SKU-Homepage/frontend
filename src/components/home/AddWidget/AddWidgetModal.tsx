import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import NewWidgets from "./NewWidgets";

export default function MyModal({ isOpen, setIsOpen }: AddWidgetModalProps) {
  const close = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      as="div"
      open={isOpen}
      className="fixed focus:outline-none inset-0 flex w-full items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
      onClose={close}
    >
      <div className="fixed inset-0 z-10 w-full overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="flex flex-col relative items-center w-full pt-[40px] pb-[23px] px-[23px] max-w-md rounded-xl bg-[#fff] shadow-[0px_0px_7.074px_0px_rgba(255,255,255,0.59)] transition duration-300 ease-out data-[closed]:transform-[scale(85%)] data-[closed]:opacity-0"
          >
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
            <NewWidgets />
            <div className="flex justify-between mt-[28px] w-full font-semibold text-[12.5px]">
              <Button
                className="text-[#75869B] w-[48%] border-[1px] rounded-[9px] border-[#75869B94] "
                onClick={close}
              >
                닫기
              </Button>
              <Button
                className="text-[#fff] w-[48%] rounded-[9px] bg-[#1A4C89] aspect-[139/42]"
                onClick={close}
              >
                선택 완료
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

interface AddWidgetModalProps {
  isOpen: boolean;
  setIsOpen: (boolean: boolean) => void;
}
