import React from "react";
import { SignOut as Logout } from "@/actions/auth";
import { Button } from "../ui/button";
const SignOut = () => {
  return (
    <form action={Logout}>
      <Button type="submit" size={"sm"}>
        Sign Out
      </Button>
    </form>
  );
};

export default SignOut;
