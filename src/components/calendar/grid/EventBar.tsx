import { cn } from "@/utils/cn";
import { OutputEventItem } from "@/utils/convertEvents";

type EventProps = OutputEventItem;

const EVENT_COLORS = ["#5387E5", "#FF9272", "#9CA8D4"] as const;

const BAR_HEIGHT = 14 as const;

const EventBar = ({ title, single, adjacent, order }: EventProps) => {
  return (
    <div
      className={cn("absolute w-full", {
        "rounded-r-[2px]": adjacent === "left",
        "rounded-l-[2px]": adjacent === "right",
        "rounded-none": adjacent === "both",
        "rounded-[2px]": adjacent === "none",
      })}
      style={{
        height: `${BAR_HEIGHT}px`,
        top: `${(2 + 14) * (order - 1)}px`,
        background: EVENT_COLORS[(order - 1) % EVENT_COLORS.length],
      }}
    >
      {single || adjacent === "right" ? (
        <div className="text-[9.432px] font-[500] text-white leading-[-0.377px] whitespace-nowrap">
          {title}
        </div>
      ) : null}
    </div>
  );
};

export default EventBar;
