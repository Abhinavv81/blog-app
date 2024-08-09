
import { ModeToggle } from "@/components/Mode-theme";
import Navlinks from "@/components/Navlinks";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { SquarePen } from "lucide-react";
import { SignIn } from "./auth/sign-in";
import  SignOut  from "./auth/signout";
import User from "./user";
const Navbar = () => {


  return (
    <header className="flex items-center justify-between w-full z-50 ">
      <Link href="/">
        <h1 className="text-2xl font-bold">Logo</h1>
      </Link>
      <nav className="hidden md:flex text-muted-foreground ">

      </nav>
      <div className="flex items-center relative gap-2">
        <Link href="/home/addpost">
          <Button variant={"ghost"}>
            <div className="flex gap-2 text-center items-center justify-center text-muted-foreground">
              <SquarePen />
              <span>Write Blog</span>
            </div>
          </Button>
        </Link>
        <div className="relative">
          <ModeToggle />
        </div> <User />
        
       
              <SignIn/>
              <SignOut/>
    
    
      </div>
    </header>
  );
};

export default Navbar;
