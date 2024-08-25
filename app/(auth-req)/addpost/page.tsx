"use client";
import Editor from "@/components/Editor";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  const onChange = () => {};
  return (
    <div className="min-h-screen max-w-5xl mx-auto">
      <div className="flex w-full mt-6 gap-3">
        <Button size={"sm"} variant={"ghost"} className="ml-auto">
          <span className="">Cancel</span>
        </Button>
        <Button size={"sm"} variant={"outline"}>
          <span className="">Save Draft</span>
        </Button>
        <Button size={"sm"} variant={"default"}>
          <span className="">Publish</span>
        </Button>
      </div>
      <hr className="mt-2" />
      <div className="">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border  rounded-md text-6xl bg-transparent border-none focus:outline-none font-bold"
        />
        <Editor onChange={() => onChange} initialContent={""} />
      </div>
    </div>
  );
};

export default page;
