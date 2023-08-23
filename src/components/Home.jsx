import React from "react";
import { About, BestSelling, Contact, Hero, Lead, Products, Sertificates } from "./index";

const Home = () => {
  return (
    <div>
      <Hero />
      <Lead />
      <BestSelling />
      <Products />
      <About />
      <Sertificates />
      <Contact />
    </div>
  );
};

export default Home;
