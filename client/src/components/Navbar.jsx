import React, { useState } from "react";
import { Button } from "@mui/material";


const Nav = () => {
  const links = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "EXPLORE", link: "/explore" },
    { id: 3, name: "ABOUT", link: "/about" },
    { id: 4, name: "BLOG'S", link: "/blog" },
    { id: 5, name: "INFO ", link: "/travelinfo" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md w-full font-montserrat fixed top-0 left-0 z-10  ">
        <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-[#2A70DE]">
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <ion-icon name="logo-ionic" className="text-white"></ion-icon>
            </span>
            TRAVMATE
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            } md:opacity-100 opacity-0 `}
          >
            {links.map((item) => (
              <li key={item.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={item.link}
                  className="text-[#2A70DE] hover:text-[#213E8C] duration-500 "
                >
                  {item.name}
                </a>
              </li>
            ))} 
            <li className=" mx-4">
              <Button><p className=" bg-blue-600 text-white text-xl px-4 py-3 rounded">Login</p></Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
