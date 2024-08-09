"use server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/db";
import User from "@/models/user";

export const createUser = async (name: string, email: string) => {
  await connectDB();
  const user = await User.create({ name, email, isAdmin: false });
  return user;
};
