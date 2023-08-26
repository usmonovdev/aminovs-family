import React from "react";
import lead from "../image/lead.png";
import arrow from "../image/icons/arrow.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Lead = () => {
  const { i18n, t } = useTranslation();
  return (
    <div className="bg-[#F8F8F8]" data-aos="fade-up">
      <div className="custom-container py-8 flex md:flex-row flex-col-reverse gap-4 items-center">
        <div className="md:w-[50%] w-full flex flex-col gap-3">
          <h1 className="text-[30px] font-bold">
            {i18n.language == "uz" ? (
              <>
                Bizning jonkuyar{" "}
                <span className="text-[#2EDD99]">yetakchimiz</span> haqida
              </>
            ) : i18n.language == "ru" ? (
              <>
                О нашем <span className="text-[#2EDD99]">страстном</span> лидере
              </>
            ) : (
              <>
                About our <span className="text-[#2EDD99]">passionate</span> leader
              </>
            )}
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the prin and typesetting
            industry Lorem Ipsum has been industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            e
          </p>
          <div className="w-full">
            <Link to={"/leader"} className=" flex items-center relative">
              <button className="py-3 w-[103px] rounded-full bg-[#2EDD99] text-white">
                {t("helpers.more")}
              </button>
              <div className="cursor-pointer w-[30px] h-[30px] rounded-full bg-[#F1AA1F] flex items-center justify-center absolute left-[90px]">
                <img src={arrow} alt="arrow" className="w-[20px]" />
              </div>
            </Link>
          </div>
        </div>
        <div className="md:w-[50%] w-full flex items-center justify-center">
          <img src={lead} className="w-[50%]" />
        </div>
      </div>
    </div>
  );
};

export default Lead;
