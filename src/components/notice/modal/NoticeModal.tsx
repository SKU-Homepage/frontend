"use clinet";

import { useEffect, useState } from "react";
import { Sheet } from "react-modal-sheet";

interface NoticeModalProps {
  isOpen: boolean;
  onClose: (openState: boolean) => void;
}

export default function NoticeModal({ isOpen, onClose }: NoticeModalProps) {
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
          <h1>header</h1>
        </Sheet.Header>
        <Sheet.Content>
          <Sheet.Scroller>
            <p>test</p>
          </Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
    </Sheet>
  );
}
