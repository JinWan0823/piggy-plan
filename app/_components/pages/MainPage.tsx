"use client";
import { useState } from "react";
import Logo from "../common/Logo";
import MainWrap from "../common/MainWrap";
import MonthlyTotal from "../common/MonthlyTotal";

export default function MainPage() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="w-[900px] mx-auto">
        <header className="p-2 flex items-center justify-between border-b-2 border-[#ff6b81]">
          <div className="w-[240px]">
            <Logo />
          </div>
          <p className="">
            <span className="font-bold text-[#ff6b81]">듀두듀듀</span>님
            어서오세요 👋
            <button
              onClick={() => setModal(true)}
              className="bg-[#ff6b81] text-sm text-white p-1 px-5 rounded-full border-2 border-white ml-4"
            >
              통계
            </button>
          </p>
        </header>
        {modal && <MonthlyTotal setModal={setModal} />}
        <MainWrap />
      </div>
    </>
  );
}
