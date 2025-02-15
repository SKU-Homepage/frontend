import { OutputEventItem } from "@/utils/convertEvents";
import EventBar from "./EventBar";

interface EventsProps {
  events: OutputEventItem[];
}

const Events = ({ events }: EventsProps) => {
  return (
    <div className="relative flex flex-col gap-[2px]">
      {events.map((e) => (
        <EventBar
          key={e.id}
          id={e.id}
          title={e.title}
          single={e.single}
          adjacent={e.adjacent}
          order={e.order}
        />
      ))}
    </div>
  );
};

export default Events;
