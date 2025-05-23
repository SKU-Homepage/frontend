import { OutputEventItem } from "@/utils/convertEvents";
import EventBand from "./EventBand";

interface EventsProps {
  events: OutputEventItem[];
}

const Events = ({ events }: EventsProps) => {
  return (
    <div className="relative flex flex-col">
      {events?.map((e) => (
        <EventBand
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
