"use client";
import React, { useState, useEffect } from "react";
import Navdata from "@/app/components/constants/navData";
import TransitionLink from "@/app/components/TransitionLink";
import { Menu, X, ChevronDown, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/app/components/mode-toggle";

const Navbar = () => {
  const [menuData, setMenuData] = useState(null);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setMenuData(Navdata);
  }, []);

  if (!menuData) {
    return <div>Loading...</div>;
  }

  const toggleDropdown = (index) => {
    setActiveDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-500 dark:bg-gray-900 text-white w-full fixed text-sm py-2 px-4 flex justify-between items-center z-50 top-0 shadow-md">
        <div className="flex space-x-6 text-xs md:text-sm">
          <span>Email: globalsportint2017@gmail.com</span>
          <span>Phone: +77273274755, +77025895922</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300 font-medium">FAQ</a>
          <a href="#" className="hover:text-gray-300 font-medium">Support</a>
          <a href={menuData.user.url} className="hover:text-gray-300 font-medium">Contact</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white dark:bg-black text-black dark:text-white shadow-md fixed w-full z-40 top-8">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-3xl font-bold hover:text-gray-500">
            <TransitionLink href={menuData.teams[0].url} label={menuData.teams[0].name} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center">
            {menuData.navMain.map((item, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="flex items-center font-semibold px-4 py-2 hover:text-gray-500 transition"
                >
                  {item.title}
                  {item.items && (
                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${activeDropdownIndex === index ? "rotate-180" : "rotate-0"}`} />
                  )}
                </button>
                {activeDropdownIndex === index && item.items && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg border rounded-lg p-2">
                    <ul>
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="px-4 py-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
                          <TransitionLink href={subItem.url} label={subItem.title} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side: Language & Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button className="flex items-center space-x-2 font-semibold hover:text-gray-500">
                <Globe className="w-5 h-5" />
                <span>{language.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg border rounded-lg p-2 hidden group-hover:block">
                <ul>
                  {["en", "es", "fr", "de"].map((lang) => (
                    <li
                      key={lang}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
                      onClick={() => setLanguage(lang)}
                    >
                      {lang.toUpperCase()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Theme Toggle */}
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-black text-black dark:text-white shadow-md p-4">
            <ul className="space-y-4">
              {menuData.navMain.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center w-full justify-between px-4 py-2 font-semibold"
                  >
                    {item.title}
                    {item.items && <ChevronDown className="w-4 h-4" />}
                  </button>
                  {activeDropdownIndex === index && item.items && (
                    <ul className="mt-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
                      {item.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg">
                          <TransitionLink href={subItem.url} label={subItem.title} />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
