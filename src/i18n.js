import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
 
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'am-AM',
    debug: false,
    whitelist: ["am-AM", "en-US", "ru-RU"],
    detection: {
      order: ["localStorage", "cookie"],
      cashes: ["localStorage", "cookie"]
    },
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;