import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";

const Layout = ({ children,title = 'Haikal Page' }) => {

    useEffect(() => {
        document.title = title;
    },[title])

  return (
    <div className={"w-screen h-screen overflow-x-hidden relative"}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
