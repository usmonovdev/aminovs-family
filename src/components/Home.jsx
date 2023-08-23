import React from "react";
import { About, BestSelling, Contact, Footer, Hero, Lead, Products, Sertificates } from "./index";

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
      <Footer />
    </div>
  );
};

export default Home;
