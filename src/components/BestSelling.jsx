import React from "react";
import leaf from "../image/leaf2.png";
import { useTranslation } from "react-i18next";

const BestSelling = () => {
  const { i18n } = useTranslation();
  return (
    <div
      className="custom-container pt-4 lg:mt-4 mt-0"
      id="drinks"
      data-aos="fade-up"
    >
      <div className="relative flex items-center justify-center">
        <img
          src={leaf}
          alt="leaf"
          className="leaf-animation lg:block hidden absolute w-[200px] left-0"
        />
        <h1 className="text-[30px] font-bold text-center">
          {i18n.language == "uz" ? (
            <>
              Bizning <span className="text-[#2EDD99]">eng ko’p</span> sotilgan
              mahsulotlar
            </>
          ) : i18n.language == "ru" ? (
            <>
              Наши <span className="text-[#2EDD99]">самые продаваемые</span>{" "}
              продукты
            </>
          ) : (
            <>
              Our <span className="text-[#2EDD99]">best-selling</span> products
            </>
          )}
        </h1>
        <img
          src={leaf}
          alt="leaf"
          className="leaf-animation2 lg:block hidden absolute w-[200px] right-0"
        />
      </div>
    </div>
  );
};

export default BestSelling;
