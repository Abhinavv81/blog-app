import React from "react";
import { auth } from "@/auth";
const User = async () => {
  const session = await auth();

  console.log(session);
  return (
    <div>
      {session?.user?.image && (
        <img
          className="rounded-full h-9"
          src={session.user.image}
          alt={session?.user?.image}
        />
      )}
    </div>
  );
};

export default User;
