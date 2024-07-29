"use client"
import React from "react";
import Footer from "./_components/Footer";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
const layout = ({ children }: { children: React.ReactNode }) => {
  const {userId,isLoaded}=useAuth();
  const router = useRouter();
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!userId) {
    router.push("/sign-in");
  }
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default layout;
