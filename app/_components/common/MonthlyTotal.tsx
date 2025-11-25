"use client";
import { TotalYearTypes } from "@/app/_types/moneyPlanTypes";
import React, { SetStateAction, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function MonthlyTotal({
  setModal,
}: {
  setModal: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [nowYear, setNowYear] = useState(new Date().getFullYear());
  const [yearTotal, setYearTotal] = useState<TotalYearTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/money/total?year=${nowYear}`);
      const data = await res.json();
      setYearTotal(data.monthlyArray);
      console.log(data);
    };
    fetchData();
  }, [nowYear]);

  const handleYearPlus = () => {
    if (nowYear === new Date().getFullYear()) return;

    setNowYear((prev) => prev + 1);
  };

  return (
    <div className="fixed inset-0 min-w-screen min-h-screen bg-[#333333de] z-999 flex items-center justify-center">
      <div className="bg-white w-[95%] max-w-[620px] border-t-8 border-[#ff6b81] rounded p-4 relative">
        <div className="flex items-center justify-center gap-2">
          <button className="" onClick={() => setNowYear((prev) => prev - 1)}>
            <FaChevronLeft />
          </button>
          <span className="text-2xl font-bold text-[#ff6b81]">{nowYear}</span>
          <button
            disabled={nowYear === new Date().getFullYear()}
            className={`${
              nowYear === new Date().getFullYear() ? "text-gray-300" : ""
            }`}
            onClick={handleYearPlus}
          >
            <FaChevronRight />
          </button>
        </div>
        <ul className="grid grid-cols-4 gap-2 mt-4">
          {yearTotal.map((money, idx) => (
            <li
              key={idx}
              className="border-1 border-gray-300 rounded overflow-hidden"
            >
              <div className="text-center bg-[#ff6b81] text-white font-bold">
                {money.month}월
              </div>
              <p className="text-center font-bold py-4">
                <span>{money.total.toLocaleString()}</span>원
              </p>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setModal(false)}
          className="absolute right-4 top-4 w-[30px] h-[30px]
        bg-[#ff6b81] text-white text-xl rounded-full
        flex items-center justify-center"
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
}
