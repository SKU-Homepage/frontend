"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import SlideUpModal from "../common/SlideUpModal";
import ModalContent from "./ModalContent";
import InputSelect from "./InputSelect";
import InputTyping from "./InputTyping";
import { InfoLabel } from "@/constants/userInfo";
import { useAtom } from "jotai";
import { userInfo } from "@/stores/atoms";

const InputContainer = ({ label, options, title, placeholder }: InputContainerProps) => {
  const [info, setInfo] = useAtom(userInfo);
  const [showModal, setShowModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (info[label as keyof typeof info]) {
      setValue(info[label as keyof typeof info] as string);
    }

    if (label === "college") {
      setInfo((prev) => ({
        ...prev,
        department: "", // department 초기화
        major: "", // major 초기화
      }));
    }

    if (label === "department") {
      setInfo((prev) => ({
        ...prev,
        major: "", // major 초기화
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info[label as keyof typeof info]]);

  return (
    <div className="flex flex-col gap-[13px]">
      <div className="flex gap-[5px]">
        <label className="text-[14px] font-semibold text-[#143967]">{InfoLabel[label]}</label>
        {check || (info[label as keyof typeof info] && !placeholder) ? (
          <Image src="/images/clearBlue-check.svg" width={14} height={14} alt="입력 여부" />
        ) : null}
      </div>
      {!placeholder ? (
        <InputSelect
          value={info[label as keyof typeof info].toString()}
          setshowModal={setShowModal}
        />
      ) : (
        <InputTyping
          check={check}
          setCheck={setCheck}
          setValue={setValue}
          placeholder={placeholder}
        />
      )}
      {!placeholder && (
        <SlideUpModal isOpen={showModal} setIsOpen={setShowModal}>
          <ModalContent
            label={label}
            onClose={() => setShowModal(false)}
            setValue={setValue}
            value={value}
            title={title}
            options={options}
          />
        </SlideUpModal>
      )}
    </div>
  );
};

interface InputContainerProps {
  label: string;
  options: string[];
  title: string;
  placeholder?: string;
}

export default InputContainer;
