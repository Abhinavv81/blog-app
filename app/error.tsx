"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <div className="  flex flex-col justify-center items-center gap-6 h-screen text-center">
        <div className="relative top-[300px] z-20 flex flex-col justify-center items-center gap-6 text-center ">
          <div className="flex gap-[190px] mt-4 ">
            <Link href="/">
              <Button>Go Home</Button>
            </Link>
            <Link href="/blog">
              <Button>Explore Blogs</Button>
            </Link>
          </div>
        </div>
        <div className="  relative -top-32  flex justify-center items-center w-1/2 ">
          <img
            src="https://res.cloudinary.com/duysea99p/image/upload/v1722709768/white_error_agreek.png"
            alt=""
            className="w-[450px] "
          />
        </div>
      </div>
    </>
  );
}
