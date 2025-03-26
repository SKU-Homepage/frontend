"use client";

import Image from "next/image";
import NtButton from "./NtButton";
import useIsPWA from "@/utils/isPWA";
import { Button } from "@heroui/button";

const RightBtns = () => {
  return (
    <div className="flex items-center">
      <NtButton />
      {!useIsPWA() && (
        <Button className="flex w-[35px] items-center justify-center rounded-md">
          <Image src="/images/hamburger.svg" width={17} height={17} alt="메뉴 버튼" />
        </Button>
      )}
    </div>
  );
};

export default RightBtns;
