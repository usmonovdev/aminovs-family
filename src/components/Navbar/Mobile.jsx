import React from "react";
import logo from "../../image/logo.png";
import close from "../../image/icons/close.svg";
import { navbarData } from "../../data/navbarData";
import { Link as Scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
import ChangeLang from "../../ui/ChangeLang";

const Mobile = ({ open, setOpen }) => {
  const { t } = useTranslation()
  return (
    <>
      {open ? (
        <div className="w-full h-screen bg-[#fff] sm:hidden fixed top-0 left-0 py-4 px-4 z-[1000]">
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
                <li className="py-3 border border-t-0 border-r-0 border-l-0 cursor-pointer" key={data.id}>
                  <Scroll
                  to={data.link}
                  spy={true}
                  offset={-50}
                  smooth={true}
                  className="hover:text-[#2EDD99] text-black"
                >
                  {t(data.title)}
                </Scroll>
                </li>
              );
            })}
            <li className="mt-3">
              <ChangeLang />
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Mobile;
