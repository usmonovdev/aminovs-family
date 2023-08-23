import React from "react";
import cube from "../image/cube.png";
import { GET_ABOUT } from "../data/constats";
import axios from "../config/axios-config";
import { useEffect } from "react";
import { useState } from "react";

const About = () => {
  const [info, setInfo] = useState([]);
  console.log(info, "info");
  const getInfo = async () => {
    try {
      const { data } = await axios.get(GET_ABOUT);
      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="custom-container mb-8" id="about" data-aos="fade-up">
      {info.map(({ description, image, title }, index) => {
        return (
          <>
            <div className="relative" key={index}>
              <img
                src={cube}
                alt="cube"
                className="cube-animation w-[100px] absolute top-3"
              />
              <h1 className="text-[30px] font-bold text-center">
                Bizning <span className="text-[#2EDD99]">kompaniya</span> haqida
              </h1>
              <img
                src={cube}
                alt="cube"
                className="cube-animation2 w-[100px] absolute top-3 right-0"
              />
            </div>
            <div className="w-full mt-8 rounded-lg flex md:flex-row flex-col-reverse p-4 bg-[#F3F3F3]">
              <div className="md:w-[50%] w-full">
                <p className="p-4">{description}</p>
              </div>
              <div className="md:w-[50%] w-full">
                <img src={image} alt={title} />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default About;
