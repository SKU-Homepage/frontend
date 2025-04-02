import S from "@/components/schedule";
import ScheduleBody from "@/components/schedule/ScheduleBody";
import TypeButton from "@/components/schedule/TypeButton";

export default function Schedule() {
  return (
    <S>
      <S.TypeBtnWrapper>
        <TypeButton />
      </S.TypeBtnWrapper>
      <ScheduleBody />
    </S>
  );
}
