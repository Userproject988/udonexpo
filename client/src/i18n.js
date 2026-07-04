import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

import thTranslation from './locales/th.json'
import enTranslation from './locales/en.json'
import zhTranslation from './locales/zh.json'

const resources = {
  th: { translation: thTranslation },
  en: { translation: enTranslation },
  zh: { translation: zhTranslation },
}

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'th',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  })

export default i18n
