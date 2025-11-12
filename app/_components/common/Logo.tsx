import Image from "next/image";

export default function Logo() {
  return (
    <div className="logo-box w-full">
      <Image
        src={"/main-logo.png"}
        alt="piggyPlan-logo-img"
        width={350}
        height={50}
        className="w-full object-contain"
      />
    </div>
  );
}
