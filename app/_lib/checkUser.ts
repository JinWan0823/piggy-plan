import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

export const checkUser = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
};
