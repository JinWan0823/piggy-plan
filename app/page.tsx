import Logo from "./_components/common/Logo";
import TabMenu from "./_components/common/TabMenu";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <div className="w-[900px] h-[600px] mx-auto">
        <header className="p-2 flex items-center justify-between border-b-2 border-[#dfdfdf]">
          <div className="w-[240px]">
            <Logo />
          </div>
          <p className="font-bold">
            <span className="point-color">듀두듀듀</span>님 어서오세요!
          </p>
        </header>

        <div className="rounded bg-gray-300 p-4 mt-2 h-[400px]"></div>

        <div className="flex items-center justify-between my-2">
          <h2 className="font-bold text-2xl">11월 가계부</h2>
          <TabMenu />
        </div>
      </div>
    </div>
  );
}
