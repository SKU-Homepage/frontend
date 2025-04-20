import { cn } from "@/utils/cn";
import { OutputEventItem } from "@/utils/convertEvents";
import { CSSProperties } from "react";

type EventProps = OutputEventItem;

export const EVENT_COLORS = ["#5387E5", "#FF9272", "#9CA8D4"] as const;

const BAR_HEIGHT = 14 as const;

export const BAR_SHRINK_OFFSET = 7;
export const BAR_OFFSET = 2 + BAR_HEIGHT - BAR_SHRINK_OFFSET;

const EventBand = ({ title, single, adjacent, order }: EventProps) => {
  return (
    <div
      id="event-band"
      className={cn("absolute w-full", {
        "right-[1px] rounded-r-[2px]": adjacent === "left",
        "left-[1px] rounded-l-[2px]": adjacent === "right",
        "rounded-none": adjacent === "both",
        "rounded-[2px]": adjacent === "none",
      })}
      style={
        {
          height: `${BAR_HEIGHT}px`,
          "--barTopOffest": `${BAR_OFFSET}px`,
          top: `calc(var(--barTopOffset) * ${order - 1})`,
          background: EVENT_COLORS[(order - 1) % EVENT_COLORS.length],
        } as CSSProperties
      }
    >
      {single || adjacent === "right" ? (
        <div
          id="event-title"
          className="text-[9.432px] leading-[-0.377px] font-[500] whitespace-nowrap text-white"
        >
          {title}
        </div>
      ) : null}
    </div>
  );
};

export default EventBand;
