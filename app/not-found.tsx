import { Button } from "@/components/ui/button";

import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="  flex flex-col justify-center items-center gap-6 h-screen text-center">
      <div className="relative top-[640px] z-20 flex flex-col justify-center items-center gap-6 text-center  ">
        <div className="flex gap-[315px] mt-4 mr-2 ">
          <Link href="/">
            <Button className="h-9">Go Home</Button>
          </Link>
          <Link href="/blogs">
            <Button className="h-9">Explore Blogs</Button>
          </Link>
        </div>
      </div>
      <div className="  relative -top-5  flex justify-center items-center  ">
        <img
          src="https://res.cloudinary.com/duysea99p/image/upload/v1722759224/404White.png"
          alt=""
          className="max-w-[950px] "
        />
      </div>
    </div>
  );
};

export default NotFound;
