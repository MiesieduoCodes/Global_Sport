"use client";
import React, { useState, useEffect } from "react";
import Navdata from "@/app/components/constants/navData.json";
import TransitionLink from "@/app/components/TransitionLink";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/app/components/mode-toggle";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuData, setMenuData] = useState(null);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  // Load menu data
  useEffect(() => {
    setMenuData(Navdata);
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dropdown for desktop
  const toggleDropdown = (index) => {
    setActiveDropdownIndex((prev) => (prev === index ? null : index));
  };

  // Close mobile menu
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  if (!menuData) return <div className="h-16" />;

  return (
    <>
      {/* Top Contact Bar */}
      <div
        className={`fixed top-0 w-full z-50 text-sm py-2 px-4 bg-blue-600 text-white shadow-md transition-all duration-300 ${
          isScrolled ? "opacity-90" : "opacity-100"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+77273274755" className="hover:text-blue-200 transition-colors">
              +7 727 327 47 55
            </a>
            <a href="tel:+77025895922" className="hover:text-blue-200 transition-colors">
              +7 702 589 59 22
            </a>
          </div>
          <a href="mailto:info@gsfc.com" className="hover:text-blue-200 transition-colors">
            info@gsfc.com
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "top-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md"
            : "top-12 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <TransitionLink href="/" className="relative h-16 w-48">
              <img
                src="/images/Logo.jpg"
                alt="Global Sports FC Logo"
                className="object-contain hover:opacity-80 transition-opacity"
                style={{ position: "absolute", width: "100%", height: "100%" }}
              />
            </TransitionLink>
            <span className="ml-4 text-xl font-bold">Global Sports FC</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuData.navMain.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => item.items?.length > 0 && toggleDropdown(index)}
                onMouseLeave={() => item.items?.length > 0 && toggleDropdown(null)}
              >
                {item.items?.length > 0 ? (
                  <>
                    <button
                      className="flex items-center px-4 py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                      aria-expanded={activeDropdownIndex === index}
                    >
                      {item.title}
                      <ChevronDown
                        className={`w-4 h-4 ml-2 transition-transform ${
                          activeDropdownIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdownIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 min-w-[240px] bg-white dark:bg-gray-800 shadow-xl rounded-lg p-2 border border-gray-100 dark:border-gray-700 z-30"
                        >
                          {item.items.map((subItem, subIndex) => (
                            <TransitionLink
                              key={subIndex}
                              href={subItem.url}
                              className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                            >
                              {subItem.title}
                            </TransitionLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <TransitionLink
                    href={item.url}
                    className="px-4 py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    {item.title}
                  </TransitionLink>
                )}
              </div>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-800 dark:text-white"
            aria-label="Open menu"
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
              className="lg:hidden fixed top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-40"
            >
              <div className="container mx-auto px-4 py-4">
                {menuData.navMain.map((item, index) => (
                  <div key={index} className="mb-4">
                    {item.items?.length > 0 ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="flex items-center justify-between w-full px-4 py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                          aria-expanded={activeDropdownIndex === index}
                        >
                          {item.title}
                          <ChevronDown
                            className={`w-4 h-4 ml-2 transition-transform ${
                              activeDropdownIndex === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {activeDropdownIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4"
                          >
                            {item.items.map((subItem, subIndex) => (
                              <TransitionLink
                                key={subIndex}
                                href={subItem.url}
                                className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                                onClick={closeMobileMenu}
                              >
                                {subItem.title}
                              </TransitionLink>
                            ))}
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <TransitionLink
                        href={item.url}
                        className="block px-4 py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </TransitionLink>
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
    </>
  );
};

export default Navbar;