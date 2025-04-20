import Tip from "@/components/common/tip/Tip";
import DropDown from "./DropDown";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { privateApi } from "@/api/axios";

const days = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

const times = [
  "0:00 - 1:00",
  "1:00 - 2:00",
  "2:00 - 3:00",
  "3:00 - 4:00",
  "4:00 - 5:00",
  "5:00 - 6:00",
  "6:00 - 7:00",
  "7:00 - 8:00",
  "8:00 - 9:00",
  "9:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
  "17:00 - 18:00",
  "18:00 - 19:00",
  "19:00 - 20:00",
  "20:00 - 21:00",
  "21:00 - 22:00",
  "22:00 - 23:00",
  "23:00 - 0:00",
];

const ModalBody = ({ close }: { close: () => void }) => {
  const [name, setName] = useState("");
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [location, setLocation] = useState("");

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () =>
      privateApi.post("/time-table/self", {
        subject: name,
        day: selectedDay?.replace("요일", ""),
        startTime: selectedTime?.split("-")[0].trim(),
        endTime: selectedTime?.split("-")[1].trim(),
        classroom: location,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mySchedules"] });
      close();
    },
  });

  return (
    <div className="mt-[20px] flex h-full flex-col gap-[30px]">
      <Tip msg="반복되는 일정을 수업 시간표와 한눈에 볼 수 있어요!" />
      <div className="space-y-[12px]">
        <span className="block text-[14px] font-[700] text-[#143967]">일정명</span>
        <input
          type="text"
          placeholder="예) 스터디"
          value={name}
          onChange={(e) => setName(e.target.value?.trim())}
          className="block w-full rounded-[10px] border-1 border-[#75869b0f] bg-[#EEF0F1] p-[14px] text-[#143967] placeholder:text-[14px] placeholder:font-[400] placeholder:text-[#14396769]"
        />
      </div>
      <div className="space-y-[12px]">
        <span className="block text-[14px] font-[700] text-[#143967]">시간 & 장소</span>
        <div className="flex items-center gap-[8px]">
          <DropDown
            name="요일"
            menus={days}
            selectedMenu={selectedDay}
            setSelectedMenu={setSelectedDay}
          />
          <DropDown
            name="시간"
            menus={times}
            selectedMenu={selectedTime}
            setSelectedMenu={setSelectedTime}
          />
        </div>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value?.trim())}
          placeholder="예) 유담관 9층 그룹스터디룸 1"
          className="block w-full rounded-[10px] border-1 border-[#75869b0f] bg-[#EEF0F1] p-[14px] text-[#143967] placeholder:text-[14px] placeholder:font-[400] placeholder:text-[#14396769]"
        />
      </div>
      <button
        disabled={!(name.length > 0 && selectedDay && selectedTime && location.length > 0)}
        onClick={() => mutate()}
        className="mt-auto mb-[20px] w-full rounded-[24px] bg-[#143967] py-[14px] text-[14px] font-[700] text-white disabled:bg-neutral-300"
      >
        시간표에 추가하기
      </button>
    </div>
  );
};

export default ModalBody;
