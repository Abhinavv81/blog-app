import { NextRequest, NextResponse } from "next/server";
import BlogModel from "@/models/blog";
import { connectDB } from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  const blog = await BlogModel.findById(params.id);
  if (!blog) {
    return NextResponse.json({ success: false, error: "Post not found" });
  }
  return NextResponse.json({ success: true, data: blog });
}
  