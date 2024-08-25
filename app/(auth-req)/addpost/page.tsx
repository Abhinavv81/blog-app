"use client";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

import React, { useMemo } from "react";
import { useState } from "react";

const page = () => {
    const Editor = useMemo(
      () => dynamic(() => import("@/components/Editor"), { ssr: false }),
      []
    );
  const [title, setTitle] = useState("");
  const [descrption, setDescrption] = useState("");
  const [content, setContent] = useState<string>("");
  const onChange = (value: string) => {
    setContent(value);
  };
  const publish = async () => {
    const responsePublish = await fetch("/api/addpost", {
      method: "POST",
      body: JSON.stringify({
        title,
        description: descrption,
        content,
        isPublished: true,
      }),
    });
  };
  const saveDraft = async () => {
    const responseSave = await fetch("/api/addpost", {
      method: "POST",
      body: JSON.stringify({
        title,
        description: descrption,
        content,
        isPublished: false,
      }),
    });
  };
  return (
    <div className="min-h-screen max-w-5xl mx-auto">
      <div className="flex w-full mt-6 gap-3">
        <Button size={"sm"} variant={"ghost"} className="ml-auto">
          <span className="">Cancel</span>
        </Button>
        <Button size={"sm"} variant={"outline"} onClick={saveDraft}>
          <span className="">Save Draft</span>
        </Button>
        <Button size={"sm"} variant={"default"} onClick={publish}>
          <span className="">Publish</span>
        </Button>
      </div>
      <hr className="mt-2" />
      <div className="">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border  rounded-md text-6xl bg-transparent border-none focus:outline-none font-bold"
        />
        <textarea
          rows={5}
          value={descrption}
          onChange={(e) => setDescrption(e.target.value)}
          className="w-full p-2 border  rounded-md text-2xl bg-transparent border-none focus:outline-none font-bold "
          placeholder="Description"
        />
        <Editor onChange={onChange} initialContent={""} />
      </div>
    </div>
  );
};

export default page;
