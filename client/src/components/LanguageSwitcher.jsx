import { motion, AnimatePresence } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '../hooks/useLanguage.js'

export default function LanguageSwitcher() {
  const { currentLanguage, changeLanguage, LANGUAGES } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border border-saratoga/50 text-leek 
                   font-sans text-xs tracking-wider uppercase hover:border-lime hover:text-daisy 
                   transition-colors">
        <Globe className="w-4 h-4" />
        <span>{currentLanguage.flag} {currentLanguage.label}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 bg-turtle border border-saratoga/50 overflow-hidden z-50">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { changeLanguage(lang.code); setIsOpen(false) }}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 font-sans text-sm
                           hover:bg-saratoga/30 transition-colors
                           ${currentLanguage.code === lang.code ? 'bg-saratoga/20 text-daisy font-bold' : 'text-leek'}`}>
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
