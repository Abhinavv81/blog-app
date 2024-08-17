import { Button } from "@/components/ui/button";
import {
  Dot,
  GithubIcon,
  Instagram,
  Linkedin,
  Twitter,
  UsersRound,
} from "lucide-react";
import React from "react";
import CardComponent from "@/components/CardComponent";

const Profile = () => {
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
    <div className="flex w-full min-h-screen flex-col  lg:flex-row">
      <div className="">
        <div className="m-4 flex flex-col gap-2">
          <div className=" flex flex-col gap-5 items-start md:flex-row md:items-center md:gap-10 lg:flex-col ">
            <img
              className="  rounded-full overflow-hidden sm:max-w-[20rem]  "
              src="https://via.placeholder.com/150"
              alt="profile"
            />
            <div className="text-left text-3xl font-semibold pb-1">
              Username
            </div>
          </div>
          <div className="text-justify">Bio</div>
          <Button>Edit Profile</Button>
          <div className="flex gap-1 mb-1 mt-1">
            <div className="flex gap-0.25">
              <UsersRound />
              <div className="text-muted-foreground">4 Followers</div>
            </div>
            <div className="flex gap-0.25">
              <Dot className="opacity-40" />
              <div className="text-muted-foreground">1 Following</div>
            </div>
          </div>
          <div className="flex flex-row gap-3 justify-between flex-wrap sm:flex-col">
            <div className="flex gap-4 cursor-pointer  ">
              <Linkedin />
              <div className="text-muted-foreground">Username</div>
            </div>
            <div className="flex gap-4 cursor-pointer">
              <Instagram />
              <div className="text-muted-foreground">Username</div>
            </div>
            <div className="flex gap-4 cursor-pointer">
              <GithubIcon />
              <div className="text-muted-foreground">Username</div>
            </div>
            <div className="flex gap-4 cursor-pointer">
              <Twitter />
              <div className="text-muted-foreground">Username</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="w-full p-6">
          {sampleArray.map((item, index) => (
            <CardComponent title={item.title} description={item.description} link={""} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
