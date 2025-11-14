import { getCategoryInfo } from "@/app/_utils/categoryMap";

export default function CalendarList({ menu }: { menu: string }) {
  const { icon: Icon, color } = getCategoryInfo(menu);
  return (
    <>
      <li
        className={`${color} text-white text-sm px-1 flex items-center rounded gap-1 font-bold`}
      >
        <Icon /> 60,300
      </li>
    </>
  );
}
