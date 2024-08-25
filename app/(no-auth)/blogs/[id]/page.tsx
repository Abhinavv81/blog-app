"use client";
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
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import dynamic from "next/dynamic";
import { useState, useEffect, useMemo } from "react";

const Page = ({ params }: { params: Params }) => {
  const Editor = useMemo(
    () => dynamic(() => import("@/components/Editor"), { ssr: false }),
    []
  );
  const [data, setdata] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`/api/blog/${params.id}`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const blogs = await response.json();
        setdata(blogs.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const week = date.getDay();

    let weekName;
    switch (week) {
      case 0:
        weekName = "Sunday";
        break;
      case 1:
        weekName = "Monday";
        break;
      case 2:
        weekName = "Tuesday";
        break;
      case 3:
        weekName = "Wednesday";
        break;
      case 4:
        weekName = "Thursday";
        break;
      case 5:
        weekName = "Friday";
        break;
      case 6:
        weekName = "Saturday";
        break;
    }

    return `${weekName}  ${day}-${month}-${year}`;
  };

  return (
    <div className="flex items-center flex-col mt-4 ">
      <div className=" flex    flex-col max-w-5xl p-6">
        <h1 className="md:text-6xl  font-semibold sm:text-4xl text-4xl">
          {data.title}
        </h1>
        <div className="text-3xl m-4">{data.description}</div>
        <div className="flex  flex-col m-1 justify-start ">
          <div className="flex gap-3 justify-start m-2 mt-4 items-center">
            <div className="w-[3rem]  ">
              <img
                className="rounded-full "
                src="https://via.placeholder.com/150"
                alt="profile"
              />
            </div>
            <div className="flex justify-between w-full flex-col  ">
              <h1 className="  font-medium text-xl">{data.userName}</h1>
              <h1 className="text-xs">
                {" "}
                Published On {formatDate(data.createdAt)}
              </h1>
            </div>
          </div>
        </div>

        <div className="text-pretty  text-justify">
          <Editor
            editable={false}
            onChange={() => {}}
            initialContent={data.content}
          />
        </div>
        <hr className="text-primary/10 mt-5" />
      </div>
    </div>
  );
};

export default Page;
