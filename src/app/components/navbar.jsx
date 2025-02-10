"use client";
import React, { useState, useEffect } from "react";
import Navdata from "@/app/components/constants/navData";
import TransitionLink from "@/app/components/TransitionLink";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/app/components/mode-toggle";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuData, setMenuData] = useState(null);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
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
                    <ChevronDown
                      className={`w-4 h-4 ml-2 transition-transform ${
                        activeDropdownIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                    />
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
            </div>

            {/* Theme Toggle */}
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Full-Screen Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-full bg-white dark:bg-black text-black dark:text-white z-50 flex flex-col items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-5 right-5 text-black dark:text-white"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Mobile Menu Items */}
              <ul className="space-y-6 text-center">
                {menuData.navMain.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-2xl font-semibold"
                  >
                    <button onClick={() => toggleDropdown(index)} className="flex items-center">
                      {item.title}
                      {item.items && <ChevronDown className="w-5 h-5 ml-2" />}
                    </button>

                    {activeDropdownIndex === index && item.items && (
                      <ul className="mt-2 space-y-2 text-lg">
                        {item.items.map((subItem, subIndex) => (
                          <motion.li
                            key={subIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: subIndex * 0.1 }}
                          >
                            <TransitionLink href={subItem.url} label={subItem.title} />
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
      
