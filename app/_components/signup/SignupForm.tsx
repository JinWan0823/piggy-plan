"use client";
import { useState } from "react";

export default function SignupForm() {
  const [data, setData] = useState({ id: "", name: "", pwd: "", pwdChk: "" });

  const [errors, setErrors] = useState({
    id: "",
    name: "",
    pwd: "",
    pwdChk: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      id: data.id ? "" : "* 아이디를 입력해주세요.",
      name: data.name ? "" : "* 이름을 입력해주세요.",
      pwd: data.pwd
        ? data.pwd.length < 8
          ? "* 8글자 이상 입력해주세요."
          : ""
        : "비밀번호를 입력해주세요.",
      pwdChk: data.pwdChk
        ? data.pwd !== data.pwdChk
          ? "* 비밀번호가 일치하지 않습니다."
          : ""
        : "비밀번호 확인해주세요.",
    };
    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((v) => v !== "");
    if (hasError) return;

    try {
      const user = {
        username: data.id,
        nickname: data.name,
        password: data.pwd,
      };

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const json = await res.json();

      if (!res.ok) {
        // 서버 오류 처리
        alert(json.message || "회원가입 실패");
        return;
      }

      // 성공 처리
      alert("회원가입 성공!");
      // router.push("/login") 등 이동
    } catch (err) {
      alert("서버와 연결할 수 없습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-2">
      <div className="w-full">
        <p className="text-sm">
          ID <span className="text-red-400">{errors.id}</span>
        </p>
        <input
          type="text"
          className="w-full border border-gray-300 p-1 rounded outline-[#ff6b81]"
          placeholder="아이디"
          value={data.id}
          onChange={(e) => setData({ ...data, id: e.target.value })}
        />
      </div>
      <div className="w-full">
        <p className="text-sm">
          이름 <span className="text-red-400">{errors.name}</span>
        </p>
        <input
          type="text"
          className="w-full border border-gray-300 p-1 rounded outline-[#ff6b81]"
          placeholder="이름"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </div>
      <div className="w-full">
        <p className="text-sm">
          비밀번호 <span className="text-red-400">{errors.pwd}</span>
        </p>
        <input
          type="password"
          className="w-full border border-gray-300 p-1 rounded outline-[#ff6b81]"
          placeholder="비밀번호"
          value={data.pwd}
          onChange={(e) => setData({ ...data, pwd: e.target.value })}
        />
      </div>
      <div className="w-full">
        <p className="text-sm">
          비밀번호 확인 <span className="text-red-400">{errors.pwdChk}</span>
        </p>
        <input
          type="password"
          className="w-full border border-gray-300 p-1 rounded outline-[#ff6b81]"
          placeholder="비밀번호 확인"
          value={data.pwdChk}
          onChange={(e) => setData({ ...data, pwdChk: e.target.value })}
        />
      </div>
      <button
        type="submit"
        className="w-full text-center bg-[#FF6B81] font-bold text-[#fff] p-2 rounded-md"
      >
        회원가입
      </button>
    </form>
  );
}
