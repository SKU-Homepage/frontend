import { cn } from "@/utils/cn";
import { Button } from "@heroui/button";
import { useState } from "react";
import TimeTable from "./LectureCard";

const WeeklyTable = () => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  const [selectedWeek, setSelectedWeek] = useState("월");
  return (
    <div className="mt-[34px]">
      <div className="flex justify-between">
        {weeks.map((week) => (
          <Button
            key={week}
            onPress={() => setSelectedWeek(week)}
            className={cn(
              `aspect-square h-[44px] w-[44px] rounded-[8px] bg-[#E7EAED8C] text-[16px] font-medium text-[#99A9BC] transition-all duration-200`,
              {
                "bg-[#ABCAEA] text-[#143967]": week === selectedWeek,
              }
            )}
          >
            {week}
          </Button>
        ))}
      </div>
      <div className="mt-[24.3px] text-[#143967]">
        <TimeTable
          data={{
            subjectId: 0,
            subject: "",
            professor: "",
            day: "",
            startTime: "",
            endTime: "",
            classroom: "",
            credit: "",
            grade: "",
            target: "",
            division: "",
          }}
        />
      </div>
    </div>
  );
};

export default WeeklyTable;
