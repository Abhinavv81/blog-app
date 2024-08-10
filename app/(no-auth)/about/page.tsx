import React from "react";

const About = () => {
  return (
    <>
      <div className="flex  items-center justify-center mx-16 ">
        <div className="flex flex-col items-center justify-center gap-20 h-screen sm:flex-row">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-4xl font-semibold">About Us</h1>
            <div className="max-2xl ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ad
              unde vitae ullam itaque quae inventore optio, autem odio illum,
              enim labore cum quibusdam maxime provident? Est exercitationem
              deleniti laudantium sunt, dicta nam architecto eaque neque, in
              fuga dignissimos, quidem assumenda cum mollitia magni quod
              accusantium voluptas voluptatem ut doloremque delectus harum
              autem? Quod dolore officia sit recusandae nihil voluptatem alias
              consequatur, l
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1657639028182-24e11504c7c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
              className="max-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
