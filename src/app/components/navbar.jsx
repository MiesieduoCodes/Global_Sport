"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    document.body.classList.toggle("dark", theme === "light");
  };

  const handleLanguageChange = (e) => {
    console.log("Language changed to:", e.target.value);
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className={`navbar ${isScrolled ? "bg-blue-600 shadow-lg" : "bg-base-100"}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost lg:hidden"
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
          {isMenuOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link href="/">Home</Link>
              </li>
              {[ 
                { title: "Sports", links: ["Football", "Basketball", "Tennis"] },
                { title: "Events", links: ["Olympics", "World Cup", "Champions League"] },
                { title: "News", links: ["Latest News", "Scores", "Player Stats"] },
                { title: "Football", links: ["Join Team", "Join Academy", "Training Sessions", "Merchandise"] }
              ].map((menu, index) => (
                <li key={index}>
                  <details>
                    <summary>{menu.title}</summary>
                    <ul className="p-2">
                      {menu.links.map((link, i) => (
                        <li key={i}>
                          <Link href={`/${link.toLowerCase().replace(" ", "-")}`}>{link}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ))}
            </ul>
          )}
        </div>
        <a className="btn btn-ghost text-xl">Global Sports</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          {[ 
            { title: "Sports", links: ["Football", "Basketball", "Tennis"] },
            { title: "Events", links: ["Olympics", "World Cup", "Champions League"] },
            { title: "News", links: ["Latest News", "Scores", "Player Stats"] },
            { title: "Football", links: ["Join Team", "Join Academy", "Training Sessions", "Merchandise"] }
          ].map((menu, index) => (
            <li key={index}>
              <details>
                <summary>{menu.title}</summary>
                <ul className="p-2">
                  {menu.links.map((link, i) => (
                    <li key={i}>
                      <Link href={`/${link.toLowerCase().replace(" ", "-")}`}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        <select
          className="bg-transparent text-black border border-black rounded px-2 py-1"
          onChange={handleLanguageChange}
          aria-label="Language selector"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
        </select>

        <button
          onClick={toggleTheme}
          className="text-black p-2 bg-transparent border border-black rounded transition-all duration-200"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </div>
  );
}
