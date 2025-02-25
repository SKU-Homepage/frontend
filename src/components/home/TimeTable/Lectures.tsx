"use client";

import Lecture from "./Lecture";
import { TimeTable } from "@/hooks/homeHooks";

const Lectures = ({ lectures }: LecturesProps) => {
  return (
    <div className="mt-[16.5px] flex flex-col gap-[7.8px]">
      {lectures.map((item: TimeTable) => (
        <Lecture
          key={item.subject}
          subject={item.subject}
          classroom={item.classroom}
          classtime={item.classtime}
        />
      ))}
    </div>
  );
};

interface LecturesProps {
  lectures: TimeTable[];
}

export default Lectures;
