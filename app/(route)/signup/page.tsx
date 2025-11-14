import Logo from "@/app/_components/common/Logo";
import SignupForm from "@/app/_components/signup/SignupForm";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="p-2 w-[370px]">
        <Logo />
        <SignupForm />
        <Link
          href={"/login"}
          className="px-1 text-sm text-center text-gray-300 mt-0"
        >
          이미 회원이신가요? 로그인
        </Link>
      </div>
    </div>
  );
}
