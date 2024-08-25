import React from "react";

const Loading = () => {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center gap-7">
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 bg-primary rounded-full animate-bounce"></div>
      <br />
      <span className="">Loading...</span>
    </div>
  );
};

export default Loading;
