import Logo from "./_components/common/Logo";
import MainWrap from "./_components/common/MainWrap";
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

        <MainWrap />
      </div>
    </div>
  );
}
