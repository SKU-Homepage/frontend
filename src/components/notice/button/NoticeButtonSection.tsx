"use client";

import { useState } from "react";

import NoticeBtn from "./NoticeBtn";
import NoticeModal from "../modal/NoticeModal";

const NoticeButtonSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <NoticeBtn
        noticeTitle="2024 콘텐츠 인사이트 : 상상은 현실이 된다"
        type="normal"
        department="학생처 2024.12.02"
        onClick={() => setIsOpen(true)}
      />
      <NoticeModal isOpen={isOpen} onClose={setIsOpen} />
    </section>
  );
};

export default NoticeButtonSection;
