import React from "react";
import drink from "../image/drink2.png"
import sert from "../image/sertificate.png"

const Sertificates = () => {
  return (
    <div className="custom-container">
      <h1 className="text-[30px] font-bold text-center">
        Bizning mahsulotlarimiz barcha{" "}
        <span className="text-[#2EDD99]">sifat darajalaridan</span> o'tgan
      </h1>
      <div className="w-full flex md:flex-row flex-col-reverse items-center p-8">
        <div className="md:w-[50%] w-full flex items-center justify-center">
          <img src={drink} alt="drink" className="lg:w-[20%] w-[40%]"/>
          <img src={drink} alt="drink" className="lg:w-[20%] w-[40%]"/>
          <img src={drink} alt="drink" className="lg:w-[20%] w-[40%]"/>
        </div>
        <div className="md:w-[50%] w-full flex items-center justify-center">
          <img src={sert} alt="sert" className="lg:w-[50%] sm:w-[60%] w-[70%]"/>
        </div>
      </div>
    </div>
  );
};

export default Sertificates;
