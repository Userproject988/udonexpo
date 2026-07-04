// ============================================
// i18n Config - ไฟล์นี้ import ที่ main.jsx
// ============================================

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { resources, DEFAULT_LANGUAGE } from './resources/index.js'
import { validateTranslations } from './utils.js'

// ตรวจสอบความสมบูรณ์ของคำแปล (เฉพาะ development)
if (import.meta.env.DEV) {
  validateTranslations()
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    debug: import.meta.env.DEV,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  })

export default i18n
