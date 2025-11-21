import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/_lib/mongodb";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json(
      { message: "로그인 정보가 필요합니다." },
      { status: 400 }
    );
  }

  try {
    const client = await connectDB;
    const db = client.db("piggyplan");

    const userData = db
      .collection("moneyPlan")
      .find({ username: session.user.username })
      .toArray();

    return NextResponse.json(userData, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(err) },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json(
      { message: "로그인 정보가 필요합니다." },
      { status: 400 }
    );
  }

  try {
    const body = await req.json();
    const { category, date, money, content } = body;

    const client = await connectDB;
    const db = client.db("piggyplan");

    const newData = {
      username: session.user.username,
      category,
      date: new Date(date),
      money: Number(money),
      content,
      createdAt: new Date(),
    };

    const result = await db.collection("moneyPlan").insertOne(newData);

    return NextResponse.json(
      {
        message: "저장완료",
        id: result.insertedId,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(err) },
      { status: 500 }
    );
  }
}
