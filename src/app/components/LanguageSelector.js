// components/LanguageSelector.js
import React, { useState, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";

const LanguageSelector = ({ currentLanguage = "en", onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const languages = ["en", "es", "fr"];
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".language-selector")) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") setIsOpen(false);
  };

  return (
    <div className="language-selector relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="flex items-center gap-2 px-3 py-2 rounded-md transition-colors
          bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
          text-gray-700 dark:text-gray-200"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5" />
        {currentLanguage.toUpperCase()}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-32 origin-top-right rounded-md shadow-lg
            bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700
            focus:outline-none transition-opacity"
        >
          <div className="p-1">
            {languages.map((lang) => (
              <button
                key={lang}
                role="menuitem"
                onClick={() => {
                  onLanguageChange(lang);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors
                  ${currentLanguage === lang 
                    ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300" 
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}
                `}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;