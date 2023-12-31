import React, { useState } from "react";
import arrowPrew from "../image/icons/arrow-prev.png";
import arrowNext from "../image/icons/arrow-next.png";
import { useTranslation } from "react-i18next";

const filteringData = [
  {
    id: 1,
    title: "helpers.all",
    value: "all",
  },
  {
    id: 2,
    title: "Diva",
    value: "Diva",
  },
  {
    id: 3,
    title: "Lux well",
    value: "Lux",
  },
  {
    id: 4,
    title: "Fructos",
    value: "Fructis",
  },
];

const Filtering = ({ selected, setSelected }) => {
  const [filtered, setFiltered] = useState(1);
  const { t } = useTranslation();

  const prewClick = () => {
    if (filtered == 1) {
      return;
    } else {
      setFiltered(filtered - 1);
    }
  };

  const nextClick = () => {
    if (filtered == filteringData.length) {
      return;
    } else {
      setFiltered(filtered + 1);
    }
  };

  return (
    <div className="custom-container">
      <div className="lg:w-[60%] md:w-[80%] w-full mt-8 mx-auto bg-[#F5F5F5] px-3 rounded-lg sm:flex hidden flex-row items-center justify-between">
        <img
          src={arrowPrew}
          className={`w-[25px] block ${
            filtered == 1 ? "opacity-10 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={prewClick}
        />
        <ul className="flex flex-row justify-between w-full px-4">
          {filteringData.map((data) => {
            return (
              <li
                key={data.id}
                className={`cursor-pointer py-3 px-4 rounded-full transition hover:bg-[#2EDD99] hover:text-white ${
                  filtered == data.id ? "bg-[#2EDD99] text-white" : ""
                }`}
                onClick={() => {
                  setFiltered(data.id);
                  setSelected(data.value);
                }}
              >
                {t(data.title)}
              </li>
            );
          })}
        </ul>
        <img
          src={arrowNext}
          className={`w-[25px] block ${
            filtered == filteringData.length
              ? "opacity-10 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={nextClick}
        />
      </div>
    </div>
  );
};

export default Filtering;
