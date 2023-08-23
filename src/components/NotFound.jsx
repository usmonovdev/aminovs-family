import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[400px] w-screen flex items-center justify-center flex-col gap-3">
      <h1 className="text-[30px] font-bold">Sahifa topilmadi!</h1>
      <Link to={'/'} className="text-[#2EDD99]">Ortga qaytish</Link>
    </div>
  );
};

export default NotFound;
