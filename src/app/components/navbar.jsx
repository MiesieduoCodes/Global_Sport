"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/app/components/mode-toggle";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Nav Data (Fixed)
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

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-16">
        {/* ✅ Logo */}
        <Link href="/" className="text-xl font-bold">
          Global Sports FC
        </Link>

        {/* ✅ Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {Navdata.navMain.map((item, index) => (
            <div key={index} className="relative group">
              {item.items ? (
                <>
                  <button
                    onClick={() => setActiveDropdown(index === activeDropdown ? null : index)}
                    className="flex items-center px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    {item.title} <ChevronDown className="w-4 h-4 ml-2" />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 bg-white dark:bg-gray-800 shadow-md rounded"
                      >
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.url}
                            className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link href={item.url} className="px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400">
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <ModeToggle />
        </div>

        {/* ✅ Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white dark:bg-gray-900 p-4"
          >
            {Navdata.navMain.map((item, index) => (
              <div key={index} className="mb-4">
                {item.items ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(index === activeDropdown ? null : index)}
                      className="flex w-full px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      {item.title} <ChevronDown className="w-4 h-4 ml-2" />
                    </button>
                    {activeDropdown === index && (
                      <motion.div className="pl-4">
                        {item.items.map((subItem, subIndex) => (
                          <Link key={subIndex} href={subItem.url} className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
                            {subItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </>
                ) : (
                  <Link href={item.url} className="block px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400">
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <ModeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
