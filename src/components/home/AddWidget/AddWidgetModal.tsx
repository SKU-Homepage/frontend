"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import AddWidgetModalContent from "./AddWidgetModalContent";

export default function MyModal({ isOpen, setIsOpen }: AddWidgetModalProps) {
  return (
    <Dialog
      as="div"
      open={isOpen}
      className={`
        fixed focus:outline-none inset-0 flex w-full items-center justify-center
        ${isOpen ? "bg-black/30 p-4" : ""}
      `}
      onClose={() => setIsOpen(false)}
      unmount={true}
    >
      <div className="fixed inset-0 z-10 w-full overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="flex flex-col relative items-center w-full pt-[40px] pb-[23px] px-[23px] max-w-md rounded-xl bg-[#fff] shadow-[0px_0px_7.074px_0px_rgba(255,255,255,0.59)] transition duration-300 ease-out data-[closed]:transform-[scale(85%)] data-[closed]:opacity-0"
          >
            <AddWidgetModalContent setIsOpen={setIsOpen} />
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
