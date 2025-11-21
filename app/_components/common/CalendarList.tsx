import { TotalMoneyTypes } from "@/app/_types/moneyPlanTypes";
import { getCategoryInfo } from "@/app/_utils/categoryMap";

interface MoneyListProps {
  menu: TotalMoneyTypes;
}

export default function CalendarList({ menu }: MoneyListProps) {
  const { icon: Icon, color } = getCategoryInfo(menu.category);
  return (
    <>
      <li
        className={`${color} text-white text-sm px-1 flex items-center rounded gap-1 font-bold`}
      >
        <Icon /> {menu.money.toLocaleString()}
      </li>
    </>
  );
}
