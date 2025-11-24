import { TotalMoneyTypes } from "@/app/_types/moneyPlanTypes";
import ProgressBar from "./ProgressBar";

interface totalMoneyProps {
  totalMoney: TotalMoneyTypes[];
}

export default function MoneyTable({ totalMoney }: totalMoneyProps) {
  const total = totalMoney.reduce((acc, cur) => acc + cur.money, 0);

  return (
    <div className="rounded bg-white p-4 py-8 mt-2 border-1 border-gray-300 shadow-sm">
      <ul className="flex flex-col gap-4">
        {totalMoney.map((item, idx) => {
          const percent = total > 0 ? (item.money / total) * 100 : 0;
          return (
            <ProgressBar
              key={idx}
              menu={item.menu}
              money={item.money}
              percent={percent}
            />
          );
        })}
      </ul>
    </div>
  );
}
