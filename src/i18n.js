import i18n from "i18next";
//this will help detect which language is being used
import LanguageDetector from "i18next-browser-languagedetector";
//this is letting i18n know this is a React app
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend"


i18n.use(LanguageDetector).use(initReactI18next).use(Backend).init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true, 
})