"use client";

import Lecture, { EmptyLecture, LecturesContainer } from "./Lecture";
import { TimeTable } from "@/hooks/homeHooks";

const Lectures = ({ lectures }: LecturesProps) => {
  return (
    <LecturesContainer>
      {lectures ? (
        lectures.map((item: TimeTable) => (
          <Lecture
            key={item.subject}
            subject={item.subject}
            classroom={item.classroom}
            classtime={item.classtime}
          />
        ))
      ) : (
        <EmptyLecture />
      )}
    </LecturesContainer>
  );
};

interface LecturesProps {
  lectures: TimeTable[];
}

export default Lectures;
