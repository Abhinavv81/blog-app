import React from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Blog = () => {
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
    <div>
      <div className="mt-4 mb-4 flex flex-col gap-3 items-center ">
        {sampleArray.map((item, index) => (
          <Card className="w-[90vh] h-[40vh]">
            <CardHeader key={index}>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
