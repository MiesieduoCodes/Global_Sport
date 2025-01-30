"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link for client-side routing

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
      className={`fixed w-full p-4 flex justify-between items-center transition-colors ${
        isScrolled ? 'bg-blue-600' : 'bg-transparent'
      }`}
    >
      <div className="text-white font-bold text-lg">
        <Link href="/">Global Sports</Link>
      </div>
      <ul
        className={`flex sm:space-x-6 ${
          isMenuOpen
            ? 'flex-col absolute bg-blue-600 sm:flex sm:relative sm:static w-full sm:w-auto'
            : 'hidden'
        }`}
      >
        <li>
          <Link href="/" className="text-white hover:text-gray-300 px-4 py-2 block">
            Home
          </Link>
        </li>
        <li className="relative group">
          <button className="text-white hover:text-gray-300 px-4 py-2">
            Sports
          </button>
          <ul className="absolute left-0 hidden mt-2 space-y-2 bg-blue-600 text-white group-hover:block">
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
          <button className="text-white hover:text-gray-300 px-4 py-2">
            Events
          </button>
          <ul className="absolute left-0 hidden mt-2 space-y-2 bg-blue-600 text-white group-hover:block">
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
          <button className="text-white hover:text-gray-300 px-4 py-2">
            News
          </button>
          <ul className="absolute left-0 hidden mt-2 space-y-2 bg-blue-600 text-white group-hover:block">
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
      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <select
          className="bg-transparent text-white"
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
          className="text-white p-2 bg-transparent border border-white rounded"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        {/* Hamburger for Mobile */}
        <button
          className="sm:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
