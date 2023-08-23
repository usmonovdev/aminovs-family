import React from "react";
import cube from "../image/cube.png";

const About = () => {
  return (
    <div className="custom-container mb-8" id="about" data-aos="fade-up">
      <div className="relative">
        <img src={cube} alt="cube" className="cube-animation w-[100px] absolute top-3" />
        <h1 className="text-[30px] font-bold text-center">
          Bizning <span className="text-[#2EDD99]">kompaniya</span> haqida
        </h1>
        <img
          src={cube}
          alt="cube"
          className="cube-animation2 w-[100px] absolute top-3 right-0"
        />
      </div>
      <div className="w-full mt-8 rounded-lg flex flex-row bg-[#F3F3F3]">
        <p className="p-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere vero
          praesentium cum perspiciatis, adipisci autem porro ex maiores
          similique, placeat omnis. Quaerat laboriosam itaque similique
          voluptates sint ex delectus dolor magni perferendis adipisci! Numquam
          repellat perspiciatis corporis beatae earum eius eligendi quaerat
          fugiat? Voluptatibus dolor eaque laudantium nobis? Ea explicabo
          deleniti autem, officiis nobis iusto illum id accusamus dolor, odit
          quod labore quis inventore deserunt sit, tempora hic magnam incidunt
          laboriosam obcaecati totam. Aliquam, suscipit unde est molestias
          facere officia a necessitatibus ipsum eum obcaecati nesciunt sint
          ducimus veniam, autem ratione earum inventore qui dignissimos
          provident. Nobis repellat magni sit.
        </p>
      </div>
    </div>
  );
};

export default About;
