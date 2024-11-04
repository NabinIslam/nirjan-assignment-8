import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import ProductsLayout from "../layouts/ProductsLayout";

const Home = () => {
  return (
    <main>
      <Hero />
      <Banner />
      <ProductsLayout />
    </main>
  );
};

export default Home;
