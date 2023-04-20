import React from "react";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [getToggle, setToggle] = useState(false);

  return (
    <nav className={"w-screen h-16 absolute top-0 border-b-2 border-slate-500"}>
      <div className='container mx-auto h-full flex items-center justify-between px-4 lg:px-0 text-white'>
        <h2 className={"text-3xl font-serif font-semibold"}>HaikalFadhilah</h2>
        <div
          className={
            "h-3/4 aspect-square flex justify-center items-center lg:hidden"
          }
        >
          <CgMenuRight size={30} onClick={() => setToggle(!getToggle)} />
        </div>
        <ul
          className={
            `lg:static absolute top-full w-screen lg:w-fit border-b-2 left-0 px-2 py-2  flex-col lg:flex lg:flex-row gap-2 items-center text-lg lg:text-lg lg:gap-4 lg:border-0 ${getToggle ? 'flex ' : 'hidden'}`
          }
        >
          <li className={"text-slate-500 lg:text-slate-900 lg:hover:text-slate-500"}><Link to={'/'}>Home</Link></li>
          <li className={"text-slate-500 lg:text-slate-900 lg:hover:text-slate-500"}><Link to={'/portofolio'}>Portofolio</Link></li>
          <li className={"text-slate-500 lg:text-slate-900 lg:hover:text-slate-500"}><Link to={'/about'}>About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
