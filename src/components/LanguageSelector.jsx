import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const LanguageSelector = () => {
  const [language, toggleLanguage] = useContext(LanguageContext);
  const btnClass = "p-1 border";
  return (
    <header className="flex gap-2 items-center">
      <span className={btnClass}>Language:{language}</span>
      <button className={btnClass} onClick={toggleLanguage}>
        언어 변경
      </button>
    </header>
  );
};

export default LanguageSelector;
