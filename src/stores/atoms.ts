import { SubmitInfoType } from "@/constants/userInfo";
import { WidgetProps } from "@/constants/widgets";
import { atom } from "jotai";

//Widget 전역상태

export const myWidgets = atom<WidgetProps[]>([]);

//알림목록 전역상태

export const willDelete = atom<boolean>(false);

//학과정보 전역상태

export const userInfo = atom<SubmitInfoType>({
  college: "",
  department: "",
  major: "",
  grade: "",
  studentNumber: 0,
});

export const isEditing = atom<boolean>(false);

export const scheduleType = atom<"todo" | "weekly">("todo");
