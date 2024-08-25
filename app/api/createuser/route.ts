import { checkUser, createUser } from "@/actions/user";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { email, name } = await req.json();
  const user = await checkUser(email);
  if (!user) {
    const a = await createUser(name, email);
    return NextResponse.json(a);
  }
  return NextResponse.next();
}
