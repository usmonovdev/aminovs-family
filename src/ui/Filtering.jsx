import React, { useState } from "react";
import arrowPrew from "../image/icons/arrow-prev.png";
import arrowNext from "../image/icons/arrow-next.png";

const filteringData = [
  {
    id: 1,
    title: "Barcha mahsulotlar",
    value: "",
  },
  {
    id: 2,
    title: "Diva",
    value: "",
  },
  {
    id: 3,
    title: "Lux well",
    value: "",
  },
  {
    id: 4,
    title: "Fructos",
    value: "",
  },
];

const Filtering = () => {
  const [filtered, setFiltered] = useState(1);
  console.log(filtered);

  const prewClick = () => {
    if (filtered == 1) {
      return;
    } else {
      setFiltered(filtered - 1);
    }
  };

  return (
    <div className="lg:w-[60%] md:w-[80%] w-full mt-8 mx-auto bg-[#F5F5F5] px-3 rounded-lg sm:flex hidden flex-row items-center justify-between">
      <img
        src={arrowPrew}
        className={`w-[25px] block ${
          filtered == 1 ? "opacity-10 cursor-not-allowed" : ""
        }`}
        onClick={prewClick}
      />
      <ul className="flex flex-row justify-between w-full px-4">
        {filteringData.map((data) => {
          return (
            <li
              key={data.id}
              className={`cursor-pointer py-3 px-4 rounded-full transition ${
                filtered == data.id ? "bg-[#2EDD99] text-white" : ""
              }`}
              onClick={() => setFiltered(data.id)}
            >
              {data.title}
            </li>
          );
        })}
      </ul>
      <img
        src={arrowNext}
        className={`w-[25px] block ${
          filtered == filteringData.length
            ? "opacity-10 cursor-not-allowed"
            : ""
        }`}
      />
    </div>
  );
};

export default Filtering;
