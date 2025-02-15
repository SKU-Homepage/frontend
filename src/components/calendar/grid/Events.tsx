import { OutputEventItem } from "@/utils/convertEvents";
import EventBar from "./EventBar";

interface EventsProps {
  events: OutputEventItem[];
}

const Events = ({ events }: EventsProps) => {
  return (
    <div className="flex flex-col gap-[2px]">
      {events.map((e) => (
        <EventBar key={e.id} adjacents={e.adjacent} index={e.order} />
      ))}
    </div>
  );
};

export default Events;
