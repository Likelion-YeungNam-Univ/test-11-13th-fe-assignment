import React, { useState } from "react";
import LanguageContext from "./LanguageContext";

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("KO");

  const togglelanguage = () => {
    setLanguage((prev) => (prev === "KO" ? "EN" : "KO"));
  };
  return (
    <LanguageContext.Provider value={[language, togglelanguage]}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
