import { LuFileQuestion } from "react-icons/lu";

export default function NoneList() {
  return (
    <>
      <div
        className="w-full py-40 flex flex-col items-center justify-center border-1
        rounded border-gray-300 bg-white shadow-sm"
      >
        <LuFileQuestion className="text-6xl text-[#ff6b81]" />
        <p className="text-gray-400 font-bold">이번 달 사용내역이 없습니다!</p>
      </div>
    </>
  );
}
