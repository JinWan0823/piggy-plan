import CalendarList from "./CalendarList";

export default function Calendar({
  nowYear,
  nowMonth,
  todayDate,
}: {
  nowYear: number;
  nowMonth: number;
  todayDate: number;
}) {
  const lastDay = new Date(nowYear, nowMonth, 0).getDate();
  const startDay = new Date(nowYear, nowMonth - 1, 1).getDay();

  const dayArr = Array.from({ length: startDay + lastDay }, (_, i) => {
    if (i < startDay) return null;
    return i - startDay + 1;
  });

  return (
    <>
      <div>
        <ul className="grid grid-cols-7 gap-1 mt-2 text-center text-white font-bold">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
            <li key={d} className="bg-[#ff6b81] rounded">
              {d}
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-7 gap-1 mt-1">
          {dayArr.map((day, idx) => (
            <li
              key={idx}
              className={`border border-gray-200 relative p-1 ${
                day ? "bg-white" : "bg-[#fbfbfb]"
              }`}
            >
              {day && (
                <span
                  className={`inline-flex items-center justify-center 
                w-[24px] h-[24px] text-sm rounded-full
                ${
                  day === todayDate && nowMonth === new Date().getMonth() + 1
                    ? "border-2 border-[#ff6b81]"
                    : "text-gray-500"
                }`}
                >
                  {day}
                </span>
              )}

              <ul className="flex flex-col gap-1 mt-1 h-[70px] overflow-y-scroll scrollbar pr-1">
                <CalendarList menu={"식비"} />
                <CalendarList menu={"문화"} />
                <CalendarList menu={"문화"} />
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
