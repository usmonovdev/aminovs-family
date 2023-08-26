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
        <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between">
          <a href="/">
            <img src={logo} className="w-[80px]" />
          </a>
          <ul className="flex flex-row gap-3">
            {navbarData.map((data) => {
              return (
                <li
                  key={data.id}
                  className="cursor-pointer p-[10px] transition text-black hover:text-white hover:bg-[#2EDD99] rounded"
                >
                  <Scroll to={data.link} spy={true} offset={-50} smooth={true}>
                    {t(data.title)}
                  </Scroll>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="">
          <li className="text-[#147D55] text-[35px] font-semibold">
            {t("footer.adress.title")}
          </li>
          <li className="text-[#A9A9A9]">
            {t("footer.adress.adress")}: 1000115, Kichik Xalka Yuli 3-31,
            Chilonzor tumani, Toshkent shahri.
          </li>
          <li className="text-[#A9A9A9]">
            {t("footer.adress.production")}: Toshkent shahri, Sergeli tumani,
            Beshkent ko`cha 83-uy
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="text-[#147D55] text-[35px] font-semibold">
            {t("footer.contact")}
          </li>
          <li className="text-[#A9A9A9] flex flex-row gap-4">
            <img src={phone} className="w-[25px]" />
            <a href="tel:+998901200700">+99890 120 07 00</a>
          </li>
          <li className="text-[#A9A9A9] flex flex-row gap-4">
            <img src={phone} className="w-[25px]" />
            <a href="tel:+998955155415">+99895 515 54 15</a>
          </li>
        </ul>
        <div className="flex flex-row items-center gap-4 mt-8 bg-[#2EDD99] p-2 rounded w-fit text-white">
          <a href="https://primetechgroup.uz">
            <img src={primeLogo} className="w-[50px]" />
          </a>
          <a href="https://primetechgroup.uz" className="">
            {i18n.language == "uz" ? (
              <>Prime tech tomonidan ishlab chiqarilgan.</>
            ) : i18n.language == "ru" ? (
              <>Производится Prime tech.</>
            ) : (
              <>Produced by Prime tech.</>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
