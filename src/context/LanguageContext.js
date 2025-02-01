"use client";
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("en");
  const router = useRouter();

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale") || "en";
    setLocale(storedLocale);
  }, []);

  const changeLanguage = (lang) => {
    setLocale(lang);
    localStorage.setItem("locale", lang);
    router.refresh(); // Refresh if needed
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
