import React from "react";

const Contact = () => {
  return (
    <div className="custom-container my-8 flex flex-col gap-4" id="contact">
      <h1 className="text-[30px] font-bold text-center">
        Biz bilan <span className="text-[#2EDD99]">bog'lanish</span>
      </h1>
      <div className="bg-[#5FE2AFCC] p-4 rounded-lg flex md:items-end items-start md:flex-row flex-col gap-4">
        <div className="flex flex-col gap-3 md:w-fit w-full">
          <label htmlFor="name" className="text-white">Ismingiz</label>
          <input
            type="text"
            id="name"
            className="px-4 py-3 rounded-lg outline-none"
            placeholder="Ismingiz"
          />
        </div>
        <div className="flex flex-col gap-3 md:w-fit w-full">
          <label htmlFor="name" className="text-white">Raqamingiz</label>
          <input
            type="text"
            id="name"
            className="px-4 py-3 rounded-lg outline-none"
            placeholder="Raqamingiz"
          />
        </div>
        <button className="md:w-fit w-full px-4 py-3 h-[50px] relative rounded-lg bg-[#2EDD99]">Yuborish</button>
      </div>
    </div>
  );
};

export default Contact;
