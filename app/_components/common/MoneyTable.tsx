import { TotalMoneyTypes } from "@/app/_types/moneyPlanTypes";
import ProgressBar from "./ProgressBar";
import PigLoading from "./PigLoading";

interface totalMoneyProps {
  totalMoney: TotalMoneyTypes[];
  isLoading: boolean;
}

export default function MoneyTable({ totalMoney, isLoading }: totalMoneyProps) {
  const total = totalMoney.reduce((acc, cur) => acc + cur.money, 0);

  if (!isLoading) {
    return (
      <div className="rounded bg-white h-[380px] p-4 py-16 mt-2 border-1 border-gray-300 shadow-sm flex items-center justify-center">
        <PigLoading text="피기가 차트를 그리는 중" />
      </div>
    );
  }

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
