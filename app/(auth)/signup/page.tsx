import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";
import React from "react";
export default function SignUP() {
  return (
    <>
      <div className=" h-[100vh]  flex  justify-center items-center">
        <div className="  max-w-96 p-5 flex  justify-between gap-4 flex-col border-solid border-2	border-white rounded-lg	">
          <div className="flex justify-center">
            <h1 className="text-2xl">SIGN UP</h1>
          </div>

          <div className="flex justify-between  gap-2 flex-col    ">
            <h1 className=" text-[18px] flex   gap-2 flex-col">Email</h1>
            <input
              className="w-full px-3 py-2 text-black bg-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              type="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex items-start  gap-2 flex-col   ">
            <h1 className="text-[18px] flex   gap-2 flex-col ">Create Password</h1>
            <input
              className="w-full px-3 py-2 text-black bg-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="flex items-start  gap-2 flex-col   ">
            <h1 className="text-[18px] flex   gap-2 flex-col ">Confirm Password</h1>
            <input
              className="w-full px-3 py-2 text-black bg-white border border-gray-600 rounded focus:outline-none focus:border-blue-500"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <Button className="mt-2">Sign Up</Button>
          {/* <div className="flex justify-center">
            <h1 className="text-[9px]">OR</h1>
          </div>
          <div className=" h-10 flex items-center justify-center  gap-4 bg-white rounded-md">
            <Chrome className="stroke-black" />
            <Button className="">Sign Up with Google</Button>
          </div> */}
        </div>
      </div>
    </>
  );
}
