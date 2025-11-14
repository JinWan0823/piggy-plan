import ProgressBar from "./ProgressBar";

export default function MoneyTable() {
  const arr = [
    { menu: "취미", money: 330200 },
    { menu: "식비", money: 400333 },
    { menu: "여행", money: 120500 },
    { menu: "문화", money: 40500 },
    { menu: "기타", money: 20000 },
  ];

  const total = arr.reduce((acc, cur) => acc + cur.money, 0);

  return (
    <div className="rounded bg-white p-4 py-8 mt-2 shadow-sm">
      <ul className="flex flex-col gap-4">
        {arr.map((item, idx) => {
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
