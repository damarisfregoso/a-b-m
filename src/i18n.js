import i18n from "i18next";
//this will help detect which language is being used
import LanguageDetector from "i18next-browser-languagedetector";
//this is letting i18n know this is a React app
import {initReactI18next} from "react-i18next";


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true, 
    resources: {
      en: {
        translation: {
          welcome: "Welcome to Afforable Building Maintenance",
          description: {
            slogan: "Where no job is too big or too small!",
            year: "Since 2019",
            line1: "Sick of all the problems that your home is giving you?",
            line2: "Get your household troubles resolved in a breeze",
            line3: "with quailty home repair and maintenance sercices from trusted experts!"
          },
        },
      },
      es: {
        translation: {
          welcome: "Bienvenido al Afforable Building Maintenace",
          description: {
            slogan: "¡Donde ningún trabajo es demasiado grande o demasiado pequeño!",
            year: "Desde 2019",
            line1: "¿Estás harto de todos los problemas que te está dando tu hogar?",
            line2: "Resuelva sus problemas domésticos en un abrir y cerrar de ojos",
            line3: "¡Con servicios de calidad de reparación y mantenimiento del hogar por parte de expertos confiables!"
          },
        },
      }
    }
})