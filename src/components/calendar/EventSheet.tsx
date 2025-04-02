import ChevronDownWide from "../../../public/images/chevron_down_wide.svg";
import Direction from "../../../public/images/direction.svg";

const events = [
  {
    id: 1,
    color: "#5387E5",
    name: "[졸업] 졸업전시회",
    startDate: "25.01.08",
    endDate: "25.01.10",
  },
  {
    id: 2,
    color: "#FF9272",
    name: "[졸업] 졸업전시회",
    startDate: "25.01.08",
    endDate: "25.01.10",
  },
];

const EventSheet = () => {
  return (
    <div className="flex flex-1 flex-col bg-[#EEF0F1] py-[12px] pb-[50px]">
      <div className="self-center">
        <ChevronDownWide />
      </div>
      <div className="py-[20px] pl-[20px]">
        <span className="text-[#143967]">6일 화요일 (오늘)</span>
      </div>
      <div className="flex flex-col gap-[2px]">
        {events.map((event) => (
          <EventBand
            key={event.id}
            color={event.color}
            name={event.name}
            startDate={event.startDate}
            endDate={event.endDate}
          />
        ))}
      </div>
    </div>
  );
};

interface EventBandProps {
  color: string;
  name: string;
  startDate: string;
  endDate: string;
}

const EventBand = ({ color, name, startDate, endDate }: EventBandProps) => {
  return (
    <div className="flex h-[60px] items-center bg-[#f6f6f6] px-[20px]">
      <div style={{ background: color }} className="h-full w-[8px]"></div>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-[10px] px-[20px] py-[16px]">
          <span className="text-[14px] font-[500] text-[#143967]">{name}</span>
          <span className="text-[11px] font-[400] text-[#143967]">
            {startDate} ~ {endDate}
          </span>
        </div>
        <Direction />
      </div>
    </div>
  );
};

export default EventSheet;
