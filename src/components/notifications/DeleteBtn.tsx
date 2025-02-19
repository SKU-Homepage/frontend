"use client";

import { willDelete } from "@/stores/atoms";
import { useAtom } from "jotai";
import Image from "next/image";

const DeleteBtn = () => {
  const [willDeleteItem] = useAtom(willDelete);
  if (!willDeleteItem) return null;

  return (
    <button onClick={() => {}} className="flex flex-1 items-start">
      <Image src="/images/x.svg" width={10} height={10} alt="옵션" />
    </button>
  );
};

export default DeleteBtn;
