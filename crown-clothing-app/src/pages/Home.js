import React from "react";
import { FeaturedProducts, HomeDesign, Services, Contact } from "../components";

const Home = () => {
  return (
    <div>
      <HomeDesign />
      <FeaturedProducts />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
