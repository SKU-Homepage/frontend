"use client";

import { useState } from "react";
import AddWidgetModal from "./AddWidgetModal";
import { Button } from "@heroui/button";

const AddWidget = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Button
        onPress={() => setShowModal(true)}
        className="flex aspect-square h-auto w-auto items-center justify-center rounded-[15px] border-[3px] border-[rgba(233,235,240,0.83)] p-[22px] text-[20px] text-[#98AABF] opacity-78 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg active:scale-95 active:bg-gray-200 active:shadow-md"
      >
        +
      </Button>
      <AddWidgetModal isOpen={showModal} setIsOpen={setShowModal} />
    </>
  );
};

export default AddWidget;
