"use client";
import { SetStateAction } from "react";
import { IoIosList } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

export default function TabMenu({
  menu,
  setMenu,
}: {
  menu: boolean;
  setMenu: React.Dispatch<SetStateAction<boolean>>;
}) {
  const handleTabMenu = () => {
    setMenu((prev) => !prev);
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
            menu ? "translate-x-[30px]" : "translate-x-0"
          }`}
        />
        <div className="flex justify-between p-[1px] items-center text-lg text-[#ff6b81]">
          <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center">
            <IoCalendarOutline />
          </div>
          <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center">
            <IoIosList />
          </div>
        </div>
      </div>
    </>
  );
}
