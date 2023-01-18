import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import loginES from './locales/es/login.json';
import homeES from './locales/en/home.json';
import loginEN from './locales/en/login.json';
import homeEN from './locales/en/home.json';

const resources = {
  es: {
    login: loginES,
    home: homeES,
  },
  en: {
    login: loginEN,
    home: homeEN,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

i18n.addResources('es', 'LOGIN', {
  TITLE: 'Login Si!',
});

i18n.addResources('en', 'LOGIN', {
  TITLE: 'Login Yes!',
});

export default i18n;
