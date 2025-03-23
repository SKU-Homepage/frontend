"use client";
import { useAtom } from "jotai";
import Button from "../common/Button";
import { userInfo } from "@/stores/atoms";
import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";

const ButtonSection = () => {
  const router = useRouter();
  const [info] = useAtom(userInfo);
  const buttonRef = useRef<HTMLDivElement>(null);
  const isInfoFilled =
    Object.values(info).every((value) => value) && info.studentNumber.toString().length === 10;

  const checkInfoFilledAndScroll = useCallback(
    (node: HTMLDivElement | null) => {
      buttonRef.current = node;
      if (isInfoFilled && buttonRef.current) {
        buttonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    },
    [isInfoFilled]
  );

  return (
    isInfoFilled && (
      <div ref={checkInfoFilledAndScroll}>
        <Button
          msg="확인"
          color={isInfoFilled ? "bright" : "disabled"}
          handleClick={() => {
            router.replace("/getInfo/policy");
          }}
        />
      </div>
    )
  );
};

export default ButtonSection;
