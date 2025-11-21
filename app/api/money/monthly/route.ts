import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/_lib/mongodb";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json(
      { message: "로그인이 필요합니다." },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(req.url);

  const year = Number(searchParams.get("year"));
  const month = Number(searchParams.get("month")); // 1~12

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

    const result = await db
      .collection("moneyPlan")
      .aggregate([
        {
          $match: {
            username: session.user.username,
            date: {
              $gte: start,
              $lt: end,
            },
          },
        },
        {
          $group: {
            _id: "$category",
            total: { $sum: "$money" },
          },
        },
        {
          $project: {
            _id: 0,
            menu: "$_id",
            money: "$total",
          },
        },
      ])
      .toArray();

    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "서버 에러", error: String(err) },
      { status: 500 }
    );
  }
}
