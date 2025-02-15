import { atom } from "jotai";

//Widget 전역상태
const storedData = localStorage.getItem("selectedWidgets");
const widgets = storedData ? JSON.parse(storedData) : [];

export const myWidgets = atom(widgets);
