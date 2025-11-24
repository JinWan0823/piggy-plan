"use client";
import { useSession } from "next-auth/react";

export default function Username() {
  const { data: session } = useSession();

  return (
    <span className="font-bold text-[#ff6b81]">{session?.user.nickname}</span>
  );
}
