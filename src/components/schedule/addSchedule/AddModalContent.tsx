import ModalBody from "./modalComponents/ModalBody";

const AddModalContent = ({ onClose }: AddModalContentProps) => {
  return (
    <>
      <header className="relative flex items-center justify-center">
        <h1 className="text-[20px] font-semibold text-[#143967]">학교 수업 추가하기</h1>
        <button onClick={() => onClose(false)} className="absolute right-0 rotate-45 text-[40px]">
          +
        </button>
      </header>
      <ModalBody />
    </>
  );
};

export default AddModalContent;

interface AddModalContentProps {
  onClose: (isOpen: boolean) => void;
}
