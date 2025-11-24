"use client";
import { TotalMoneyTypes } from "@/app/_types/moneyPlanTypes";
import Category from "./Category";
import { LuTrash2 } from "react-icons/lu";
import { useState } from "react";
import { CgDanger } from "react-icons/cg";

interface MoneyListProps {
  menu: TotalMoneyTypes;
}

export default function MoneyList({ menu }: MoneyListProps) {
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <>
      <li className="w-full p-2 flex items-center bg-white rounded mt-2 font-bold border-1 border-gray-300 shadow-sm">
        <Category menu={menu.category} />
        <span className="w-[120px] text-center">
          {menu.money.toLocaleString()}원
        </span>
        <p className="w-full text-sm">{menu.content}</p>
        <span className="w-[120px] text-sm">
          {new Date(menu.date).toLocaleDateString("ko-KR")}
        </span>
        <button
          className="text-red-500 ml-2"
          onClick={() => setDeleteModal(true)}
        >
          <LuTrash2 />
        </button>
      </li>

      {deleteModal && (
        <div className="fixed inset-0 min-w-screen min-h-screen bg-[#333333de] z-999 flex items-center justify-center">
          <div className="bg-white w-[95%] max-w-[420px] border-t-8 border-[#ff6b81] rounded p-4 relative font-bold flex flex-col items-center">
            <CgDanger className="text-3xl text-[#ff6b81] " />
            <p className="text-center">정말 삭제하시겠습니까?</p>
            <div className="font-bold text-white flex items-center justify-center gap-2 w-full mt-4">
              <button
                className="bg-[#ff6b81] w-full rounded py-1"
                onClick={() => {}}
              >
                삭제
              </button>
              <button
                className="bg-gray-400 w-full rounded py-1"
                onClick={() => setDeleteModal(false)}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
