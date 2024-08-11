import LandingPageText from "./_components/LandingPageText";
import Footer from "../../components/Footer";
import GridPattern from "@/components/magicui/grid-pattern";
import { Cherry, ChevronRight, Cpu, PhilippinePeso, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import { SignInGoogle } from "@/actions/auth";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <div className="">
        <div className="min-h-screen">
          <div className="min-h-screen">
            <LandingPageText />
          </div>
          <div className="p-6">
            <div className="max-w-2xl mr-auto text-lg tracking-wider text-justify">
              <span className="-11 text-3xl font-bold">
                What is Ken?
                <br />
                <br />
              </span>
              Welcome to Ken, the ultimate destination for readers and writers.
              Whether you're looking to explore new ideas or share your own, our
              platform provides the perfect space to do so. Join a vibrant
              community of bloggers and discover a world of stories, insights,
              and inspiration. <br />
              <span>
                Ken is dedicated to providing a platform where writers can share
                their stories and readers can find inspiration and information
                on a wide range of topics.
                <br />
                Ken is a open-source project that is built with the latest
                technologies and is constantly updated to provide the best
                experience for our users.
              </span>
              <span>
                You can also contribute to the project by visiting our Github
                Repo
              </span>
            </div>
            <AnimatedGradientText className="mt-11">
              <Star fill="yellow" color="yellow" size={15} />{" "}
              <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Start on Github
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </div>
          <br />
          <div className="p-6">
            <span className="text-4xl font-bold">
              Popular Blogs <br />
            </span>
            <div className="min-h-screen">
              {/* add bento grid for popular blogs */}
            </div>
          </div>
          <div className="p-6">
            <span className="text-4xl font-bold">
              Categories <br />
            </span>
            <div className="flex flex-wrap py-6 gap-4">
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <PhilippinePeso />
                <span>Porn</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cherry />
                <span>Rand</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
              <div className="flex item-center gap-2 border border-muted-foreground/40 px-4 py-1 rounded-full font-code font-semibold ">
                <Cpu />
                <span>Technology</span>
              </div>
            </div>
          </div>
          <div className="p-6 my-20">
            <span className="text-4xl font-bold">
              Welcome back to
              <br />
              the community of blog writters across the Globe <br />
            </span>
            <div className="flex gap-4 my-5">
              {session?.user ? (
                <div>
                  <Link href={"/addpost"}>
                    <Button>Write a Blog</Button>
                  </Link>
                </div>
              ) : (
                <div>
                  <form action={SignInGoogle}>
                    <Button type="submit" variant={"default"} size={"sm"}>
                      Get Started
                    </Button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
        <GridPattern className="fixed top-0 left-0 right-0 bottom-0 opacity-40" />
      </div>
    </>
  );
}
