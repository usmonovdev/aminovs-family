import React from "react";
import leaf from "../image/leaf2.png"

const BestSelling = () => {
  return (
    <div className="custom-container py-8 lg:mt-4 mt-0">
      <div className="relative flex items-center justify-center">
        <img src={leaf} alt="leaf" className="lg:block hidden absolute w-[200px] left-0"/>
        <h1 className="text-[30px] font-bold text-center">Bizning <span className="text-[#2EDD99]">eng ko’p</span> sotilgan mahsulotlar</h1>
        <img src={leaf} alt="leaf" className="lg:block hidden absolute w-[200px] right-0 rotate-90"/>
      </div>
    </div>
  );
};

export default BestSelling;
