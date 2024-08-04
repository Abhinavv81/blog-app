import LandingPageText from "./_components/LandingPageText";
import Footer from "./_components/Footer";
import GridPattern from "@/components/magicui/grid-pattern";

export default function Home() {
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
              and inspiration.
            </div>
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
        </div>
        <GridPattern className="fixed top-0 left-0 right-0 bottom-0 opacity-40" />
      </div>
    </>
  );
}
