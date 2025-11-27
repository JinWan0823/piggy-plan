"use client";
import { motion } from "framer-motion";
import { useActionState, useEffect, useState } from "react";
import Logo from "../common/Logo";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [success, setSuccess] = useState(false);
  const [rememberId, setRememberId] = useState(() =>
    typeof window !== "undefined" && localStorage.getItem("savedId")
      ? true
      : false
  );

  const [savedId, setSavedId] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("savedId") || "" : ""
  );
  const router = useRouter();

  const [data, submitAction, isPending] = useActionState(handleLogin, null);

  async function handleLogin(_prevState: unknown, formData: FormData) {
    const username = formData.get("username");
    const password = formData.get("password");
    const autoLogin = formData.get("autologin");
    const savedId = formData.get("savedId");

    if (savedId) {
      localStorage.setItem("savedId", String(username));
    } else {
      localStorage.removeItem("savedId");
    }

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
      autoLogin,
    });

    if (res?.error) {
      return alert(res.error);
    }
    setSuccess(true);

    setTimeout(() => router.push("/"), 500);
  }

  return (
    <>
      <motion.form
        action={submitAction}
        initial={{ opacity: 0, y: 10 }}
        animate={success ? { opacity: 0, scale: 0.95 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full flex flex-col gap-2"
      >
        <Logo />
        <input
          type="text"
          name="username"
          value={savedId}
          onChange={(e) => setSavedId(e.target.value)}
          className="border border-gray-300 p-1 rounded outline-[#ff6b81]"
          placeholder="아이디"
        />
        <input
          type="password"
          name="password"
          className="border border-gray-300 p-1 rounded outline-[#ff6b81]"
          placeholder="비밀번호"
        />
        <button
          type="submit"
          disabled={isPending}
          className="w-full text-center bg-[#FF6B81] font-bold text-[#fff] p-2 rounded-md disabled:opacity-70"
        >
          {isPending ? "로그인 중..." : "로그인"}
        </button>
        <div className="flex gap-2 mt-1">
          <div className="text-[#aaa] text-sm flex items-center gap-1">
            <input
              type="checkbox"
              id="save-id"
              name="savedId"
              onChange={() => setRememberId((prev) => !prev)}
              checked={rememberId}
            />
            <label htmlFor="save-id" className="text-sm ml-1 text-gray-400">
              아이디 저장
            </label>
          </div>
          <div className="text-[#aaa] text-sm flex items-center gap-1">
            <input type="checkbox" name="autologin" id="save-login" />
            <label htmlFor="save-login" className="text-sm ml-1 text-gray-400">
              자동 로그인
            </label>
          </div>
        </div>
      </motion.form>
    </>
  );
}
