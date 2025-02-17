// context/LanguageContext.js
"use client";
import React, { createContext, useContext, useState } from 'react';

// Create a Language Context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Default language

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    // You can add additional logic here for translation handling
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the Language Context
export const useLanguage = () => {
  return useContext(LanguageContext);
};