import { createContext, useContext, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../i18n/resources/index.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation()
  const currentLang = i18n.language || 'th'

  const changeLanguage = useCallback((code) => {
    i18n.changeLanguage(code)
    // อัปเดต direction ถ้ามีภาษาที่อ่านจากขวาไปซ้ายในอนาคต
    document.documentElement.lang = code
  }, [i18n])

  const currentLanguage = LANGUAGES.find(l => l.code === currentLang) || LANGUAGES[0]

  return (
    <LanguageContext.Provider value={{ currentLang, currentLanguage, changeLanguage, LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
