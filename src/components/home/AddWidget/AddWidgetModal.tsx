"use client";

import AddWidgetModalContent from "./AddWidgetModalContent";
import DialogModal from "@/components/common/DialogModal";

export default function MyModal({ isOpen, setIsOpen }: AddWidgetModalProps) {
  return (
    <DialogModal setIsOpen={setIsOpen} isOpen={isOpen}>
      <AddWidgetModalContent setIsOpen={setIsOpen} />
    </DialogModal>
  );
}

interface AddWidgetModalProps {
  isOpen: boolean;
  setIsOpen: (boolean: boolean) => void;
}
