import React from "react";
import Footer from "../../../components/Footer";
import CardComponent from "@/components/CardComponent";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Blogs = () => {
  const sampleArray = [
    {
      title: "First Blog",
      description: "First Blog Description",
      date: "Blog Date 1",
    },
    {
      title: "Second Blog",
      description: "Second Blog Description",
      date: "Blog Date 2",
    },
    {
      title: "Third Blog",
      description: "Third Blog Description",
      date: "Blog Date 3",
    },
    {
      title: "Fourth Blog",
      description: "Fourth Blog Description",
      date: "Blog Date 4",
    },
    {
      title: "Fifth Blog",
      description: "Fifth Blog Description",
      date: "Blog Date 5",
    },
    {
      title: "Sixth Blog",
      description: "Sixth Blog Description",
      date: "Blog Date 6",
    },
    {
      title: "Seventh Blog",
      description: "Seventh Blog Description",
      date: "Blog Date 7",
    },
    {
      title: "Eighth Blog",
      description: "Eighth Blog Description",
      date: "Blog Date 8",
    },
    {
      title: "Ninth Blog",
      description: "Ninth Blog Description",
      date: "Blog Date 9",
    },
    {
      title: "Tenth Blog",
      description: "Tenth Blog Description",
      date: "Blog Date 10",
    },
  ];
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
        {sampleArray.map((item, index) => (
          <CardComponent title={item.title} description={item.description} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
