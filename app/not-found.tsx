import { Button } from "@/components/ui/button";
import {
  Heart,
  MessageCircle,
  MessageSquare,
  Share2,
  Share,
  Flag,
  SquareChevronRight,
} from "lucide-react";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center flex-col mt-4 ">
      <div className=" flex    flex-col max-w-5xl p-6">
        <h1 className="md:text-6xl  font-semibold sm:text-4xl text-4xl">
          This Page Does Not Exist / 404
        </h1>
        <div className="flex  flex-col m-1 justify-start ">
          <div className="flex gap-3 justify-start m-2 mt-4 items-center">
            <div className="w-[3rem]  ">
              <img
                className="rounded-full "
                src="https://via.placeholder.com/150"
                alt="profile"
              />
            </div>
            <div className="flex justify-between w-full flex-col  ">
              <h1 className="  font-medium text-xl">Team Ken</h1>{" "}
            </div>
          </div>
          <div className="flex  mt-3 gap-10 p-1 border border-solid border-x-0 text-muted-foreground py-3 justify-between ">
            <div className="flex gap-10 ">
              <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
                <Heart size={"20px"} />
              </div>
              <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
                <MessageSquare size={"20px"} />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
                <Share size={20} />
              </div>
              <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
                <Flag size={20} />
              </div>
              <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
                <SquareChevronRight size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="text-pretty  text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          reprehenderit similique, itaque totam corporis atque numquam animi
          ratione? Dignissimos architecto alias maiores perspiciatis commodi
          unde culpa incidunt vitae qui molestias, magnam repellendus ducimus
          nisi deleniti modi sunt nemo voluptas! Itaque alias eaque harum autem,
          expedita at eveniet, voluptatibus perspiciatis veniam adipisci
          accusantium! Est, ab asperiores ipsa harum itaque a voluptatibus culpa
          autem voluptate expedita. Impedit exercitationem placeat architecto,
          quia facere atque qui eveniet ipsam minus molestias praesentium illo
          fugit numquam tenetur cupiditate? Doloremque laudantium veritatis
          perspiciatis cumque similique libero dolorum, molestiae corrupti iure
          blanditiis accusantium deserunt eaque, rem eveniet natus? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quas reprehenderit
          similique, itaque totam corporis atque numquam animi ratione?
          Dignissimos architecto alias maiores perspiciatis commodi unde culpa
          incidunt vitae qui molestias, magnam repellendus ducimus nisi deleniti
          modi sunt nemo voluptas! Itaque alias eaque harum autem, expedita at
          eveniet, voluptatibus perspiciatis veniam adipisci accusantium! Est,
          ab asperiores ipsa harum itaque a voluptatibus culpa autem voluptate
          expedita. Impedit exercitationem placeat architecto, quia facere atque
          qui eveniet ipsam minus molestias praesentium illo fugit numquam
          tenetur cupiditate? Doloremque laudantium veritatis perspiciatis
          cumque similique libero dolorum, molestiae corrupti iure blanditiis
          accusantium deserunt eaque, rem eveniet natus? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quas reprehenderit similique,
          itaque totam corporis atque numquam animi ratione? Dignissimos
          architecto alias maiores perspiciatis commodi unde culpa incidunt
          vitae qui molestias, magnam repellendus ducimus nisi deleniti modi
          sunt nemo voluptas! Itaque alias eaque harum autem, expedita at
          eveniet, voluptatibus perspiciatis veniam adipisci accusantium! Est,
          ab asperiores ipsa harum itaque a voluptatibus culpa autem voluptate
          expedita. Impedit exercitationem placeat architecto, quia facere atque
          qui eveniet ipsam minus molestias praesentium illo fugit numquam
          tenetur cupiditate? Doloremque laudantium veritatis perspiciatis
          cumque similique libero dolorum, molestiae corrupti iure blanditiis
          accusantium deserunt eaque, rem eveniet natus? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quas reprehenderit similique,
          itaque totam corporis atque numquam animi ratione? Dignissimos
          architecto alias maiores perspiciatis commodi unde culpa incidunt
          vitae qui molestias, magnam repellendus ducimus nisi deleniti modi
          sunt nemo voluptas! Itaque alias eaque harum autem, expedita at
          eveniet, voluptatibus perspiciatis veniam adipisci accusantium! Est,
          ab asperiores ipsa harum itaque a voluptatibus culpa autem voluptate
          expedita. Impedit exercitationem placeat architecto, quia facere atque
          qui eveniet ipsam minus molestias praesentium illo fugit numquam
          tenetur cupiditate? Doloremque laudantium veritatis perspiciatis
          cumque similique libero dolorum, molestiae corrupti iure blanditiis
          accusantium deserunt eaque, rem eveniet natus? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quas reprehenderit similique,
          itaque totam corporis atque numquam animi ratione? Dignissimos
          architecto alias maiores perspiciatis commodi unde culpa incidunt
          vitae qui molestias, magnam repellendus ducimus nisi deleniti modi
          sunt nemo voluptas! Itaque alias eaque harum autem, expedita at
          eveniet, voluptatibus perspiciatis veniam adipisci accusantium! Est,
          ab asperiores ipsa harum itaque a voluptatibus culpa autem voluptate
          expedita. Impedit exercitationem placeat architecto, quia facere atque
          qui eveniet ipsam minus molestias praesentium illo fugit numquam
          tenetur cupiditate? Doloremque laudantium veritatis perspiciatis
          cumque similique libero dolorum, molestiae corrupti iure blanditiis
          accusantium deserunt eaque, rem eveniet natus? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quas reprehenderit similique,
          itaque totam corporis atque numquam animi ratione? Dignissimos
          architecto alias maiores perspiciatis commodi unde culpa incidunt
          vitae qui molestias, magnam repellendus ducimus nisi deleniti modi
          sunt nemo voluptas! Itaque alias eaque harum autem, expedita at
          eveniet, voluptatibus perspiciatis veniam adipisci accusantium! Est,
          ab asperiores ipsa harum itaque a voluptatibus culpa autem voluptate
          expedita. Impedit exercitationem placeat architecto, quia facere atque
          qui eveniet ipsam minus molestias praesentium illo fugit numquam
          tenetur cupiditate? Doloremque laudantium veritatis perspiciatis
          cumque similique libero dolorum, molestiae corrupti iure blanditiis
          accusantium deserunt eaque, rem eveniet natus?
        </div>
        <hr className="text-primary/10 mt-5" />
        <div className="flex  mt-3 gap-10 p-1  text-muted-foreground justify-between ">
          <div className="flex gap-10 ">
            <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
              <Heart size={"20px"} />
            </div>
            <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
              <MessageSquare size={"20px"} />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
              <Share size={20} />
            </div>
            <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
              <Flag size={20} />
            </div>
            <div className="hover:text-primary hover:border hover:border-primary/30  px-3 py-2 rounded-md flex justify-center items-center gap-2 border border-black/0">
              <SquareChevronRight size={20} />
            </div>
          </div>
        </div>
        <hr className="text-primary/10 mt-4" />
        <div>
          <div className="w-[6rem] my-5">
            <img
              className="rounded-full "
              src="https://via.placeholder.com/150"
              alt="profile"
            />
          </div>
          <div className="flex justify-between w-full flex-col gap-2  ">
            <h1 className="  font-medium text-3xl">Written By Team Ken</h1>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, blanditiis?
            </p>
          </div>
          <hr className="text-primary/10 my-5" />
        </div>

        <div className="mt-5 mb-[10rem]">
          <button className=" bg-background border text-primary border-primary px-4 py-2 rounded-full hover:bg-primary hover:text-secondary">
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
