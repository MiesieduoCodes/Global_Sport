"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/app/components/mode-toggle";
import { motion, AnimatePresence } from "framer-motion";

// Navigation data
const Navdata = {
  navMain: [
    { title: "About", url: "/about" },
    {
      title: "Our Club",
      url: "#",
      items: [
        { title: "Administration", url: "/administration" },
        { title: "Club History", url: "/clubhistory" },
        { title: "Awards", url: "/awards" },
        { title: "Kids Club", url: "/kidscamp" },
        { title: "Global Sports For All", url: "/forall" },
        { title: "Partners", url: "/partners" },
      ],
    },
    {
      title: "Our Team",
      url: "#",
      items: [
        { title: "The Team", url: "/theteams" },
        { title: "Squad", url: "/squad" },
        { title: "Coaches", url: "/coaches" },
        { title: "Matches", url: "/matches" },
      ],
    },
    { title: "News", url: "/news" },
    { title: "Contact Us", url: "/contact" },
  ],
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  // Closes mobile menu and resets dropdown
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-16">
        {/* Logo with Image */}
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={closeMobileMenu}
        >
          <Image
            src="/images/Logo.jpg"
            alt="Global Sports FC Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <span className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Global Sports FC
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {Navdata.navMain.map((item, index) => (
            <div key={index} className="relative group">
              {item.items ? (
                <>
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        index === activeDropdown ? null : index
                      )
                    }
                    className="flex items-center px-4 py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    {item.title}{" "}
                    <ChevronDown
                      className={`w-4 h-4 ml-2 transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 min-w-[200px] z-50"
                      >
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.url}
                            onClick={closeMobileMenu}
                            className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.url}
                  onClick={closeMobileMenu}
                  className="px-4 py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white dark:bg-gray-900 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              {Navdata.navMain.map((item, index) => (
                <div key={index} className="mb-2">
                  {item.items ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            index === activeDropdown ? null : index
                          )
                        }
                        className="flex w-full items-center justify-between px-4 py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                      >
                        {item.title}{" "}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4"
                        >
                          {item.items.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.url}
                              onClick={closeMobileMenu}
                              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.url}
                      onClick={closeMobileMenu}
                      className="block px-4 py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 py-2">
                <ModeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
