import { useQuery } from "@tanstack/react-query";
import TimeTable from "../../LectureCard";
import AddBottomSheet from "../AddBottomSheet";
import CurrentSearched from "./CurrentSearched";
import { Lecture, useLectures } from "@/hooks/scheduleHooks";
import { useEffect, useState } from "react";
import NonSearched from "../../NonSearched";

const SearchedList = ({ searchName, setSearchName }: SearchedListProps) => {
  const { data } = useQuery(useLectures(searchName));
  const [selectedLecutres, setSelectedLectures] = useState<Lecture[]>([]);

  useEffect(() => {
    // const timeTables = getMyTimeTables();
    // setSelectedLectures(timeTables);
  }, []);

  return searchName ? (
    <div className="mt-[15px] flex h-full max-h-[calc(100%-200px)] flex-col gap-[17px] overflow-y-auto">
      {data?.length ? (
        data.map((item) => (
          <TimeTable
            isSelected={selectedLecutres.some((lecture) => lecture.subjectId === item.subjectId)}
            setSelectedLectures={setSelectedLectures}
            data={item}
            key={item.subjectId}
            enrollMode
          />
        ))
      ) : (
        <NonSearched
          title="검색된 수업이 없어요."
          description="수업명을 다시 한 번 확인해보세요."
        />
      )}
      <AddBottomSheet selectedLectures={selectedLecutres} />
    </div>
  ) : (
    <CurrentSearched setSearchName={setSearchName} />
  );
};

interface SearchedListProps {
  searchName: string;
  setSearchName: (name: string) => void;
}

export default SearchedList;
