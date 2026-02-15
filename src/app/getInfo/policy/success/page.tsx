"use client";

import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import Image from "next/image";

export default function Success() {
  useEffect(() => {
    const duration = 2 * 1000; // 2초
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      // 왼쪽에서 발사
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });

      // 오른쪽에서 발사
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    // 애니메이션 종료 후 React Native로 완료 메시지 전송
    const timeout = setTimeout(() => {
      window.ReactNativeWebView?.postMessage(JSON.stringify({ type: "INFO_COMPLETE" }));
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-[16px] bg-gray-900">
      <Image
        className="animate-fade-in-scale"
        src="/images/firework.png"
        width={119}
        height={119}
        alt="회원가입 성공"
      />
      <div className="animate-fade-in flex flex-col gap-[10px] text-center text-white">
        <p className="text-[26px] font-extrabold">모든 과정이 완료되었어요!</p>
        <p className="text-[14px] font-bold">서비스와 함께 더 편리한 학교생활을 해보세요</p>
      </div>
    </div>
  );
}
