"use server";
import mongoose, { Connection } from "mongoose";
let cachedConnection: Connection | null = null;
export const connectDB = async () => {
  if (cachedConnection) {
    console.log("Using cached db connection");
    return cachedConnection;
  }
  try {
    const conn = await mongoose.connect(process.env.mongo!);
    cachedConnection = conn.connection;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return cachedConnection;
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
