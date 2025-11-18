import LoginForm from "@/app/_components/signup/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="p-2 w-[370px]">
        <LoginForm />
        <Link
          href={"/signup"}
          className="text-sm text-center text-gray-400 mt-0"
        >
          회원이 아니신가요? 회원가입
        </Link>
      </div>
    </div>
  );
}
