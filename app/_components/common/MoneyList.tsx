import { TotalMoneyTypes } from "@/app/_types/moneyPlanTypes";
import Category from "./Category";

interface MoneyListProps {
  menu: TotalMoneyTypes;
}

export default function MoneyList({ menu }: MoneyListProps) {
  return (
    <li className="w-full p-2 flex items-center bg-gray-200 rounded mt-2 font-bold shadow-sm">
      <Category menu={menu.category} />
      <span className="w-[120px] text-center">
        {menu.money.toLocaleString()}원
      </span>
      <p className="w-full text-sm">{menu.content}</p>
      <span className="w-[120px] text-sm">
        {new Date(menu.date).toLocaleDateString("ko-KR")}
      </span>
    </li>
  );
}
