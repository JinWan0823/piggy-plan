import { useMemo } from "react";
import { GiBlackBook, GiSchoolBag } from "react-icons/gi";
import {
  IoAmericanFootballOutline,
  IoGameControllerOutline,
} from "react-icons/io5";
import { MdFastfood } from "react-icons/md";

export default function ProgressBar({ menu }: { menu: string }) {
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
    <li className="w-full flex items-center gap-2">
      <div
        className={`shrink-0 w-[50px] h-[50px] text-white text-2xl
        flex items-center justify-center
        rounded-full ${category.color}`}
      >
        {category.icon}
      </div>
      <div
        className={`progress w-[60%] h-[32px] ${category.color} rounded-r-full flex items-center px-2 font-bold text-sm text-white`}
      >
        <p>60,300원</p>
      </div>
    </li>
  );
}
