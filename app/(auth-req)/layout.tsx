import React from "react";
import Footer from "./_components/Footer";
import { useRouter } from "next/navigation";
import { auth } from "@/auth";
import { SignIn } from "@/components/auth/sign-in";
const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session?.user) {
    return (
      <>
        <div className="h-full min-h-[70vh] w-full flex items-center justify-center flex-col gap-11">
          <h1 className="font-bold text-3xl text-center tracking-widest">
            Signin To continue
          </h1>
          <SignIn />
        </div>
      </>
    );
  }
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default layout;
