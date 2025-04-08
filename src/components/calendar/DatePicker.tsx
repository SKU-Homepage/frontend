import dayjs from "dayjs";
import Picker from "react-mobile-picker";
import { cn } from "@/utils/cn";
import { eventAtom, PickedDate } from "@/stores/calendar";
import { useAtom } from "jotai";
import { useEffect } from "react";

export const days = ["일", "월", "화", "수", "목", "금", "토", "일"];

interface DatePickerProps {
  date: PickedDate;
  onChange: (value: PickedDate) => void;
}

function parseDateAndHourStringIntoDayjs({ date, hour, minute }: PickedDate) {
  return dayjs(`${date} ${hour}:${minute}:00`, "YYYY년 M월 D일(dd) HH:mm:ss");
}

let watchValue: PickedDate;

const DatePicker = ({ date, onChange }: DatePickerProps) => {
  const today = dayjs();
  const [{ startDate, endDate }, setEvent] = useAtom(eventAtom);

  function isEndDateBeforeStartDate() {
    if (
      !parseDateAndHourStringIntoDayjs(endDate).isBefore(parseDateAndHourStringIntoDayjs(startDate))
    ) {
      setEvent((prev) => ({ ...prev, canAdd: true }));
    } else {
      setEvent((prev) => ({ ...prev, canAdd: false }));
    }
  }

  useEffect(() => {
    isEndDateBeforeStartDate();
  }, [watchValue]);

  return (
    <Picker
      wheelMode="normal"
      value={{ date: date.date, hour: date.hour, minute: date.minute }}
      onChange={(value) => {
        watchValue = value;
        onChange(value);
      }}
      height={120}
      className="relative px-[8px]"
    >
      {/* 날짜 */}
      <Picker.Column name="date" className="!flex-2">
        {[...Array(dayjs().daysInMonth())]
          .map((_, index) => index + 1)
          .map((day) => (
            <Picker.Item
              key={day}
              value={`${today.year()}년 ${today.month() + 1}월 ${day}일(${days[dayjs().date(day).day()]})`}
            >
              {({ selected }) => (
                <span
                  className={cn(
                    "text-[18px] font-[500] text-[#D7DEE5]",
                    selected && "text-[#143967]"
                  )}
                >
                  {`${today.year()}년 ${today.month() + 1}월 ${day}일`}
                </span>
              )}
            </Picker.Item>
          ))}
      </Picker.Column>

      {/* 시간 */}
      <Picker.Column name="hour" className="!flex-1">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map(
          (hour) => (
            <Picker.Item key={hour} value={String(hour).padStart(2, "0")}>
              {({ selected }) => (
                <span
                  className={cn(
                    "text-[18px] font-[500] text-[#D7DEE5]",
                    selected && "text-[#143967]"
                  )}
                >
                  {String(hour).padStart(2, "0")}
                </span>
              )}
            </Picker.Item>
          )
        )}
      </Picker.Column>

      <div className="self-center text-[18px] font-[500] text-[#143967]">:</div>

      {/* 분 */}
      <Picker.Column name="minute" className="!flex-1">
        {[...Array(60)]
          .map((_, index) => index)
          .map((minute) => (
            <Picker.Item key={minute} value={String(minute).padStart(2, "0")}>
              {({ selected }) => (
                <span
                  className={cn(
                    "text-[18px] font-[500] text-[#D7DEE5]",
                    selected && "text-[#143967]"
                  )}
                >
                  {String(minute).padStart(2, "0")}
                </span>
              )}
            </Picker.Item>
          ))}
      </Picker.Column>
      <div className="absolute z-[-9] w-full self-center px-[8px]">
        <div className="h-[30px] w-full rounded-[10px] bg-[#D7DEE5]"></div>
      </div>
    </Picker>
  );
};

export default DatePicker;
