
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { auth } from "@/auth";
import { SignInGoogle } from "@/actions/auth";
import { resolve } from "path";
const LandingPageText = async () => {
  const session = await auth();
  return (
    <>
      <div className=" h-[85vh] max-w-3xl mx-auto text-center flex flex-col items-center justify-center gap-3">
        <h1 className="text-4xl font-bold flex justify-center ">
          Welcome to Ken - Discover and Share Your Stories
        </h1>
        <h2 className="text-xl font-medium flex justify-center text-muted-foreground">
          Join our community of passionate writers and readers. Start your
          journey today and let your voice be heard.
        </h2>
        <div className="flex gap-2">
          {session?.user ? (
            <div>
              <Link href={"/addpost"}>
                <Button>Write a Blog</Button>
              </Link>
            </div>
          ) : (
            <div>
              <form action={SignInGoogle}>
                <Button type="submit" variant={"default"} size={"sm"}>
                  Get Started
                </Button>
              </form>
            </div>
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
