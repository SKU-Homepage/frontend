import { Dispatch, ReactNode, SetStateAction } from "react";

const AddModalContent = ({ title, onClose, children }: AddModalContentProps) => {
  return (
    <>
      <header className="relative flex items-center justify-center">
        <h1 className="text-[20px] font-semibold text-[#143967]">{title}</h1>
        <button onClick={() => onClose(null)} className="absolute right-0 rotate-45 text-[40px]">
          +
        </button>
      </header>
      {children}
    </>
  );
};

export default AddModalContent;

interface AddModalContentProps {
  title: string;
  onClose: Dispatch<SetStateAction<"school" | "personal" | null>>;
  children: ReactNode;
}
