"use client";
import { useState } from "react";
import { IoIosList } from "react-icons/io";
import { IoCalendarClearOutline } from "react-icons/io5";

export default function TabMenu() {
  const [listMenu, setListMenu] = useState(false);

  const handleTabMenu = () => {
    setListMenu((prev) => !prev);
  };

  return (
    <>
      <div
        className={`w-[60px] h-[30px] relative inset-shadow-sm inset-shadow-[#ff6b81] rounded-full cursor-pointer overflow-hidden
             "bg-[#dfdfdf]"
          `}
        onClick={handleTabMenu}
      >
        <div
          className={`w-[28px] h-[28px] rounded-full absolute top-[1px] left-[1px] bg-[#ff6b81] transition-transform duration-300 shadow-xl ${
            listMenu ? "translate-x-[30px]" : "translate-x-0"
          }`}
        />
        <div className="flex justify-between p-[1px] items-center text-lg text-[#ff6b81]">
          <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center">
            <IoCalendarClearOutline />
          </div>
          <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center">
            <IoIosList />
          </div>
        </div>
      </div>
    </>
  );
}
