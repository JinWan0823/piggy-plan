"use client";
import { useActionState, useState } from "react";
import Logo from "../common/Logo";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [rememberId, setRememberId] = useState(false);
  const router = useRouter();

  const [data, submitAction, isPending] = useActionState(handleLogin, null);

  async function handleLogin(_prevState: unknown, formData: FormData) {
    const username = formData.get("username");
    const password = formData.get("password");
    const autoLogin = "false";

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
      autoLogin,
    });

    if (res?.error) {
      return alert(res.error);
    }

    alert("로그인성공");
    router.push("/");
  }

  return (
    <>
      <form action={submitAction} className="w-full flex flex-col gap-2">
        <Logo />
        <input
          type="text"
          name="username"
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
          className="w-full text-center bg-[#FF6B81] font-bold text-[#fff] p-2 rounded-md"
        >
          로그인
        </button>
        <div className="flex gap-2 mt-1">
          <div className="text-[#aaa] text-sm flex items-center gap-1">
            <input
              type="checkbox"
              id="save-id"
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
      </form>
    </>
  );
}
