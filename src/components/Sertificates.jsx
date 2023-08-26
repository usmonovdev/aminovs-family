import React from "react";
import drink from "../image/drinks_group.png";
import sert from "../image/sertificate.png";
import { useTranslation } from "react-i18next";

const Sertificates = () => {
  const { i18n } = useTranslation();
  return (
    <div className="custom-container" data-aos="fade-up">
      <h1 className="text-[30px] font-bold text-center">
        {i18n.language == "uz" ? (
          <>
            Bizning mahsulotlarimiz barcha{" "}
            <span className="text-[#2EDD99]">sifat darajalaridan</span> o'tgan
          </>
        ) : i18n.language == "ru" ? (
          <>
            Наша продукция прошла все{" "}
            <span className="text-[#2EDD99]">уровни качества</span>
          </>
        ) : (
          <>
            Our products have passed all{" "}
            <span className="text-[#2EDD99]">quality levels</span>
          </>
        )}
      </h1>
      <div className="w-full flex md:flex-row flex-col-reverse items-center p-8">
        <div className="md:w-[50%] w-full flex items-center justify-center">
          <img src={drink} alt="drink" className="lg:w-[70%] w-[50%]" />
        </div>
        <div className="md:w-[50%] w-full flex items-center justify-center">
          <img
            src={sert}
            alt="sert"
            className="lg:w-[80%] sm:w-[60%] w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Sertificates;
