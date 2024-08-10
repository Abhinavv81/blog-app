"use server";
import { connectDB } from "@/lib/db";
import User from "@/models/user";

export const createUser = async (name: string, email: string) => {
  await connectDB();
  const user = await User.create({ name, email, isAdmin: false });
  return user;
};

export const checkUser = async (email: string) => {
  await connectDB();
  const user = await User.findOne({ email });
  return user;
};
