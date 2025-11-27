"use client";
import { useState } from "react";
import Logo from "../common/Logo";
import MainWrap from "../common/MainWrap";
import MonthlyTotal from "../common/MonthlyTotal";
import { signOut } from "next-auth/react";
import Username from "../common/Username";
import { motion } from "framer-motion";

export default function MainPage() {
  const [modal, setModal] = useState(false);

  const handleLogout = async () => {
    await signOut({ redirect: true });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-[900px] mx-auto"
      >
        <header className="p-2 flex items-center justify-between border-b-2 border-[#ff6b81]">
          <div className="w-[240px]">
            <Logo />
          </div>
          <div className="flex items-center">
            <Username />
            <button
              onClick={() => setModal(true)}
              className="bg-[#ff6b81] text-sm text-white p-1 px-5 rounded-full border-2 border-white ml-4"
            >
              통계
            </button>
            <button
              onClick={handleLogout}
              className="bg-[#ff6b81] text-sm text-white p-1 px-5 rounded-full border-2 border-white"
            >
              로그아웃
            </button>
          </div>
        </header>
        {modal && <MonthlyTotal setModal={setModal} />}
        <MainWrap />
      </motion.div>
    </>
  );
}
