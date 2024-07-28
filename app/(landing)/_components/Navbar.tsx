import { ModeToggle } from "@/components/Mode-theme";
import { Button } from "@/components/ui/button";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-full z-50 ">
      <div>
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      <nav className="hidden md:flex text-muted-foreground ">
        <ul className="flex gap-20">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center relative gap-2">
        <div className="relative">
          {" "}
          <ModeToggle />
        </div>
        <Button variant={"ghost"}>Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};

export default Navbar;
