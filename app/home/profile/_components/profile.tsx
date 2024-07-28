import { Button } from "@/components/ui/button";
import { Dot, Instagram, Linkedin, Twitter, UsersRound } from "lucide-react";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  

const Profile = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="w-full md:w-1/3">
        <div className="m-4 flex flex-col gap-2">
          <img
            className="rounded-full overflow-hidden w-[20rem]"
            src="https://via.placeholder.com/150"
            alt="profile"
          />
          <div className="text-left">Username</div>
          <div className="text-justify">Bio</div>
          <Button>Edit Profile</Button>
          <div className="flex gap-1">
            <div className="flex gap-0.25">
              <UsersRound />
              <div className="text-muted-foreground">4 Followers</div>
            </div>
            <div className="flex gap-0.25">
              <Dot className="opacity-40" />
              <div className="text-muted-foreground">1 Following</div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-4 cursor-pointer ">
              <Linkedin />
              <div className="text-muted-foreground">Username</div>
            </div>
            <div className="flex gap-4 cursor-pointer">
              <Instagram />
              <div className="text-muted-foreground">Username</div>
            </div>
            <div className="flex gap-4 cursor-pointer">
              <Twitter />
              <div className="text-muted-foreground">Username</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex-1 p-6">
        <Card className="w-full ">
            <CardHeader >
              <CardTitle>Lorem ipsum dolor sit amet consectetur </CardTitle>
              <CardDescription>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime excepturi minima modi repudiandae, perspiciatis corporis. Harum nesciunt voluptate nostrum explicabo.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
