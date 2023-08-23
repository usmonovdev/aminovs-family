import React, { useState } from "react";
import logo from "../../image/logo.png";
import { navbarData } from "../../data/navbarData";
import burger from "../../image/icons/burger.svg";
import Mobile from "./Mobile";
import { Link as Scroll } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="custom-container">
      <div className="flex flex-row items-center justify-between py-4">
        <a href="/">
          <img src={logo} className="w-[80px]" />
        </a>
        <ul className="sm:flex hidden flex-row gap-3">
          {navbarData.map((data) => {
            return (
              <li key={data.id} className="cursor-pointer">
                <Scroll
                  to={data.link}
                  spy={true}
                  offset={-50}
                  smooth={true}
                  className="hover:text-[#2EDD99] text-black"
                >
                  {data.title}
                </Scroll>
              </li>
            );
          })}
        </ul>
        <img
          src={burger}
          alt="burget"
          className="cursor-pointer sm:hidden block w-[30px]"
          onClick={() => setOpen(!open)}
        />
        <Mobile open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Navbar;
