import MainPage from "./_components/pages/MainPage";
import { checkUser } from "./_lib/checkUser";
export default async function Home() {
  await checkUser();
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <MainPage />
    </div>
  );
}
