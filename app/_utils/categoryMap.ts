import { MdFastfood } from "react-icons/md";
import {
  IoAmericanFootballOutline,
  IoGameControllerOutline,
} from "react-icons/io5";
import { GiBlackBook, GiSchoolBag } from "react-icons/gi";

export const categoryMap = {
  식비: { icon: MdFastfood, color: "bg-red-400" },
  취미: { icon: IoAmericanFootballOutline, color: "bg-green-400" },
  문화: { icon: GiBlackBook, color: "bg-yellow-400" },
  여행: { icon: GiSchoolBag, color: "bg-blue-400" },
  기타: { icon: IoGameControllerOutline, color: "bg-indigo-400" },
} as const;

export type CategoryKey = keyof typeof categoryMap;

export const getCategoryInfo = (menu: string) =>
  categoryMap[menu as CategoryKey] ?? categoryMap["기타"];
