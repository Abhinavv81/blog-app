import React from "react";
import { auth } from "@/auth";
const User = async () => {
  const session = await auth();
  return (
    <div>
      <img
        className="rounded-full h-9"
        src={session?.user?.image || "https://www.gravatar.com/avatar/000?d=mp"}
        alt={session?.user?.name || ""}
      />
    </div>
  );
};

export default User;
