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
  const [totalMoney, setTotalMoney] = useState([]);
  const [moneyList, setMoneyList] = useState([]);

  const [formState, setFormState] = useState(false);

  const handlePrevMonth = () => {
    if (nowMonth <= 1) return;
    setNowMonth((prev) => prev - 1);
  };

  const handleNextMonth = () => {
    if (nowMonth >= 12) return;
    setNowMonth((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `/api/money/monthly?year=${nowYear}&month=${nowMonth}`
      );
      const data = await res.json();
      setTotalMoney(data.total);
      setMoneyList(data.userData);
    };

    fetchData();
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

      {formState && <MoneyForm setFormState={setFormState} />}

      {!menu ? (
        <ul>
          {moneyList.map((db, idx) => (
            <MoneyList key={idx} menu={db} />
          ))}
        </ul>
      ) : (
        <Calendar
          nowYear={nowYear}
          nowMonth={nowMonth}
          todayDate={todayDate}
          moneyList={moneyList}
        />
      )}
    </>
  );
}
