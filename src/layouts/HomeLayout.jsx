import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link, Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <main>
      <Hero />
      <Banner />
      <section className="py-[50px]">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">
            Explore Cutting-Edge Gadgets
          </h2>
        </div>
        <div className="container flex items-start gap-5">
          <div className="basis-auto w-[300px]">
            <div className="bg-white p-5 rounded-xl space-y-5 border shadow-sm">
              <Link
                to="/"
                className="block py-4 px-8 text-white bg-[#9538E2] rounded-full"
              >
                All Products
              </Link>
              <Link
                to="/laptops"
                className="block py-4 px-8 text-white bg-[#9538E2] rounded-full"
              >
                Laptops
              </Link>
              <Link
                to="/phones"
                className="block py-4 px-8 text-white bg-[#9538E2] rounded-full"
              >
                Phones
              </Link>
              <Link
                to="/accessories"
                className="block py-4 px-8 text-white bg-[#9538E2] rounded-full"
              >
                Accessories
              </Link>
              <Link
                to="/smart-watches"
                className="block py-4 px-8 text-white bg-[#9538E2] rounded-full"
              >
                Smart Watches
              </Link>
            </div>
          </div>
          <div className="basis-full">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeLayout;
