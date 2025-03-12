"use client";

import { TimeTable } from "@/hooks/homeHooks";
import Lecture, { EmptyLecture, LecturesContainer } from "./Lecture";

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
  lectures: TimeTable[] | null;
}

export default Lectures;
