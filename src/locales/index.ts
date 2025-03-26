import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from "./en.json";
import azJson from "./az.json";
import ruJson from "./ru.json";

// const lang = localStorage.getItem("lang");

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enJson,
    },
    az: {
      translation: azJson,
    },
    ru: {
      translation: ruJson,
    },
  },
  lng: "en",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
