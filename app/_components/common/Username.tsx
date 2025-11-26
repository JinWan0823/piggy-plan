"use client";
import { useSession } from "next-auth/react";
import PigLoading from "./PigLoading";

export default function Username() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <PigLoading />;
  }

  return (
    <p className="font-bold">
      <span className="text-[#ff6b81]">{session?.user.nickname}</span>님
      어서오세요 👋
    </p>
  );
}
