"use client";
import React, { useState, useEffect } from "react";
import Navdata from "@/app/components/constants/navData.json";
import TransitionLink from "@/app/components/TransitionLink";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/app/components/mode-toggle";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import LanguageSelector from "@/app/components/LanguageSelector";
import { useLanguage } from "@/app/context/LanguageContext";

const Navbar = () => {
  const [menuData, setMenuData] = useState(null);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();

  useEffect(() => {
    setMenuData(Navdata);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdownIndex((prev) => (prev === index ? null : index));
  };

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
            <a
              href="tel:+77273274755"
              className="hover:text-blue-200 transition-colors"
            >
              +7 727 327 47 55
            </a>
            <a
              href="tel:+77025895922"
              className="hover:text-blue-200 transition-colors"
            >
              +7 702 589 59 22
            </a>
          </div>
          <a
            href="mailto:info@gsfc.com"
            className="hover:text-blue-200 transition-colors"
          >
            info@gsfc.com
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "top-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md"
            : "top-12 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-20">
          {/* Logo */}
          <TransitionLink
            href={menuData.teams[0].url}
            className="relative h-16 w-48"
          >
            <Image
              src="/images/Logo.jpg" // Ensure this file exists in your /public/images folder
              alt="Global Sports FC Logo"
              fill
              className="object-contain hover:opacity-80 transition-opacity"
              priority
            />
          </TransitionLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuData.navMain.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => item.items && toggleDropdown(index)}
                onMouseLeave={() => item.items && toggleDropdown(null)}
              >
                {item.items ? (
                  <>
                    <button
                      className="flex items-center px-4 py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                      aria-expanded={activeDropdownIndex === index}
                      aria-controls={`dropdown-${index}`}
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
                          className="absolute top-full left-0 min-w-[240px] bg-white dark:bg-gray-800 shadow-xl rounded-lg p-2 border border-gray-100 dark:border-gray-700"
                          id={`dropdown-${index}`}
                        >
                          {item.items.map((subItem, subIndex) => (
                            <TransitionLink
                              key={subIndex}
                              href={subItem.url}
                              className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                              onClick={closeMobileMenu}
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
            <LanguageSelector
              currentLanguage={currentLanguage}
              onLanguageChange={changeLanguage}
            />
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

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              className="lg:hidden fixed inset-0 bg-white dark:bg-gray-900 z-50 p-6"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-gray-800 dark:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="space-y-4">
                {menuData.navMain.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 dark:border-gray-800 pb-4">
                    {item.items ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="w-full flex justify-between items-center py-3 text-gray-800 dark:text-white"
                          aria-expanded={activeDropdownIndex === index}
                        >
                          <span>{item.title}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              activeDropdownIndex === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdownIndex === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-2"
                            >
                              {item.items.map((subItem, subIndex) => (
                                <TransitionLink
                                  key={subIndex}
                                  href={subItem.url}
                                  className="block py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                                  onClick={closeMobileMenu}
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
                        className="block py-3 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </TransitionLink>
                    )}
                  </div>
                ))}
                <div className="pt-4">
                  <ModeToggle />
                  <LanguageSelector
                    currentLanguage={currentLanguage}
                    onLanguageChange={changeLanguage}
                  />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
