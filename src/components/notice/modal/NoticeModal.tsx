"use clinet";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Sheet } from "react-modal-sheet";

interface NoticeModalProps {
  author: string;
  url: string;
  date: string;
  title: string;
  isOpen: boolean;
  onClose: (openState: boolean) => void;
}

export default function NoticeModal({
  isOpen,
  onClose,
  author,
  date,
  url,
  title,
}: NoticeModalProps) {
  const [mountTarget, setMountTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const container = document.getElementById("modal-container");
    if (container) {
      setMountTarget(container);
    }
  }, []);
  return (
    <Sheet isOpen={isOpen} onClose={() => onClose(false)} mountPoint={mountTarget ?? undefined}>
      <Sheet.Container>
        <Sheet.Header>
          <div className="px-6">
            <div className="mt-3 flex justify-center">
              <Image
                src="/images/extracurricular/bottomArrow.png"
                width={40}
                height={10}
                alt="아래 방향 화살표"
                style={{
                  width: "40px",
                  height: "10px",
                }}
              />
            </div>
            <div className="mt-3 flex w-[90px] justify-center rounded-[4px] bg-[#75869B]">
              <p className="text-[11px] font-medium text-[#FFFFFF]">{author}</p>
            </div>
            <div className="mt-3 text-[18px] font-bold text-[#143967]">
              <h1 className="">{title}</h1>
            </div>
            <time className="text-[12px] font-[400] text-[#1439679E]">{date.slice(0, 10)}</time>
          </div>
        </Sheet.Header>
        <Sheet.Content>
          <Sheet.Scroller>
            <iframe src={url} className="min-h-screen w-full" />
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
