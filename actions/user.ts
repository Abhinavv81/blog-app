"use server";
import mongoose from "mongoose";
import User from "@/models/user";
import { connectDB } from "@/lib/db";
interface User {
  name: string;
  email: string;
  displayImage?: string;
  isAdmin?: boolean;
  bio?: string;
}

export const  createUser = async (name:string,email:string) => {
  await connectDB();
    const user = await User.create({
      name,
      email,
    });
  return user;
}