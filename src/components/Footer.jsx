import React from "react";
import logo from "../image/logo.png";
import phone from "../image/icons/phone.svg";
import primeLogo from "../image/prime.png";
import { navbarData } from "../data/navbarData";
import { Link as Scroll } from "react-scroll";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="bg-[#F3F3F3]">
      <div className="custom-container py-8">
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <a href="/">
            <img src={logo} className="w-[80px]" />
          </a>
          <ul className="flex sm:flex-row flex-col sm:gap-3 gap-1">
            {navbarData.map((data) => {
              return (
                <li
                  key={data.id}
                  className="cursor-pointer p-[10px] transition text-black hover:text-white hover:bg-[#2EDD99] rounded sm:text-start text-center"
                >
                  <Scroll to={data.link} spy={true} offset={-50} smooth={true}>
                    {t(data.title)}
                  </Scroll>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full flex sm:flex-row flex-col justify-between">
          <ul className="flex flex-col gap-3">
            <li className="text-[#147D55] sm:text-start text-center text-[35px] font-semibold">
              {t("footer.adress.title")}
            </li>
            <li className="text-[#A9A9A9] sm:text-start text-center">
              {t("footer.adress.adress")}: 1000115, Kichik Xalka Yuli 3-31,
              Chilonzor tumani, Toshkent shahri.
            </li>
            <li className="text-[#A9A9A9] sm:text-start text-center">
              {t("footer.adress.production")}: Toshkent shahri, Sergeli tumani,
              Beshkent ko`cha 83-uy
            </li>
          </ul>
          <ul className="flex flex-col sm:items-start items-center gap-3">
            <li className="text-[#147D55] sm:hidden block sm:text-start text-center text-[35px] font-semibold">
              {t("footer.contact")}
            </li>
            <li>
              <ul className="flex flex-row gap-3 items-center">
                <img src={phone} className="w-[50px]" />
                <li className="flex flex-col gap-2">
                  <a href="tel:+998901200700" className="text-[#147D55]">+99890 120 07 00</a>
                  <a href="tel:+998955155415" className="text-[#147D55]">+99895 515 54 15</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="created flex sm:mx-0 mx-auto flex-row items-center gap-4 bg-[#2EDD99] py-2 px-8 rounded w-fit text-white">
                <a href="https://primetechgroup.uz" className="">
                  {i18n.language == "uz" ? (
                    <>Ishlab chiqaruvchi:</>
                  ) : i18n.language == "ru" ? (
                    <>Производится:</>
                  ) : (
                    <>Created by:</>
                  )}
                </a>
                <a href="https://primetechgroup.uz">
                  <img src={primeLogo} className="w-[40px]" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
