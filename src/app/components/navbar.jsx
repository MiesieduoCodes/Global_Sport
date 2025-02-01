"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NavMenu = () => {
  const [menu1Open, setMenu1Open] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-colors duration-300 ${
        isScrolled ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400" : "bg-transparent"
      } z-50 shadow-lg`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">Global Sports FC</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Nav Links */}
        <ul
          className={`lg:flex lg:space-x-6 lg:static lg:flex-row lg:bg-transparent lg:items-center flex-col w-full absolute top-16 left-0 right-0 p-6 bg-blue-600 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          {/* Home Link */}
          <li className="w-full text-center py-2">
            <Link
              href="#"
              className="text-white text-xl font-semibold hover:text-yellow-400 transition duration-300 block"
            >
              Home
            </Link>
          </li>

          {/* About Us Link */}
          <li className="w-full text-center py-2">
            <Link
              href="#"
              className="text-white text-xl font-semibold hover:text-yellow-400 transition duration-300 block"
            >
              About Us
            </Link>
          </li>

          {/* Football Gear Dropdown */}
          <li className="relative w-full text-center py-2">
            <button
              onClick={() => setMenu1Open(!menu1Open)}
              className="flex items-center justify-between w-full text-white text-xl font-semibold hover:text-yellow-400 transition duration-300"
            >
              Football Gear
              <svg
                className="w-4 h-3 ml-1.5"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L3.58579 3.58579C4.25245 4.25245 4.58579 4.58579 5 4.58579C5.41421 4.58579 5.74755 4.25245 6.41421 3.58579L9 1"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            {menu1Open && (
              <div className="animate-fade z-10 absolute left-0 right-0 bg-white rounded-lg shadow-lg p-4 mt-2">
                <div className="flex flex-col space-y-4">
                  <h6 className="font-semibold text-lg text-gray-500">Football Equipment</h6>
                  <ul className="text-lg text-gray-700">
                    <li>
                      <Link
                        href="#"
                        className="flex items-center space-x-4 text-gray-900 hover:text-blue-600"
                      >
                        <div className="bg-green-50 rounded-lg w-16 h-16 flex items-center justify-center">⚽</div>
                        <div>
                          <h5 className="text-xl font-semibold">Football Balls</h5>
                          <p className="text-sm text-gray-400">Premium quality football balls for all levels.</p>
                        </div>
                      </Link>
                    </li>
                    {/* Add additional items */}
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* Language Selector */}
          <li className="w-full text-center py-2">
            <select className="bg-transparent text-white border border-gray-300 rounded py-2 px-4">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              {/* Add more languages as needed */}
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
