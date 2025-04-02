import { userInfo } from "@/stores/atoms";
import { inputStyle } from "@/styles/InputStyle";
import { cn } from "@/utils/cn";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRef, useState } from "react";
import { z } from "zod";

const numberSchema = z
  .string()
  .max(10, "최대 10자리 숫자만 입력 가능합니다.")
  .regex(/^\d+$/, "숫자만 입력 가능합니다.");

const InputTyping = ({ check, setCheck, setValue, placeholder }: InputTyping) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [info, setUserInfo] = useAtom(userInfo);
  const [error, setError] = useState<string>("");

  const handleChange = () => {
    const value = inputRef.current?.value || "";
    setUserInfo((prevInfo) => ({ ...prevInfo, studentNumber: Number(value) }));
    const result = numberSchema.safeParse(value);

    if (!result.success) setError(result.error.errors[0].message);
    else setError("");

    setCheck(value.length === 10);
    setValue(value);
  };

  return (
    <div className="relative">
      <input
        type="number"
        inputMode="numeric"
        ref={(node) => {
          inputRef.current = node;
          if (info.studentNumber && inputRef.current)
            inputRef.current.value = info.studentNumber.toString();
        }}
        onChange={handleChange}
        placeholder={placeholder}
        className={cn(`${inputStyle} placeholder-[#14396769]`, {
          "font-semibold text-[#4F68E9] outline-[#4F68E9]": check,
          "border-red-500": error,
        })}
      />
      {inputRef.current?.value && (
        <div
          onClick={() => {
            if (inputRef.current) inputRef.current.value = "";
            inputRef.current?.focus();
            setCheck(false);
            setError("");
            setUserInfo((prevInfo) => ({ ...prevInfo, studentNumber: 0 }));
          }}
          className="absolute top-[50%] right-[15px] translate-y-[-50%]"
        >
          <Image src="/images/circle-close.svg" width={15} height={15} alt="close" />
        </div>
      )}
      {error && <p className="absolute bottom-[-25px] text-[10px] text-red-500">{error}</p>}
    </div>
  );
};

interface InputTyping {
  check: boolean;
  setCheck: (check: boolean) => void;
  setValue: (string: string) => void;
  placeholder: string;
}

export default InputTyping;
