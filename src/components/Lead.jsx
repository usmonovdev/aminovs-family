import React from "react";
import lead from "../image/lead.png";
import arrow from "../image/icons/arrow.svg"

const Lead = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="custom-container py-8 flex md:flex-row flex-col-reverse gap-4 items-center">
        <div className="md:w-[50%] w-full flex flex-col gap-3">
          <h1 className="text-[30px] font-bold">
            Bizning jonkuyar <span className="text-[#2EDD99]">yetakchimiz</span>{" "}
            haqida
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the prin and typesetting
            industry Lorem Ipsum has been industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            e
          </p>
          <div className="w-full flex items-center relative">
            <button className="py-3 px-6 rounded-full bg-[#2EDD99] text-white">
              Ko'proq
            </button>
            <div className="cursor-pointer w-[30px] h-[30px] rounded-full bg-[#F1AA1F] flex items-center justify-center absolute left-[90px]">
              <img src={arrow} alt="arrow" className="w-[20px]"/>
            </div>
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
