import SignupForm from "@/app/_components/signup/SignupForm";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="p-2 w-[370px]">
        <div className="logo-box w-full h-[46px]">
          <Image
            src={"/logo2.png"}
            alt="piggyPlan-logo-img"
            width={350}
            height={50}
            className="w-full object-contain"
          />
        </div>
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
