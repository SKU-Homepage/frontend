import { Dialog, DialogPanel, TransitionChild } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface SlideUpModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (boolean: boolean) => void;
}

export default function SlideUpModal({ children, isOpen, setIsOpen }: SlideUpModalProps) {
  return (
    <Dialog as="div" open={isOpen} className="relative z-50 w-full" onClose={setIsOpen}>
      <div className={`fixed inset-0 ${isOpen ? "bg-black/50" : ""}`} aria-hidden="true" />
      <div className="fixed inset-0 flex items-end justify-center">
        <TransitionChild
          as={Fragment}
          enter="transition transform duration-300 ease-out"
          enterFrom="translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transition transform duration-200 ease-in"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="translate-y-full opacity-0"
        >
          <DialogPanel className="w-full max-w-md rounded-t-[20px] bg-white p-[20px] pb-[50px] shadow-lg">
            {children}
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  );
}
