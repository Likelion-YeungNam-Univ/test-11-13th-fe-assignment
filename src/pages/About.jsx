import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";

const About = () => {
  const { t } = useContext(LanguageContext);

  return (
    <div>
      <h1 className="p-4 text-center text-6xl font-bold bg-gray-300">
        📖{t("aboutTitle")}
      </h1>
      <div className="bg-white text-black space-y-6 p-6 w-full min-h-screen">
        <h1 className="text-6xl font-extrabold mb-4">{t("name")}</h1>
        <hr />
        <div className="flex items-center space-x-6 mb-6">
          <span className="text-sm text-gray-600">{t("category")}</span>
          <span className="bg-yellow-500 px-2 py-0.5 rounded text-sm">
            아기사자
          </span>
        </div>
        <div className="flex items-center space-x-6 mb-6">
          <span className="text-sm text-gray-600">{t("tag")}</span>
          <span className="bg-yellow-500 px-2 py-0.5 rounded text-sm">FE</span>
        </div>
        <div className="flex items-center space-x-6 mb-6">
          <span className="text-sm text-gray-600">MBTI</span>
          <span className="bg-yellow-500 px-2 py-0.5 rounded text-sm">
            ESFP
          </span>
        </div>
        <div className="flex items-center space-x-6 mb-6">
          <span className="text-sm text-gray-600">{t("instagram")}</span>
          <span className="bg-yellow-500 px-2 py-0.5 rounded text-sm">
            hyun_e_0
          </span>
        </div>
        <div className="flex items-center space-x-6 mb-6">
          <span className="text-sm text-gray-600">{t("email")}</span>
          <span className="bg-yellow-500 px-2 py-0.5 rounded text-sm">
            ith021212@naver.com
          </span>
        </div>
        <div className="flex items-center space-x-6 mb-6">
          <span className="text-sm text-gray-600">{t("github")}</span>
          <span className="bg-yellow-500 px-2 py-0.5 rounded text-sm">
            limtaehyeon
          </span>
        </div>
        <hr />
        <div className="space-y-5">
          <div className="flex flex-col space-y-10 items-center">
            <span className="underline  font-bold text-5xl text-gray-600">
              {t("introduction")}
            </span>
            <span className="text-3xl">{t("aboutDesc")}</span>
          </div>
          <hr />
          <div className="flex flex-col space-y-10">
            <span className="underline font-bold text-center text-5xl text-gray-600">
              {t("hobbyTitle")}
            </span>
            <div className="flex items-center justify-center space-x-40">
              <span className="text-3xl">{t("hobby1")}</span>
              <span className="text-3xl">{t("hobby2")}</span>
              <span className="text-3xl">{t("hobby3")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
