import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { connectDB } from "@/app/_lib/mongodb";
import { ObjectId } from "mongodb";

export async function DELETE(req: NextRequest) {
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

    const id = req.nextUrl.pathname.split("/").pop();
    if (!id) {
      return NextResponse.json(
        { message: "삭제할 ID가 없습니다." },
        { status: 400 }
      );
    }

    const result = await db
      .collection("moneyPlan")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { message: "삭제할 항목이 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "삭제 완료" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "서버 에러 발생", error: String(err) },
      { status: 500 }
    );
  }
}
