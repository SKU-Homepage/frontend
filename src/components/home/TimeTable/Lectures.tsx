"use client";

import Lecture, { EmptyLecture, LecturesContainer } from "./Lecture";
import { Lecture as LectureType } from "@/hooks/scheduleHooks";

const Lectures = ({ lectures }: LecturesProps) => {
  return (
    <LecturesContainer>
      {lectures?.length ? (
        lectures.map((item: LectureType) => (
          <Lecture
            key={item.subjectId}
            subject={item.subject}
            classroom={item.classroom}
            startTime={item.startTime}
            endTime={item.endTime}
          />
        ))
      ) : (
        <EmptyLecture />
      )}
    </LecturesContainer>
  );
};

interface LecturesProps {
  lectures: LectureType[] | null;
}

export default Lectures;
