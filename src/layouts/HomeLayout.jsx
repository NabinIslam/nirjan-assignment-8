import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { NavLink, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const HomeLayout = () => {
  return (
    <main>
      <Helmet>
        <title>Gadget Heaven | Home</title>
      </Helmet>
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-4 px-8 rounded-full ${
                    isActive
                      ? "text-white bg-[#9538E2]"
                      : "text-[#66666A] bg-[#F2F2F3]"
                  }`
                }
              >
                All Products
              </NavLink>
              <NavLink
                to="/laptops"
                className={({ isActive }) =>
                  `block py-4 px-8 rounded-full ${
                    isActive
                      ? "text-white bg-[#9538E2]"
                      : "text-[#66666A] bg-[#F2F2F3]"
                  }`
                }
              >
                Laptops
              </NavLink>
              <NavLink
                to="/phones"
                className={({ isActive }) =>
                  `block py-4 px-8 ${
                    isActive
                      ? "text-white bg-[#9538E2]"
                      : "text-[#66666A] bg-[#F2F2F3]"
                  }  rounded-full`
                }
              >
                Phones
              </NavLink>
              <NavLink
                to="/smart-watches"
                className={({ isActive }) =>
                  `block py-4 px-8 ${
                    isActive
                      ? "text-white bg-[#9538E2]"
                      : "text-[#66666A] bg-[#F2F2F3]"
                  }  rounded-full`
                }
              >
                Smart Watches
              </NavLink>
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
