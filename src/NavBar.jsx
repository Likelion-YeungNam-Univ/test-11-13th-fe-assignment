import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "./components/LanguageSelector";
import LanguageContext from "./contexts/LanguageContext";
const NavBar = () => {
  const navigate = useNavigate();
  const { t } = useContext(LanguageContext);
  return (
    <nav className="p-4 bg-black text-white flex flex-row">
      <div>
        <button className="mr-8" onClick={() => navigate(-1)}>
          ←
        </button>
        <button className="mr-8" onClick={() => navigate("/home")}>
          {t("homename")}
        </button>
        <button className="mr-8" onClick={() => navigate("/projects")}>
          {t("projectsname")}
        </button>
        <button className="mr-8" onClick={() => navigate("/about")}>
          {t("aboutname")}
        </button>
      </div>
      <div className="ml-auto">
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default NavBar;
