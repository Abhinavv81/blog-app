import React from "react";
import { auth } from "@/auth";
const User = async () => {
  const session = await auth();
  return (
    <div>
      <img
        className="rounded-full max-w-[36px]"
        src={session?.user?.image || "https://www.gravatar.com/avatar/000?d=mp"}
        alt={session?.user?.name || ""}
      />
    </div>
  );
};

export default User;
