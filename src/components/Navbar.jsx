import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [getToggle, setToggle] = useState(false);

  return (
    <nav className={"w-screen h-16 absolute top-0 border-b-2 border-slate-500"}>
      <div className='container relative mx-auto h-full flex items-center justify-between px-4 lg:px-0 text-white'>
        <h2 className={`text-3xl font-serif font-semibold ${props.textcolor} `}>
          HaikalFadhilah
        </h2>
        <div
          className={
            "h-3/4 aspect-square flex justify-center items-center lg:hidden"
          }>
          <CgMenuRight
            size={30}
            color={"black"}
            onClick={() => setToggle(!getToggle)}
          />
        </div>
        <ul
          className={`lg:static absolute top-full -translate-y-3 lg:translate-y-0 py-3 px-2 bg-slate-300 ring-1 lg:ring-0 right-14 rounded-lg lg:w-fit lg:bg-transparent flex-col lg:flex lg:flex-row gap-2 items-center text-lg lg:text-lg lg:gap-4 lg:border-0 z-50  ${
            getToggle ? "flex " : "hidden"
          }`}>
          <li
            className={
              "text-slate-700 lg:text-slate-900 lg:hover:text-slate-500"
            }>
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className={
              "text-slate-700 lg:text-slate-900 lg:hover:text-slate-500"
            }>
            <Link to={"/portofolio"}>Portofolio</Link>
          </li>
          <li
            className={
              "text-slate-700 lg:text-slate-900 lg:hover:text-slate-500"
            }>
            <Link to={"#"}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
