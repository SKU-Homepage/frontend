"use client";

import { useState } from "react";
import AddWidgetModal from "./AddWidgetModal";

const AddWidget = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center text-[#98AABF] text-[20px] opacity-78 justify-center p-[22px] rounded-[15px] border-[3px] border-[rgba(233,235,240,0.83)]"
      >
        +
      </button>
      <AddWidgetModal isOpen={showModal} setIsOpen={setShowModal} />
    </>
  );
};

export default AddWidget;
