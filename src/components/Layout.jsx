import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";

const Layout = ({ children, title = "Haikal Page",textcolor = "text-white" }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className={"w-screen h-screen overflow-x-hidden relative"}>
      <Navbar textcolor={textcolor} />
      {children}
    </div>
  );
};

export default Layout;
