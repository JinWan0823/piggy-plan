import Category from "./Category";

export default function MoneyList({ menu }: { menu: string }) {
  return (
    <li className="w-full p-2 flex items-center bg-gray-200 rounded mt-2 font-bold shadow-sm">
      <Category menu={menu} />
      <span className="w-[120px] text-center">60,300원</span>
      <p className="w-full text-sm">마트 장보기</p>
      <span className="w-[100px] text-sm">2025-11-12</span>
    </li>
  );
}
