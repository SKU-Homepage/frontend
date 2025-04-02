import { CSSProperties, ReactNode } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  open: boolean;
  close: () => void;
  children: ReactNode;
  afterClose?: () => void;
  style?: CSSProperties;
}

export const Modal = ({ children, open, close, afterClose, style }: ModalProps) => (
  <ReactModal
    ariaHideApp={false}
    isOpen={open}
    onRequestClose={() => close()}
    onAfterClose={() => afterClose?.()}
    style={{
      overlay: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0,0,0,0.5)",
        zIndex: 99999,
      },
      content: {
        overflow: "hidden",
        position: "relative",
        margin: 0,
        padding: 0,
        inset: 0,
        borderRadius: 20,
        ...style,
      },
    }}
  >
    {children}
  </ReactModal>
);
