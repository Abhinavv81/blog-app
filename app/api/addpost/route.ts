import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/auth";
import { checkUser } from "@/actions/user";
import { createblog } from "@/actions/addpost";
import { connectDB } from "@/lib/db";

export async function POST(req: NextRequest) {
  await connectDB();
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await checkUser(session?.user?.email || "");
  const userId = user?._id || "";
  const userName = user?.name || "";
  const { title, description, content, isPublished } = await req.json();

  await createblog(title, description, content, isPublished, userId, userName);
  return NextResponse.json({ title, description, content, isPublished });
}
