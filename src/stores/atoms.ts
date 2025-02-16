import { WidgetProps } from "@/constants/widgets";
import { atom } from "jotai";

//Widget 전역상태

export const myWidgets = atom<WidgetProps[]>([]);

//알림목록 전역상태

export const willDelete = atom<boolean>(false);
