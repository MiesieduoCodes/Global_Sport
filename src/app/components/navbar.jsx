"use client";

import { useState } from "react";
import Link from "next/link";

const NavMenu = () => {
  const [menu1Open, setMenu1Open] = useState(false);
  const [menu2Open, setMenu2Open] = useState(false);

  return (
    <ul className="flex lg:items-center lg:justify-center flex-col gap-6 lg:gap-0 lg:pt-0 lg:mb-0 lg:mt-0 lg:flex-row lg:mx-auto">
      {/* Home Link */}
      <li>
        <Link
          href="#"
          className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-xl text-gray-500 font-semibold transition-all duration-500 hover:text-gray-900"
        >
          Home
        </Link>
      </li>
      
      {/* About Us Link */}
      <li>
        <Link
          href="#"
          className="nav-link mb-2 block lg:mr-6 md:mb-0 lg:text-left text-xl text-gray-500 font-semibold transition-all duration-500 hover:text-gray-900"
        >
          About Us
        </Link>
      </li>

      {/* Products Dropdown */}
      <li className="relative">
        <button
          onClick={() => setMenu1Open(!menu1Open)}
          className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-xl font-semibold hover:text-prime-blue-700 transition-all duration-500 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-900"
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
          <div className="animate-fade z-10 relative top-3 lg:absolute lg:top-14 left-0 bg-white rounded-lg shadow-lg p-4 lg:min-w-[900px] md:min-w-[600px] min-w-full">

            <div className="flex flex-col md:flex-row justify-between">
              <ul className="text-lg text-gray-700 md:w-1/2">
                <h6 className="font-semibold text-lg text-gray-500 mb-3">Football Equipment</h6>
                <li>
                  <Link
                    href="#"
                    className="px-4 py-6 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                  >
                    <div className="bg-green-50 rounded-lg w-16 h-16 flex items-center justify-center">
                      ⚽
                    </div>
                    <div className="ml-4 w-4/5">
                      <h5 className="text-gray-900 text-xl mb-2 font-semibold">Football Balls</h5>
                      <p className="text-sm font-medium text-gray-400">
                        Premium quality football balls for all levels.
                      </p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="px-4 py-6 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                  >
                    <div className="bg-blue-50 rounded-lg w-16 h-16 flex items-center justify-center">
                      👟
                    </div>
                    <div className="ml-4 w-4/5">
                      <h5 className="text-gray-900 text-xl mb-2 font-semibold">Football Cleats</h5>
                      <p className="text-sm font-medium text-gray-400">
                        Stylish and durable cleats for better performance.
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
              <ul className="text-lg text-gray-700 md:w-1/2">
                <h6 className="font-semibold text-lg text-gray-500 mb-3">Football Accessories</h6>
                <li>
                  <Link
                    href="#"
                    className="px-4 py-6 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                  >
                    <div className="bg-red-50 rounded-lg w-16 h-16 flex items-center justify-center">
                      🧤
                    </div>
                    <div className="ml-4 w-4/5">
                      <h5 className="text-gray-900 text-xl mb-2 font-semibold">Goalkeeper Gloves</h5>
                      <p className="text-sm font-medium text-gray-400">
                        Protect your hands with premium goalkeeper gloves.
                      </p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="px-4 py-6 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center"
                  >
                    <div className="bg-yellow-50 rounded-lg w-16 h-16 flex items-center justify-center">
                      🦵
                    </div>
                    <div className="ml-4 w-4/5">
                      <h5 className="text-gray-900 text-xl mb-2 font-semibold">Shin Guards</h5>
                      <p className="text-sm font-medium text-gray-400">
                        Protect your legs with lightweight and effective shin guards.
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </li>

      {/* Football News Dropdown */}
      <li className="relative">
        <button
          onClick={() => setMenu2Open(!menu2Open)}
          className="dropdown-toggle flex items-center justify-between text-gray-500 text-center text-xl font-semibold hover:text-prime-blue-700 transition-all duration-500 lg:mr-6 lg:mb-0 mr-auto lg:text-left lg:m-0 hover:text-gray-900"
        >
          Football News
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
        {menu2Open && (
          <div className="dropdown-menu z-10 relative top-3 lg:absolute lg:top-14 left-0 font-normal bg-white rounded-lg shadow-md shadow-gray-200 w-64 p-2">
            <ul className="text-lg text-gray-700">
              <h6 className="text-lg text-gray-500 font-semibold mb-3">Latest News</h6>
              <li>
                <Link
                  href="#"
                  className="block py-4 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                >
                  Champions League Updates
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-4 hover:text-prime-blue-700 text-base text-gray-900 font-semibold transition-all duration-500"
                >
                  World Cup Qualifiers
                </Link>
              </li>
            </ul>
          </div>
        )}
      </li>
    </ul>
  );
};

export default NavMenu;
