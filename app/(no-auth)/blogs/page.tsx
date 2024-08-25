"use client";
import React from "react";
import Footer from "../_components/Footer";
import CardComponent from "@/components/CardComponent";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

const Blogs = () => {
  const [displayBlogs, setDisplayBlogs] = useState<
    Array<{ _id: string; title: string; description: string; content: string }>
  >([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await fetchBlogsFromAPI();
        setDisplayBlogs(blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const fetchBlogsFromAPI = async () => {
    const responsePublish = await fetch("/api/displaypost", {
      method: "GET",
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));

    return responsePublish; // Return the fetched blogs
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-3">
      <form className="flex flex-row gap-2 items-center justify-center">
        <input
          type="text"
          placeholder="Search For Blogs"
          name="search"
          className=" h-10 rounded-md inline-flex items-center justify-center focus:outline-none text-center "
        ></input>
        <Button type="submit" className="h-10" variant="secondary">
          <Search />
        </Button>
      </form>
      <div className="mt-4 mb-4 max-w-3xl flex flex-col gap-4 space-y-2 items-center mx-auto">
        {displayBlogs.map((item, index) => (
          <CardComponent
            title={item.title}
            description={item.description}
            link={`/blogs/${item._id}`}
            key={index}
          />
        ))}   
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
