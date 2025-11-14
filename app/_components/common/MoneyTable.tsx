import { TotalMoneyTypes } from "@/app/_types/moneyPlanTypes";
import ProgressBar from "./ProgressBar";

interface totalMoneyProps {
  totalMoney: TotalMoneyTypes[];
}

export default function MoneyTable({ totalMoney }: totalMoneyProps) {
  const total = totalMoney.reduce((acc, cur) => acc + cur.money, 0);

  return (
    <div className="rounded bg-white p-4 py-8 mt-2 shadow-sm">
      <ul className="flex flex-col gap-4">
        {totalMoney.map((item, idx) => {
          const percent = (item.money / total) * 100;
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
