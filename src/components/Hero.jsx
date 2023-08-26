import bg from "../image/home-bg.png";
import axios from "../config/axios-config";
import { GET_INFO } from "../data/constats";
import { useEffect } from "react";
import { useState } from "react";

const Hero = () => {
  const [info, setInfo] = useState([]);
  const getData = async () => {
    try {
      const { data } = await axios.get(GET_INFO);
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
                <h1 className="text-[30px] font-bold">
                  {title}
                </h1>
                <p>
                  {description}
                </p>
              </div>
              <div className="md:w-[50%] w-full md:flex hidden items-center justify-center">
                <img src={`${image == null ? bg : image}`} className="w-[80%] h-fit" />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Hero;
