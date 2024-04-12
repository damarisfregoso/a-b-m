import i18n from "i18next";
//this will help detect which language is being used
import LanguageDetector from "i18next-browser-languagedetector";
//this is letting i18n know this is a React app
import {initReactI18next} from "react-i18next";


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          welcome: "Welcome to Afforable Building Maintenance"
        },
      },
      es: {
        translation: {
          welcome: "Bienvenido al Afforable Building Maintenace"
        },
      }
    }
})