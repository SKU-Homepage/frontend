"use client";

import Image from "next/image";
import { Sheet } from "react-modal-sheet";

interface NoticeModalProps {
  isOpen: boolean;
  author: string;
  title: string;
  date: string;
  url: string;
  onClose: (openState: boolean) => void;
}

export default function NoticeModal({
  isOpen,
  onClose,
  author,
  title,
  date,
  url,
}: NoticeModalProps) {
  return (
    <Sheet isOpen={isOpen} onClose={() => onClose(false)}>
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
