"use client";
import { createMoney } from "@/app/_actions/money";
import React, { SetStateAction, useActionState, useState } from "react";
import { IoClose } from "react-icons/io5";

function FormRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-1 p-1 px-2 rounded border border-gray-300">
      <span className="font-bold w-[60px] shrink-0">{label}</span>
      {children}
    </div>
  );
}

export default function MoneyForm({
  setFormState,
}: {
  setFormState: React.Dispatch<SetStateAction<boolean>>;
}) {
  const years = [2025, 2024, 2023, 2022, 2021, 2020];
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [day, setDay] = useState(new Date().getDate());

  const [category, setCategory] = useState("식비");
  const [money, setMoney] = useState("");
  const [content, setContent] = useState("");

  const [state, action] = useActionState(createMoney, null);

  return (
    <div className="fixed inset-0 bg-[#333333de] z-[999] flex items-center justify-center">
      <form
        action={action}
        className="bg-white w-[95%] max-w-[420px] border-t-8 border-[#ff6b81] rounded p-4 flex flex-col gap-3 text-sm"
      >
        <button
          onClick={() => setFormState(false)}
          className="w-[30px] h-[30px]
                bg-[#ff6b81] text-white text-xl rounded-full
                flex items-center justify-center"
        >
          <IoClose />
        </button>
        <FormRow label="카테고리">
          <select
            className="w-full"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="식비">식비</option>
            <option value="문화">문화</option>
            <option value="여행">여행</option>
            <option value="취미">취미</option>
            <option value="기타">기타</option>
          </select>
        </FormRow>

        <FormRow label="날짜">
          <div className="flex gap-1 w-full">
            <select
              className="w-full"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}년
                </option>
              ))}
            </select>

            <select
              className="w-full"
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
            >
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}월
                </option>
              ))}
            </select>

            <select
              className="w-full"
              value={day}
              onChange={(e) => setDay(Number(e.target.value))}
            >
              {days.map((d) => (
                <option key={d} value={d}>
                  {d}일
                </option>
              ))}
            </select>
          </div>
        </FormRow>

        <input type="hidden" name="date" value={`${year}-${month}-${day}`} />

        <FormRow label="금액">
          <input
            type="text"
            placeholder="금액을 입력해주세요."
            className="p-1 w-full"
            name="money"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
          />
        </FormRow>

        <FormRow label="내용">
          <textarea
            placeholder="내용을 입력해주세요."
            className="border border-gray-200 p-1 w-full h-[80px]"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FormRow>

        <button className="w-full py-2 rounded bg-[#ff6b81] font-bold text-white">
          저장하기
        </button>
        {state?.message && (
          <p className={state.success ? "text-green-500" : "text-red-500"}>
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
