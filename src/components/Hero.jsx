import bg from "../image/home-bg.png";
import axios from "axios";
import { GET_INFO } from "../data/constats";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const [info, setInfo] = useState([]);
  const { i18n } = useTranslation();
  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://clean-juice.primetechgroup.uz/${i18n.language}/${GET_INFO}`
      );
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [i18n.language]);

  return (
    <>
      {info.map(({ description, title, image }, index) => {
        return (
          <>
            <div
              key={index}
              className="custom-container flex md:flex-row flex-col py-8 items-center"
              id="main"
              data-aos="fade-up"
            >
              <div className="md:w-[50%] w-full flex flex-col gap-3">
                <h1 className="text-[30px] font-bold">{title}</h1>
                <p>{description}</p>
              </div>
              <div className="md:w-[50%] w-full md:flex hidden items-center justify-center">
                <img
                  src={`${image == null ? bg : image}`}
                  className="w-[80%] h-fit"
                />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Hero;
