import { SubmitInfoType } from "@/constants/userInfo";
import { userInfo } from "@/stores/atoms";
import { useAtom } from "jotai";
import Image from "next/image";
import { useCallback, useState } from "react";

const ModalContent = ({ label, setValue, onClose, options, title, value }: ModalContentProps) => {
  const [, setUserInfo] = useAtom(userInfo);
  const [selectedCategory, setselectedCategory] = useState<string>("");
  const setInitialState = useCallback(() => {
    setselectedCategory(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="mb-[23px] flex items-center justify-between">
        <span className="text-[18px] font-semibold">{title}</span>
        <button
          onClick={() => onClose(false)}
          className="relative h-[16px] w-[16px] cursor-pointer"
        >
          <div className="absolute top-[50%] left-0 h-[2px] w-full rotate-45 bg-black"></div>
          <div className="absolute top-[50%] left-0 h-[2px] w-full -rotate-45 bg-black"></div>
        </button>
      </header>
      <div className="max-h-[200px] overflow-y-scroll">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => setselectedCategory(option)}
            className={`w-full cursor-pointer border-b-[0.7px] border-t-[#75869BC9] py-[15px] text-[14px] font-medium ${
              selectedCategory === option ? "text-[#4D66EC]" : "text-[#14396780]"
            } last:border-b-0`}
          >
            <span className="relative" ref={setInitialState}>
              <Image
                className={`absolute transition duration-300 ${selectedCategory === option ? "scale-100 opacity-100" : "scale-50 opacity-0"} top-[50%] left-[-15px] translate-y-[-50%]`}
                src="/images/select-check.svg"
                width={10}
                height={10}
                alt="선택된 카테고리"
              />
              {option}
            </span>
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          setValue(selectedCategory);
          onClose(false);
          setUserInfo((prevInfo: SubmitInfoType) => {
            return {
              ...prevInfo,
              [label]: selectedCategory,
            };
          });
        }}
        className="mt-[20px] h-[56px] w-full cursor-pointer rounded-[9px] bg-[#4D66EC] text-[16px] font-semibold text-white"
      >
        확인
      </button>
    </>
  );
};

interface ModalContentProps {
  label: string;
  setValue: (string: string) => void;
  onClose: (boolean: boolean) => void;
  options: string[];
  title: string;
  value: string;
}

export default ModalContent;
