"use server";
import { connectDB } from "@/lib/db";
import BlogModel from "@/models/blog";

export const createblog = async (
  title: string,
  description: string,
  content: string,
  isPublished: boolean,
  userId: any,
  userName: any
  
) => {
  await connectDB();
  const blog = await BlogModel.create({
    title,
    description,
    content,
    isPublished,
    userId,
    userName
  });
  return blog;
};
