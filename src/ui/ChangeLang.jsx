import React, { useState } from "react";
import { languageData } from "../data/languageData";
import { useTranslation } from "react-i18next";
import lng from "../image/icons/lng.svg";

const ChangeLang = () => {
  const [open, setOpen] = useState(false);

  const { i18n } = useTranslation();

  return (
    <div className="w-fit relative z-[1000]">
      <div onClick={() => setOpen(!open)} className="flex flex-row items-center rounded cursor-pointer gap-2 border-2 p-2 border-[#2EDD99] hover:bg-[#2EDD99]/[0.1] transition">
        <img src={lng} alt="langauge" className="w-[20px]" />
        <p className="capitalize">{i18n.language}</p>
      </div>
      <ul
        className={`${open ? "flex" : "hidden"} flex-col gap-1 absolute w-full`}
      >
        {languageData.map((data) => {
          return (
            <>
              {i18n.language == data.name ? (
                ""
              ) : (
                <li
                  onClick={() => {
                    i18n.changeLanguage(data.name)
                    setOpen(!open)
                  }}
                  className="capitalize py-2 bg-[#2EDD99] hover:bg-[#1cc785] transition mt-2 cursor-pointer text-white rounded text-center"
                >
                  {data.name}
                </li>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ChangeLang;
