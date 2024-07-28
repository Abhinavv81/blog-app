import { Plus } from "lucide-react";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import Blog from "./_components/NewBlog";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
      
        <Blog />
      </div>
      <div className="bottom-12 right-7  fixed bg-muted-foreground/20 p-3 rounded-lg ">
        <Plus />
      </div>
      <Footer />
    </div>
  );
}
