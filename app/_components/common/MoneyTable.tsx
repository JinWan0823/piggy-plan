import ProgressBar from "./ProgressBar";

export default function MoneyTable() {
  return (
    <div className="rounded bg-white p-4 py-8 mt-2 shadow-sm">
      <ul className="flex flex-col gap-4">
        <ProgressBar menu="취미" />
        <ProgressBar menu="식비" />
        <ProgressBar menu="여행" />
        <ProgressBar menu="문화" />
        <ProgressBar menu="기타" />
      </ul>
    </div>
  );
}
