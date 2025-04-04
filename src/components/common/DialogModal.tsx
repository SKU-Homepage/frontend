import { Dialog, DialogPanel } from "@headlessui/react";
import { ReactNode } from "react";

const DialogModal = ({ children, setIsOpen, isOpen }: DialogModalProps) => {
  return (
    <Dialog
      as="div"
      open={isOpen}
      className={`fixed inset-0 z-50 flex w-full items-center justify-center focus:outline-none ${isOpen ? "bg-black/30 p-4" : ""} `}
      onClose={() => setIsOpen(false)}
      unmount={true}
    >
      <div className="fixed inset-0 z-60 w-full overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="relative flex w-full max-w-md flex-col items-center rounded-xl bg-[#fff] p-[23px] shadow-[0px_0px_7.074px_0px_rgba(255,255,255,0.59)] transition duration-300 ease-out data-[closed]:transform-[scale(85%)] data-[closed]:opacity-0"
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

interface DialogModalProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default DialogModal;
