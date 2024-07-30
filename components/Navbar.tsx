"use client";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  useAuth,
  UserButton,
} from "@clerk/nextjs";
import { ModeToggle } from "@/components/Mode-theme";
import Navlinks from "@/components/Navlinks";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { NotebookPen } from "lucide-react";
const Navbar = () => {
  const { isLoaded, userId } = useAuth();

  return (
    <header className="flex items-center justify-between w-full z-50 ">
      <Link href="/">
        <h1 className="text-2xl font-bold">Logo</h1>
      </Link>
      <nav className="hidden md:flex text-muted-foreground ">
        {isLoaded && userId && <Navlinks />}
      </nav>
      <div className="flex items-center relative gap-2">
        <Link href="/home/addpost">
          <Button variant={"ghost"}>
            <div className="flex gap-2 text-center items-center justify-center text-muted-foreground">
              <NotebookPen />
              <span>Write Blog</span>
            </div>
          </Button>
        </Link>
        <div className="relative">
          <ModeToggle />
        </div>
        {isLoaded && userId ? (
          <UserButton />
        ) : (
          <>
            <Button>
              <SignInButton />
            </Button>
            <Button>
              <SignUpButton />
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
