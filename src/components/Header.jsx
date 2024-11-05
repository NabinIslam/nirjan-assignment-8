import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

const Header = () => {
  const { pathname } = useLocation();

  const isProductDetailsPage = /^\/product-details\/\d+$/.test(pathname);

  return (
    <header
      className={`${
        pathname === "/statistics" || "/dashboard" || isProductDetailsPage
          ? "bg-white text-black"
          : "bg-[#9538E2] text-white"
      } py-5`}
    >
      <nav className="container flex items-center justify-between">
        <div className="basis-[25%] flex items-center justify-start">
          <Link className="" to="/">
            <h3 className="font-bold text-2xl">Gadget Heaven</h3>
          </Link>
        </div>

        <ul className="flex items-center justify-center text-sm gap-x-5 basis-[50%]">
          <li>
            <NavLink
              className={({ isActive }) => isActive && "underline"}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive && "underline"}
              to="/statistics"
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive && "underline"}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
        </ul>

        <div className="flex items-center justify-end gap-x-2 basis-[25%]">
          <button className="bg-white text-black text-xl p-2 rounded-full">
            <IoCartOutline />
          </button>
          <button className="bg-white text-black text-xl p-2 rounded-full">
            <IoMdHeartEmpty />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
