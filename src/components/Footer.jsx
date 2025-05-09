import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col gap-4 md:flex-row justify-between items-start">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="dark-logo" />
          <p className="text-gray-400 mt-4 max-w-80">
            Discover your dream property with E-Estates, your trusted partner in
            real estate. From luxurious homes to modern apartments, we bring you
            the best listings tailored to your needs.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              Home
            </a>
            <a href="#About" className="hover:text-white">
              About Us
            </a>
            <a href="#Contact" className="hover:text-white">
              Contact Us
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mt-0">
          <h3 className="text-white text-lg font-bold mb-6">
            Suscribe to our news letter.
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            Latest news, articles, resources and updates, sent to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none focus:border-blue-500 w-full md:w-auto"
            />
            <button className="px-4 py-2  cursor-pointer rounded bg-blue-500 text-white hover:bg-blue-700">
              Suscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 text-center text-gray-500">
        Copyright © {new Date().getFullYear()} e-Estates. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
