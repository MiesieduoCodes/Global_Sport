"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link for client-side routing
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Change navbar background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark/light theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    document.body.classList.toggle('dark', theme === 'light');
  };

  // Handle Language change (you can expand this logic with actual language switching)
  const handleLanguageChange = (e) => {
    console.log('Language changed to:', e.target.value); // Placeholder
  };

  return (
    <nav
      className={`fixed w-full p-4 flex justify-between items-center transition-all ease-in-out duration-300 ${
        isScrolled ? 'bg-blue-600 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/WhatsApp Image 2025-01-29 at 18.17.18_0b547839.jpg"
            alt="Team 2 Logo"
            width={70}
            height={70}
          />
          <span className="text-white font-semibold text-xl">Global Sports</span>
        </div>

        {/* Main navigation links */}
        <ul
          className={`flex space-x-6 items-center transition-all ease-in-out duration-300 ${
            isMenuOpen
              ? 'flex-col absolute bg-blue-600 sm:flex sm:relative sm:static w-full sm:w-auto'
              : 'hidden sm:flex'
          }`}
        >
          <li>
            <Link href="/" className="text-white hover:text-yellow-300 px-4 py-2 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li className="relative group">
            <button className="text-white hover:text-yellow-300 px-4 py-2 transition-colors duration-200">
              Sports
            </button>
            <ul className="absolute left-0 hidden mt-2 space-y-2 bg-blue-600 text-white group-hover:block transition-all duration-200">
              <li>
                <Link href="/football" className="block px-4 py-2">
                  Football
                </Link>
              </li>
              <li>
                <Link href="/basketball" className="block px-4 py-2">
                  Basketball
                </Link>
              </li>
              <li>
                <Link href="/tennis" className="block px-4 py-2">
                  Tennis
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button className="text-white hover:text-yellow-300 px-4 py-2 transition-colors duration-200">
              Events
            </button>
            <ul className="absolute left-0 hidden mt-2 space-y-2 bg-blue-600 text-white group-hover:block transition-all duration-200">
              <li>
                <Link href="/olympics" className="block px-4 py-2">
                  Olympics
                </Link>
              </li>
              <li>
                <Link href="/world-cup" className="block px-4 py-2">
                  World Cup
                </Link>
              </li>
              <li>
                <Link href="/champions-league" className="block px-4 py-2">
                  Champions League
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button className="text-white hover:text-yellow-300 px-4 py-2 transition-colors duration-200">
              News
            </button>
            <ul className="absolute left-0 hidden mt-2 space-y-2 bg-blue-600 text-white group-hover:block transition-all duration-200">
              <li>
                <Link href="/latest-news" className="block px-4 py-2">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/scores" className="block px-4 py-2">
                  Scores
                </Link>
              </li>
              <li>
                <Link href="/player-stats" className="block px-4 py-2">
                  Player Stats
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Controls for Language, Theme and Mobile menu */}
      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <select
          className="bg-transparent text-white border border-white rounded px-2 py-1"
          onChange={handleLanguageChange}
          aria-label="Language selector"
        >
          <option value="en">EN</option>
          <option value="es">ES</option>
          <option value="fr">FR</option>
        </select>

        {/* Light/Dark Toggle */}
        <button
          onClick={toggleTheme}
          className="text-white p-2 bg-transparent border border-white rounded transition-all duration-200"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        {/* Hamburger for Mobile */}
        <button
          className="sm:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
