import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsNL from "@/locales/nl/translation.json";

const resources = {
  nl: {
    translation: translationsNL,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "nl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
