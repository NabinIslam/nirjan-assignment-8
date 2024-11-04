import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-20">
      <div className="container space-y-3">
        <Link className="" to="/">
          <h3 className="font-bold text-2xl text-center">Gadget Heaven</h3>
        </Link>
        <p className="text-center text-sm">
          Leading the way in cutting-edge technology and innovation.
        </p>

        <hr className="bg-[#ddd]" />

        <div className="flex items-start justify-center gap-x-10">
          <div className="space-y-2">
            <h4 className="font-bold text-xl text-center">Services</h4>
            <ul className="space-y-1 text-center text-sm">
              <li>
                <Link to="/about-us/company-profile">Product Support</Link>
              </li>
              <li>
                <Link to="/about-us/team">Order Tracking</Link>
              </li>
              <li>
                <Link to="/about-us/careers">Shipping & Delivery</Link>
              </li>
              <li>
                <Link to="/about-us/careers">Returns</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-xl text-center">Company</h4>
            <ul className="space-y-1 text-center text-sm">
              <li>
                <Link to="/about-us/company-profile">About Us</Link>
              </li>
              <li>
                <Link to="/about-us/team">Careers</Link>
              </li>
              <li>
                <Link to="/about-us/careers">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-xl text-center">Legal</h4>
            <ul className="space-y-1 text-center text-sm">
              <li>
                <Link to="/about-us/company-profile">Terms of Service</Link>
              </li>
              <li>
                <Link to="/about-us/team">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/about-us/careers">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
