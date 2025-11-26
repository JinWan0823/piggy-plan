import { PiggyBank } from "lucide-react";

export default function PigLoading({ text }: { text?: string }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-[30px] h-[30px] rounded-full border-4 border-pink-200 border-t-[#ff6b81] animate-spin" />

          <PiggyBank
            size={20}
            strokeWidth={2.5}
            className="text-[#ff6b81] animate-bounce"
          />
        </div>
        <p className="text-gray-400 font-bold">{text}</p>
      </div>
    </>
  );
}
