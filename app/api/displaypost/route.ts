import { NextRequest, NextResponse } from "next/server";
import BlogModel from "@/models/blog";

export async function GET(req: NextRequest) {
  const displayBlogs = await BlogModel.find({});
  console.log(displayBlogs);
  return NextResponse.json(displayBlogs);
}
