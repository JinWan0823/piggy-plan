import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="p-2 w-[370px]">
        <form action="" className="w-full flex flex-col gap-2">
          <div className="logo-box w-full h-[46px]">
            <Image
              src={"/logo2.png"}
              alt="piggyPlan-logo-img"
              width={350}
              height={50}
              className="w-full object-contain"
            />
          </div>
          <input
            type="text"
            className="border border-gray-300 p-1 rounded outline-[#ff6b81]"
            placeholder="아이디"
          />
          <input
            type="password"
            className="border border-gray-300 p-1 rounded outline-[#ff6b81]"
            placeholder="비밀번호"
          />
          <button
            type="submit"
            className="w-full text-center bg-[#FF6B81] font-bold text-[#fff] p-2 rounded-md"
          >
            로그인
          </button>
        </form>
        <Link
          href={"/signup"}
          className="px-1 text-sm text-center text-gray-300 mt-0"
        >
          회원이 아니신가요? 회원가입
        </Link>
      </div>
    </div>
  );
}
