import React from "react";
import Footer from "./_components/Footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default layout;
