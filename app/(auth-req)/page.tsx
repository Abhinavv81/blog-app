import { Plus } from "lucide-react";
import Blog from "./_components/NewBlog";

export default function Home() {
  return (
    <div>
      <div >
        <Blog />
      </div>
      <div className="bottom-12 right-7  fixed bg-muted-foreground/20 p-3 rounded-lg ">
        <Plus />
      </div>
    </div>
  );
}
