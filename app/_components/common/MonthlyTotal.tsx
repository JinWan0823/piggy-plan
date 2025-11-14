"use client";
import React, { SetStateAction, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function MonthlyTotal({
  setModal,
}: {
  setModal: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [nowYear, setNowYear] = useState(new Date().getFullYear());

  useEffect(() => {}, [nowYear]);

  const arr = Array.from({ length: 12 });

  return (
    <div className="fixed inset-0 min-w-screen min-h-screen bg-[#333333de] z-999 flex items-center justify-center">
      <div className="bg-white w-[95%] max-w-[620px] border-t-8 border-[#ff6b81] rounded p-4 relative">
        <div className="flex items-center justify-center gap-2">
          <button className="">
            <FaChevronLeft />
          </button>
          <span className="text-2xl font-bold text-[#ff6b81]">{nowYear}</span>
          <button className="">
            <FaChevronRight />
          </button>
        </div>
        <ul className="grid grid-cols-4 gap-2 mt-4">
          {arr.map((_, idx) => (
            <li
              key={idx}
              className="border-1 border-gray-300 rounded overflow-hidden"
            >
              <div className="text-center bg-[#ff6b81] text-white font-bold">
                {idx + 1}월
              </div>
              <p className="text-center font-bold py-4">
                <span>420,000</span>원
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
