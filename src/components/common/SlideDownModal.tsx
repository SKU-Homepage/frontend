import { Dialog, DialogPanel, TransitionChild } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface SlideDownModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: ReactNode;
}

export default function SlideDownModal({ isOpen, setIsOpen, children }: SlideDownModalProps) {
  return (
    <Dialog as="div" open={isOpen} className="relative z-50" onClose={setIsOpen}>
      {/* 배경 */}
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

      {/* 모달 컨테이너 */}
      <div className="fixed inset-0 flex items-start justify-center">
        <TransitionChild
          as={Fragment}
          enter="transition transform duration-300 ease-out"
          enterFrom="-translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transition transform duration-200 ease-in"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="-translate-y-full opacity-0"
        >
          <DialogPanel className="w-full max-w-xl rounded-b-[20px] bg-white p-5 pb-10 shadow-lg">
            {children}
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  );
}
