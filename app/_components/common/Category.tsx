"use client";

import { useMemo } from "react";
import { GiBlackBook, GiSchoolBag } from "react-icons/gi";
import {
  IoAmericanFootballOutline,
  IoGameControllerOutline,
} from "react-icons/io5";
import { MdFastfood } from "react-icons/md";

export default function Category({ menu }: { menu: string }) {
  const category = useMemo(() => {
    switch (menu) {
      case "식비":
        return { icon: <MdFastfood />, color: "bg-red-400" };
      case "취미":
        return { icon: <IoAmericanFootballOutline />, color: "bg-green-400" };
      case "문화":
        return { icon: <GiBlackBook />, color: "bg-yellow-400" };
      case "여행":
        return { icon: <GiSchoolBag />, color: "bg-blue-400" };
      default:
        return { icon: <IoGameControllerOutline />, color: "bg-indigo-400" };
    }
  }, [menu]);

  return (
    <>
      <div
        className={`shrink-0 w-[32px] h-[32px] text-white
        flex items-center justify-center
        rounded-full ${category.color}`}
      >
        {category.icon}
      </div>
    </>
  );
}
