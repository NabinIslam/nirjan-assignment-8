import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Header = () => {
  const { pathname } = useLocation();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const shouldUsePurpleBg =
    pathname === "/dashboard" ||
    pathname === "/statistics" ||
    /^\/product-details\/\d+$/.test(pathname);

  return (
    <header
      className={`${
        shouldUsePurpleBg ? "bg-white text-black" : "bg-[#9538E2] text-white"
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
              to="/about-us"
            >
              About Us
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
          <button className="relative bg-white text-black text-xl p-2 rounded-full">
            <IoCartOutline />
            {cart.length >= 1 && (
              <span className="absolute top-0 right-0 bg-red-700 text-white text-xs px-[5px] rounded-full">
                {cart.length}
              </span>
            )}
          </button>
          <button className="relative bg-white text-black text-xl p-2 rounded-full">
            <IoMdHeartEmpty />
            {wishlist.length >= 1 && (
              <span className="absolute top-0 right-0 bg-red-700 text-white text-xs px-[5px] rounded-full">
                {wishlist.length}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
