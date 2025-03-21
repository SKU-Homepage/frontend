"use client";

import { Button } from "@heroui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NtButton = () => {
  const router = useRouter();
  return (
    <Button
      onPress={() => router.push("/notifications")}
      className="flex aspect-square justify-center"
      href="/notifications"
    >
      <Image src="/images/bell.svg" width={20} height={21} alt="알림 버튼" />
    </Button>
  );
};

export default NtButton;
