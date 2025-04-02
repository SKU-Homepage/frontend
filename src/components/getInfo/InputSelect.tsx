import { inputStyle } from "@/styles/InputStyle";
import { cn } from "@/utils/cn";
import Image from "next/image";

const InputSelect = ({ value, setshowModal }: InputSelectProps) => {
  return (
    <button onClick={() => setshowModal(true)} className={inputStyle}>
      <span
        className={cn("text-[#14396769]", {
          "font-semibold text-[#4F68E9]": !!value,
        })}
      >
        {value ? value : "선택하기"}
      </span>
      <Image src="/images/below-direction.svg" width={20} height={10} alt="선택 버튼" />
    </button>
  );
};

interface InputSelectProps {
  value: string;
  setshowModal: (boolean: boolean) => void;
}

export default InputSelect;
