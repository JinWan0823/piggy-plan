import Logo from "./_components/common/Logo";
import MainWrap from "./_components/common/MainWrap";
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <div className="w-[900px] mx-auto">
        <header className="p-2 flex items-center justify-between border-b-2 border-[#ff6b81]">
          <div className="w-[240px]">
            <Logo />
          </div>
          <p className="">
            <span className="font-bold text-[#ff6b81]">듀두듀듀</span>님
            어서오세요 👋
            <button className="bg-[#ff6b81] text-sm text-white p-1 px-5 rounded-full border-2 border-white ml-4">
              통계
            </button>
          </p>
        </header>

        <MainWrap />
      </div>
    </div>
  );
}
