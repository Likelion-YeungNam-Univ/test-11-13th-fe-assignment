import React, { useState } from "react";
import LanguageContext from "./LanguageContext";
import translations from "../translations/translations";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ko");

  const t = (key) => {
    const keys = key.split(".");
    let result = translations[language];
    for (const k of keys) {
      result = result?.[k];
      if (!result) return key;
    }
    return result;
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
