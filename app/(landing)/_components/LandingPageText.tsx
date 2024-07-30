"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
const LandingPageText = () => {
  const { isSignedIn, isLoaded } = useAuth();
  return (
    <>
      <div className=" h-[85vh] max-w-3xl mx-auto text-center flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl font-bold flex justify-center ">
          Welcome to Ken - Your Personal Blogging Haven
        </h1>
        <h2 className="text-xl font-medium flex justify-center text-muted-foreground">
          Join our community of passionate writers and readers. Start your
          journey today and let your voice be heard.
        </h2>
        <div className="flex gap-2">
          {isLoaded && isSignedIn ? (
            <Link href={"/home/addpost"}>
              <Button>Write a Blog</Button>
            </Link>
          ) : (
            <Link href={"/sign-in"}>
              <Button>Get Started</Button>
            </Link>
          )}
          <Link href={"/blogs"}>
            <Button variant={"outline"}>Explore Blogs</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPageText;
