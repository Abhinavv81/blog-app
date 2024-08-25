import React from "react";
import { auth } from "@/auth";
const User = async () => {
  const session = await auth();

  return <div>{session?.user?.name}</div>;
};

export default User;
