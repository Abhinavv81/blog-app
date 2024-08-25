import {NextResponse } from "next/server";
import BlogModel from "@/models/blog";
import { connectDB } from "@/lib/db";

export async function GET() {
  await connectDB();
  const displayBlogs = await BlogModel.find({});
  return NextResponse.json(displayBlogs);
}



