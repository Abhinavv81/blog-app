import { NextRequest, NextResponse } from "next/server";
import BlogModel from "@/models/blog";

export async function GET(req: NextRequest) {
  const displayBlogs = await BlogModel.find({});
  return NextResponse.json(displayBlogs);

}



