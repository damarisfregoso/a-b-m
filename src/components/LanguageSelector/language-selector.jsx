import React from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const languages = [
  {code: "en", lang: "English"},
  {code: "es", lang: "Spanish"},
];

export default function LanguageSelector() {
  const {i18n} = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
  }; 

  return (
    <div className="btn-container">
      {
        languages.map ((lng) => {
          return <button className={lng.code === i18n.language?"selected" : ""} key={lng.code} onClick={() => changeLanguage(lng.code)}>{lng.lang}</button>
        })
      }
    </div>
  )
}

