import { ReactNode } from "react";

const SectionLayout = ({ children }: { children: ReactNode }) => {
  return <section id="modal-container">{children}</section>;
};

export default SectionLayout;
