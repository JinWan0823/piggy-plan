export default function Calendar() {
  const dayArr = Array.from({ length: 31 });
  return (
    <>
      <div>
        <ul className="grid grid-cols-7 gap-1 mt-2 text-center text-white font-bold">
          <li className="bg-[#ff6b81] rounded">SUN</li>
          <li className="bg-[#ff6b81] rounded">MON</li>
          <li className="bg-[#ff6b81] rounded">TUE</li>
          <li className="bg-[#ff6b81] rounded">WEN</li>
          <li className="bg-[#ff6b81] rounded">TUR</li>
          <li className="bg-[#ff6b81] rounded">FRI</li>
          <li className="bg-[#ff6b81] rounded">SAT</li>
        </ul>
        <ul className="grid grid-cols-7 gap-1 mt-1">
          {dayArr.map((i, idx) => (
            <li
              key={idx}
              className="border-1 border-gray-200 h-[120px] relative p-1 bg-white"
            >
              <span
                className={`
                inline-flex items-center justify-center 
                w-[24px] h-[24px] text-sm rounded-full text-gray-500
                ${idx === 11 && "border-2 border-[#ff6b81]"}
                `}
              >
                {idx + 1}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
