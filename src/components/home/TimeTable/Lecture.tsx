import { TimeTable } from "@/hooks/homeHooks";

const Lecture = ({ subject, classroom, classtime }: TimeTable) => {
  return (
    <div className="flex w-full flex-col justify-center gap-[11px] rounded-[10px] bg-linear-[247deg,rgba(222,234,255,0.08)_-8.71%,rgba(154,191,255,0.15)_108.48%,rgba(200,217,237,0.16)] px-[16px] py-[11px] font-medium text-[#143967]">
      <p className="text-[11px]">{classtime}</p>
      <div className="flex w-full items-end justify-between">
        <span className="text-[15px] font-semibold">{subject}</span>
        <span className="text-[11px]">{classroom}</span>
      </div>
    </div>
  );
};

export default Lecture;
