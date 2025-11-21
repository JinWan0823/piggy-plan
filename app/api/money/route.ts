import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/_lib/mongodb";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json(
      { message: "로그인 정보가 필요합니다." },
      { status: 400 }
    );
  }

  const { searchParams } = new URL(req.url);

  const year = Number(searchParams.get("year"));
  const month = Number(searchParams.get("month"));

  if (!year || !month) {
    return NextResponse.json(
      { message: "year, month 값이 필요합니다" },
      { status: 400 }
    );
  }
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 1);

  try {
    const client = await connectDB;
    const db = client.db("piggyplan");

    const userData = db
      .collection("moneyPlan")
      .find({
        username: session.user.username,
        date: { $gte: start, $lt: end },
      })
      .toArray();

    return NextResponse.json(userData, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(err) },
      { status: 500 }
    );
  }
}
