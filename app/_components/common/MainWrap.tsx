"use client";
import { useEffect, useState } from "react";
import MoneyTable from "./MoneyTable";
import TabMenu from "./TabMenu";
import MoneyList from "./MoneyList";
import Calendar from "./Calendar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MoneyForm from "./MoneyForm";

export default function MainWrap() {
  const today = new Date();
  const [nowYear, setNowYear] = useState(today.getFullYear());
  const [nowMonth, setNowMonth] = useState(today.getMonth() + 1);
  const [todayDate, setTodayDate] = useState(today.getDate());

  const [menu, setMenu] = useState(false);

  const [formState, setFormState] = useState(false);

  //api연동 후 state로 변경
  const totalMoney = [
    { menu: "취미", money: 330200 },
    { menu: "식비", money: 400333 },
    { menu: "여행", money: 120500 },
    { menu: "문화", money: 40500 },
    { menu: "기타", money: 20000 },
  ];

  const handlePrevMonth = () => {
    if (nowMonth <= 1) return;
    setNowMonth((prev) => prev - 1);
  };

  const handleNextMonth = () => {
    if (nowMonth >= 12) return;
    setNowMonth((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("데이터 요청");
  }, [nowMonth]);

  return (
    <>
      <MoneyTable totalMoney={totalMoney} />
      <div className="flex items-center justify-between my-2">
        <div className="flex items-stratch rounded overflow-hidden border-1 border-gray-200">
          <button
            onClick={handlePrevMonth}
            className="w-[22px] bg-[#ff6b81] text-white flex justify-center items-center"
          >
            <FaChevronLeft />
          </button>
          <p className="font-bold text-xl p-1 w-[60px] text-center">
            {nowMonth}월
          </p>
          <button
            onClick={handleNextMonth}
            className="w-[22px] bg-[#ff6b81] text-white flex justify-center items-center"
          >
            <FaChevronRight />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setFormState(true)}
            className="bg-[#ff6b81] text-sm text-white font-bold p-1 px-5 rounded-full border-2 border-white ml-4"
          >
            가계부 작성하기
          </button>
          <TabMenu menu={menu} setMenu={setMenu} />
        </div>
      </div>

      {formState && <MoneyForm />}

      {!menu ? (
        <ul>
          <MoneyList menu={"식비"} />
          <MoneyList menu={"취미"} />
          <MoneyList menu={"문화"} />
          <MoneyList menu={"여행"} />
          <MoneyList menu={"기타"} />
        </ul>
      ) : (
        <Calendar nowYear={nowYear} nowMonth={nowMonth} todayDate={todayDate} />
      )}
    </>
  );
}
