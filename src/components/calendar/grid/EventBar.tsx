import { cn } from "@/utils/cn";

interface EventBarProps {
  adjacents: "left" | "right" | "both" | "none";
  index: number;
}

const EVENT_COLORS = ["#5387E5", "#FF9272", "#9CA8D4"] as const;

const EventBar = ({ adjacents, index }: EventBarProps) => {
  return (
    <div
      className={cn("w-full h-[9px]", {
        "rounded-r-[2px]": adjacents === "left",
        "rounded-l-[2px]": adjacents === "right",
        "rounded-none": adjacents === "both",
        "rounded-[2px]": adjacents === "none",
      })}
      style={{ background: EVENT_COLORS[index] }}
    ></div>
  );
};

export default EventBar;
