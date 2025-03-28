import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function Timetable() {
  return (
    <div className="mt-[25px]">
      <span className="mb-[11px] text-[12px] font-semibold text-[#143967]">2025년 1학기</span>
      <FullCalendar
        headerToolbar={false}
        contentHeight="auto"
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        events={[
          {
            title: "근로",
            location: "은주관 505",
            daysOfWeek: [1], // 화요일에 표시
            startTime: "09:00:00",
            endTime: "14:00:00",
          },
          {
            title: "근로",
            location: "은주관 505",
            daysOfWeek: [1], // 화요일에 표시
            startTime: "14:00:00",
            endTime: "15:00:00",
          },
        ]}
        slotMinTime="09:00:00"
        slotMaxTime="21:00:00"
        allDaySlot={false}
        hiddenDays={[0, 6]} // 월~금만 표시
        slotDuration="01:00:00" // 슬롯 간격을 1시간으로 설정
        dayHeaderFormat={{ weekday: "short" }} // 요일 축을 '월'로 표시
        slotLabelFormat={{ hour: "numeric", hour12: false }} // 시간 축을 '9'로 표시
        locale="ko" // 한글 로케일 적용
        eventTimeFormat={undefined} // 이벤트에서 시간 표시 제거
        eventContent={(arg) => (
          <div className="p-[7px]">
            <div className="text-[9.4px] font-bold">{arg.event.title}</div>
            <div className="text-[7.8px]">{arg.event.extendedProps.location}</div>
          </div>
        )}
        dayHeaderContent={(arg) => (
          <div className="flex items-center text-center text-[9px] font-normal text-[#143967]">
            {arg.text}
          </div>
        )}
        slotLabelContent={(arg) => (
          <div className="flex h-[42px] items-center text-[9px] text-[#143967]">{arg.text}</div>
        )}
      />
    </div>
  );
}
