import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Appstate } from "../App";

const Nav = () => {
  const links = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "EXPLORE", link: "/explore" },
    { id: 3, name: "ABOUT", link: "/about" },
    { id: 4, name: "BLOG'S", link: "/blogs" },
  ];
  let [open, setOpen] = useState(false);
  const useAppstate = useContext(Appstate);

  const Handleclick = () => {
    
          useAppstate.setLogin(false)
    
  }
  return (
    <>
      <div className="shadow-md w-full font-montserrat absolute bg-[#0000009E]  top-0 left-0 z-10  ">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          <div className="font-light text-white text-2xl cursor-pointer flex items-center font-[Poppins] ">
            <span className="text-3xl text-white font-playfair mr-1 pt-2">
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
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            } md:opacity-100 opacity-0 `}
          >
            {links.map((item) => (
              <li
                key={item.name}
                className="md:ml-8 text-xl md:my-0 my-7 hover:scale-110 transition duration-300 ease-in-out "
              >
                <a
                  href={item.link}
                  className="text-white font-poppins hover:text-[#213E8C] "
                >
                  {item.name}
                </a>
              </li>
            ))}
            {useAppstate.login ? (
              <div className="flex">
                <li className=" mx-2">
                  <Link to={"/userinfo"}>
                    <Button>
                      <p className="normal-case  text-white text-xl px-2">
                        INFO
                      </p>
                    </Button>
                  </Link>
                </li>
                <li className="">
                  <button onClick={Handleclick}>

                    <p className="text-white font-poppins hover:text-[#213E8C]  text-xl md:my-2 my-7 hover:scale-110 transition duration-300 ease-in-out ">
                      LOGOUT
                    </p>
                  </button>
                  
                </li>
              </div>
            ) : (
              <li className="">
                <Link to={"/login"}>
                  <Button>
                    <p className="normal-case  text-white text-xl px-3">
                      LOGIN
                    </p>
                  </Button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
