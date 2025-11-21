"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { connectDB } from "@/app/_lib/mongodb";

export async function createMoney(
  prevState: { success: boolean; message: string } | null,
  formData: FormData
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return {
        success: false,
        message: "로그인이 필요합니다.",
      };
    }

    const category = formData.get("category");
    const date = formData.get("date") as string;
    const money = formData.get("money");
    const content = formData.get("content");

    if (!category || !date || !money) {
      return {
        success: false,
        message: "필수 항목을 입력해주세요.",
      };
    }

    const client = await connectDB;
    const db = client.db("piggyplan");

    await db.collection("moneyPlan").insertOne({
      username: session.user.username,
      category,
      date: new Date(date),
      money: Number(money),
      content,
      createdAt: new Date(),
    });

    return {
      success: true,
      message: "저장 완료 ✅",
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      message: "서버 에러가 발생했습니다.",
    };
  }
}
