import { connectDB } from "@/app/_lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";

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

  if (!year) {
    return NextResponse.json(
      { message: "year 값이 필요합니다" },
      { status: 400 }
    );
  }

  try {
    const client = await connectDB;
    const db = client.db("piggyplan");

    const rawResult = await db
      .collection("moneyPlan")
      .aggregate([
        {
          $match: {
            username: session.user.username,
            date: {
              $gte: new Date(`${year}-01-01T00:00:00.000Z`),
              $lte: new Date(`${year}-12-31T23:59:59.999Z`),
            },
          },
        },
        {
          $group: {
            _id: { $month: "$date" },
            total: { $sum: "$money" },
          },
        },
        {
          $project: {
            _id: 0,
            month: "$_id",
            total: 1,
          },
        },
      ])
      .toArray();

    const monthlyTotals: Record<number, number> = {};
    for (let i = 1; i <= 12; i++) {
      monthlyTotals[i] = 0;
    }

    rawResult.forEach((item) => {
      monthlyTotals[item.month] = item.total;
    });

    const monthlyArray = Object.entries(monthlyTotals).map(
      ([month, total]) => ({
        month: Number(month),
        total,
      })
    );

    return NextResponse.json({ year, monthlyArray }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "서버 에러", error: String(err) },
      { status: 500 }
    );
  }
}
