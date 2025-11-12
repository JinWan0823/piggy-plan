import { MdFastfood } from "react-icons/md";

export default function Category({ menu }: { menu: string }) {
  return (
    <>
      <div className="category w-[32px] h-[32px] rounded-full bg-indigo-400 flex items-center justify-center text-white shrink-0">
        <MdFastfood />
      </div>
    </>
  );
}
