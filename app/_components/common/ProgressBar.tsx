import { getCategoryInfo } from "@/app/_utils/categoryMap";
import { motion } from "framer-motion";

export default function ProgressBar({
  menu,
  money,
  percent,
}: {
  menu: string;
  money: number;
  percent: number;
}) {
  const { icon: Icon, color } = getCategoryInfo(menu);
  return (
    <li className="w-full flex items-center gap-2">
      <div
        className={`shrink-0 w-[50px] h-[50px] text-white text-2xl
        flex items-center justify-center
        rounded-full ${color}`}
      >
        <Icon />
      </div>
      <motion.div
        className={`progress h-[32px] ${color} rounded-xl flex items-center px-2 font-bold text-sm text-white`}
        initial={{
          width: 0,
        }}
        animate={{
          width: `${percent}%`,
        }}
        transition={{
          ease: "easeIn",
          duration: 1.4,
        }}
      ></motion.div>
      <p className="font-bold text-sm">{money.toLocaleString()}</p>
    </li>
  );
}
