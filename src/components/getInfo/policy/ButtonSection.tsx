"use client";
import { useAtom } from "jotai";
import { userInfo } from "@/stores/atoms";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import { useEffect, useState } from "react";
import { postUserInfo } from "@/hooks/getInfoHooks";

const ButtonSection = ({ allChecked }: ButtonSectionProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [info] = useAtom(userInfo);
  const isInfoFilled =
    Object.values(info).every((value) => value) && info.studentNumber.toString().length === 10;

  useEffect(() => {
    if (!isInfoFilled) {
      alert("세션이 만료되었습니다.");
      router.back();
    }
  }, [isInfoFilled, router]);

  return (
    <div className="mt-[30px]">
      <Button
        loading={isLoading}
        msg="시작하기"
        color={isInfoFilled && allChecked ? "bright" : "disabled"}
        handleClick={async () => {
          setIsLoading(true);
          const isSuccess = await postUserInfo(info);
          if (isSuccess) router.replace("/getInfo/policy/success");
          else setIsLoading(false);
        }}
      />
    </div>
  );
};

interface ButtonSectionProps {
  allChecked: boolean;
}

export default ButtonSection;
