import React from "react";
import logo from "../../image/logo.png";
import close from "../../image/icons/close.svg";
import { navbarData } from "../../data/navbarData";

const Mobile = ({ open, setOpen }) => {
  return (
    <>
      {open ? (
        <div className="w-full h-screen bg-[#fff] sm:hidden fixed top-0 left-0 py-4 px-4">
          <div className="w-full flex flex-row justify-between">
            <img src={logo} alt="logo" className="w-[80px]" />
            <img
              src={close}
              alt="close"
              className="w-[30px] cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <ul>
            {navbarData.map((data) => {
              return (
                <li className="py-3 border border-t-0 border-r-0 border-l-0">
                  <a href={`#${data.link}`} className="hover:text-[#2EDD99] text-black">{data.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Mobile;
