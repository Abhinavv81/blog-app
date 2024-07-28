import React from "react";
import Link from "next/link";
const Navlinks = () => {
  return (
    <div className="flex gap-20">
      <Link href={"/home"}>Home</Link>
      <Link href={"/home/profile"}>Profile</Link>
      <Link href={"/blogs"}>Blogs</Link>
    </div>
  );
};

export default Navlinks;
