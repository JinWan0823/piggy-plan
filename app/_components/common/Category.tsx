"use client";

import { getCategoryInfo } from "@/app/_utils/categoryMap";

export default function Category({ menu }: { menu: string }) {
  const { icon: Icon, color } = getCategoryInfo(menu);
  return (
    <>
      <div
        className={`shrink-0 w-[32px] h-[32px] text-white
        flex items-center justify-center
        rounded-full ${color}`}
      >
        <Icon />
      </div>
    </>
  );
}
