"use client";
import { SignInButton, SignOutButton, SignUpButton, useAuth, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/Mode-theme";
import Navlinks from "@/components/Navlinks";
import { Button } from "@/components/ui/button";
import React from "react";

const Navbar = () => {
   const { isLoaded, userId } = useAuth();

  return (
    <header className="flex items-center justify-between w-full z-50 ">
      <div>
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      <nav className="hidden md:flex text-muted-foreground ">
        <Navlinks />
      </nav>
      <div className="flex items-center relative gap-2">
        <div className="relative">
          <ModeToggle />
        </div>
        {isLoaded && userId ? (
   
            <UserButton/>
       
        ) : (
          <>
          <Button><SignInButton/></Button>
          <Button>
            <SignUpButton/></Button></>
        )}

      </div>
    </header>
  );
};

export default Navbar;
