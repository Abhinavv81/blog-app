import { NextResponse, NextRequest } from "next/server";
import { auth } from "@/auth";
import { checkUser } from "@/actions/user";
import { createblog } from "@/actions/addpost";
import BlogModel from "@/models/blog";
import UserModel from "@/models/user";

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await checkUser(session.user.email || "");
  const userId = user?.id;
  const userName = user?.name;
  
  const { id, title, description, content, isPublished } = await req.json();

  if (userId !== session.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const updatedPost = await BlogModel.findOneAndUpdate(
      { _id: id },
      {
        title,
        description,
        content,
        isPublished,
        userId,
        userName,
      },
      { new: true }
    );

    if (!updatedPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(updatedPost);
  } catch (error) {
    return NextResponse.json({ error: "message" }, { status: 500 });
  }
}
