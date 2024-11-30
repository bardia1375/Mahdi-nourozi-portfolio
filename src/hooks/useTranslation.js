import React, { createContext, useContext, useState } from "react";
import enTranslations from "../lang/en.json";
import faTranslations from "../lang/fa.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const savedLanguage =
    typeof window !== "undefined" ? localStorage.getItem("appLanguage") : "en";
  const [language, setLanguage] = useState("en");

  const translations = {
    en: enTranslations,
    fa: faTranslations,
  };

  const t = (key) => translations[language][key] || key;

  const changeLanguage = (lang) => {
    setLanguage(lang);
    // if (typeof window !== "undefined") {
    //   localStorage.setItem("appLanguage", lang); // ذخیره زبان در localStorage
    // }
  };

  return (
    <LanguageContext.Provider value={{ t, changeLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
