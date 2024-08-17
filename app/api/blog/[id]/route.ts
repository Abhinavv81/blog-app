import { NextRequest, NextResponse } from "next/server";
import BlogModel from "@/models/blog";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const blog = await BlogModel.findById(params.id);
  if (!blog) {
    return NextResponse.json({ success: false, error: "Post not found" });
  }
  return NextResponse.json({ success: true, data: blog });
}
  