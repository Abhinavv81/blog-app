import { Button } from "@/components/ui/button";
import {
  Heart,
  MessageCircle,
  MessageSquare,
  Share2,
  Share,
  Flag,
  SquareChevronRight,
} from "lucide-react";
import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="  flex flex-col justify-center items-center gap-6 h-screen text-center">
      <div className="relative top-[470px] z-20 flex flex-col justify-center items-center gap-6 text-center  ">
        <div className="flex gap-[315px] mt-4 ml-1 ">
          <Link href="/">
            <Button className="h-9">Go Home</Button>
          </Link>
          <Link href="/blogs">
            <Button className="h-9">Explore Blogs</Button>
          </Link>
        </div>
      </div>
      <div className="  relative -top-16  flex justify-center items-center w-1/2 ">
        <img
          src="https://res.cloudinary.com/duysea99p/image/upload/v1722757572/correctWhiteError.png"
          alt=""
          className="max-w-[700px] "
        />
      </div>
    </div>
  );
};

export default NotFound;
