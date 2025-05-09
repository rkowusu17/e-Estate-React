import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import { nav } from "motion/react-client";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden"; // Disable scrolling when menu is open
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when menu is closed
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup to ensure scrolling is enabled when component unmounts
    };
  }, [showMobileMenu]);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("#navbar");
      if (window.scrollY > 0) {
        navbar.classList.add(
          "bg-amber-500/80",
          "fixed",
          "top-0",
          "w-full",
          "z-20"
        );
      } else {
        navbar.classList.remove("bg-amber-500/80", "z-20");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full z-10 " id="navbar">
      <nav className="container mx-auto flex justify-between items-center py-1  px-4 md:px-20 lg:px-32 bg-transparent">
        <a href="#Header">
          <img src={assets.logo} alt="logo" className="cursor-pointer w-48" />
        </a>
        <ul className="hidden md:flex gap-7 text-white font-semibold">
          <li>
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="cursor-pointer hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#Projects" className="cursor-pointer hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Testimonials"
              className="cursor-pointer hover:text-gray-400"
            >
              Testimonials
            </a>
          </li>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer">
          Sign Up
        </button>
        <img
          className="md:hidden w-7 h-7 cursor-pointer"
          src={assets.menu_icon}
          alt="menu-icon"
          onClick={() => setShowMobileMenu(true)}
        />
      </nav>
      {/* Mobile Menu (Optional) */}
      <nav
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0 fixed -left-full"
        } bg-white p-4 top-0 right-0 bottom-0  overflow-hidden transition-all duration-150`}
      >
        <div className="flex justify-end cursor-pointer">
          <img
            className="w-6"
            src={assets.cross_icon}
            alt="cancel-icon"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center justify-center gap-2 mt-10 px-5 text-large font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
            href="#Header"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
            href="#About"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
            href="#Projects"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
            href="#Testimonials"
          >
            Testimonials
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
