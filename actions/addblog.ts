"use server";

import { connectDB } from "@/lib/db";
import Blog from "@/models/blog";

interface Blog {
  title: string;
  description?: string;
  content?: string;
  tags?: string[];
  isPublished: boolean;
  coverImage?: string;
  icon?: string;
}
export const addBlog = async ({
  title,
  description,
  content,
  tags,
  isPublished,
  coverImage,
  icon,
}: Blog) => {
  await connectDB();
  const blog = await Blog.create({
    title,
    description,
    content,
    tags,
    isPublished,
    coverImage,
    icon,
  });
  return blog;
};
