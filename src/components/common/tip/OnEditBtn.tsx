"use client";
import { isEditing } from "@/stores/atoms";
import { useAtom } from "jotai";
import Image from "next/image";
import { useEffect } from "react";

const OnEditBtn = () => {
  const [onEditing, setOnEditing] = useAtom(isEditing);

  useEffect(() => {
    setOnEditing(false);
  }, [setOnEditing]);

  return (
    <button onClick={() => setOnEditing((prev) => !prev)}>
      <Image
        width={18}
        height={18}
        alt="위젯 편집"
        src={onEditing ? "/images/blue-check.svg" : "/images/edit.svg"}
      />{" "}
    </button>
  );
};

export default OnEditBtn;
