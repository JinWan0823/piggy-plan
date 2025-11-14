"use client";
import { useState } from "react";
import MoneyTable from "./MoneyTable";
import TabMenu from "./TabMenu";
import MoneyList from "./MoneyList";
import Calendar from "./Calendar";

export default function MainWrap() {
  const today = new Date();
  const [nowYear, setNowYear] = useState(today.getFullYear());
  const [nowMonth, setNowMonth] = useState(today.getMonth() + 1);
  const [todayDate, setTodayDate] = useState(today.getDate());

  return (
    <>
      <MoneyTable />
      <div className="flex items-center justify-between my-2">
        <h2 className="font-bold text-2xl">{nowMonth}월 가계부</h2>
        <TabMenu />
      </div>
      {/* <ul>
        <MoneyList menu={"식비"} />
        <MoneyList menu={"취미"} />
        <MoneyList menu={"문화"} />
        <MoneyList menu={"여행"} />
        <MoneyList menu={"기타"} />
      </ul> */}
      <Calendar nowYear={nowYear} nowMonth={nowMonth} todayDate={todayDate} />
    </>
  );
}
