"use client";
import { useAtom } from "jotai";
import { motion } from "motion/react";

import { willDelete } from "@/stores/atoms";
import Header from "@/components/header/Header";
import { useCallback } from "react";

const HeaderSection = () => {
  const [willDeleteItem, setWillDeleteItem] = useAtom(willDelete);
  const handleClick = () => {
    setWillDeleteItem((prev) => !prev);
  };

  const setNotShowBtn = useCallback(() => {
    setWillDeleteItem(false);
  }, [setWillDeleteItem]);

  return (
    <div ref={setNotShowBtn}>
      <Header title="알림" src="/images/bin.svg" onClick={handleClick} />
      {willDeleteItem && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.2 }}
          className="flex justify-end py-[10px] pr-[20px] bg-[#496F9D]"
        >
          <div className="flex text-white text-[12px] gap-[20px] font-medium">
            <button>전체 삭제</button>
            <button onClick={handleClick}>닫기</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HeaderSection;
