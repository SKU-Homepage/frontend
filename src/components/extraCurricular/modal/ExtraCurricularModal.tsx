"use clinet";

import { Sheet } from "react-modal-sheet";

interface ExtraCurricularModalProps {
  isOpen: boolean;
  onClose: (openState: boolean) => void;
}

export default function ExtraCurricularModal({ isOpen, onClose }: ExtraCurricularModalProps) {
  return (
    <Sheet isOpen={isOpen} onClose={() => onClose(false)}>
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
