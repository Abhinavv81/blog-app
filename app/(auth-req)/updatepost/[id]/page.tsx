"use client";
import { Button } from "@/components/ui/button";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";

import React, { use, useEffect, useMemo } from "react";
import { useState } from "react";
import useFetchPost from "@/hooks/useFetchPost";
const page = ({ params }: { params: Params }) => {
  const Editor = useMemo(
    () => dynamic(() => import("@/components/Editor"), { ssr: false }),
    []
  );
  const { data, loading, error, fetchPost } = useFetchPost(params.id);
  useEffect(() => {
    const fun = async () => {
      const a = await fetchPost(params.id);
      setTitle(a.title);
      setDescrption(a.description);
      setContent(a.content);
    };
    fun();
  }, [params.id]);
  const [title, setTitle] = useState("");
  const [descrption, setDescrption] = useState("");
  const [content, setContent] = useState("");
  const onChange = (value: string) => {
    setContent(value);
  };

  const publish = async () => {
    const responsePublish = await fetch("/api/updatepost", {
      method: "POST",
      body: JSON.stringify({
        id: params.id,
        title,
        description: descrption,
        content,
        isPublished: true,
      }),
    });
    console.log(responsePublish.json());
  };
  const saveDraft = async () => {
    const responseSave = await fetch("/api/updatepost", {
      method: "POST",
      body: JSON.stringify({
        id: params.id,
        title,
        description: descrption,
        content,
        isPublished: false,
      }),
    });
    console.log(responseSave.json());
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
        <Editor onChange={onChange} initialContent={content} />
      </div>
    </div>
  );
};

export default page;
