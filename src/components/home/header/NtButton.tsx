"use client";

import { Button } from "@heroui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NtButton = () => {
  const router = useRouter();
  return (
    <Button
      onPress={() => router.push("/notifications")}
      className="flex aspect-square w-[35px] justify-center rounded-md px-0"
      href="/notifications"
    >
      <Image src="/images/bell.png" width={20} height={21} alt="알림 버튼" />
    </Button>
  );
};

export default NtButton;
