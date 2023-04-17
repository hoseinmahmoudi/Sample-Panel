import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",

  // language resources
  resources: {
    en: {
      translation: {
        welcome: "Welcome to React",
        websiteName: "panel",
        RecentDeposits: "Recent Deposits",
      },
    },
    fa: {
      translation: {
        welcome: "خوش آمدید",
        websiteName: "داشبورد",
        RecentDeposits: "سپرده های اخیر",
      },
    },
  },
});

export default i18n;
