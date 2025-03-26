"use client";

import { cn } from "@/utils/cn";

const Button = ({ color, handleClick, msg, loading }: ButtonProps) => {
  return (
    <button
      className={cn(
        `h-[56px] w-full rounded-[9px] font-semibold text-white transition-all duration-200`,
        {
          "bg-[#4D66EC] hover:opacity-80 active:opacity-60": color === "bright",
          "bg-[#143967] hover:opacity-80 active:opacity-60": color === "dark",
          "flex cursor-not-allowed items-center justify-center bg-[#BDC6D0]":
            color === "disabled" || loading,
        }
      )}
      disabled={color === "disabled" || loading}
      onClick={handleClick}
    >
      {loading && (
        <svg
          className="mr-3 size-5 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="white"
            strokeWidth="4"
            strokeDasharray="31.4"
            strokeLinecap="round"
            className="opacity-50"
          />
        </svg>
      )}
      {loading ? "잠시만 기다려주세요" : msg}
    </button>
  );
};

interface ButtonProps {
  color: "bright" | "dark" | "disabled";
  handleClick: () => void;
  msg: string;
  loading?: boolean;
}

export default Button;
