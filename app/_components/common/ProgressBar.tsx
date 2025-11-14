import { getCategoryInfo } from "@/app/_utils/categoryMap";

export default function ProgressBar({ menu }: { menu: string }) {
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
      <div
        className={`progress w-[60%] h-[32px] ${color} rounded-r-full flex items-center px-2 font-bold text-sm text-white`}
      >
        <p>60,300원</p>
      </div>
    </li>
  );
}
