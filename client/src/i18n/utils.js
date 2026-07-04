// ============================================
// i18n Utilities
// ช่วยตรวจสอบว่าคำแปลครบทุกภาษาไหม
// ============================================

import { resources } from './resources/index.js'

/**
 * ดึงรายการ key ทั้งหมดแบบ nested (เช่น "nav.home", "hero.title")
 */
export function getAllKeys(obj, prefix = '') {
  let keys = []
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(getAllKeys(obj[key], fullKey))
    } else {
      keys.push(fullKey)
    }
  }
  return keys
}

/**
 * ตรวจสอบว่าทุกภาษามี key ครบเหมือนกันไหม
 * ใช้ใน console เพื่อ debug
 */
export function validateTranslations() {
  const langs = Object.keys(resources)
  const allKeys = {}

  langs.forEach(lang => {
    allKeys[lang] = new Set(getAllKeys(resources[lang].translation))
  })

  const baseLang = langs[0]
  const baseKeys = allKeys[baseLang]
  const issues = []

  langs.forEach(lang => {
    if (lang === baseLang) return
    const missing = [...baseKeys].filter(k => !allKeys[lang].has(k))
    const extra = [...allKeys[lang]].filter(k => !baseKeys.has(k))
    if (missing.length) issues.push(`[${lang}] ขาด key: ${missing.join(', ')}`)
    if (extra.length) issues.push(`[${lang}] มี key เกิน: ${extra.join(', ')}`)
  })

  if (issues.length === 0) {
    console.log('✅ ทุกภาษามี key ครบถ้วน!')
  } else {
    console.warn('⚠️ พบปัญหาคำแปล:')
    issues.forEach(i => console.warn(i))
  }

  return issues
}

/**
 * ดึงค่าจาก nested object โดยใช้ path (เช่น "nav.home")
 */
export function getByPath(obj, path) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj)
}

/**
 * แสดงรายการ key ที่ยังไม่ได้แปล (return empty string หรือ key ต้นฉบับ)
 */
export function findMissingTranslations(langCode) {
  const lang = resources[langCode]?.translation
  if (!lang) return []

  const keys = getAllKeys(lang)
  return keys.filter(key => {
    const val = getByPath(lang, key)
    return !val || val === '' || val === key
  })
}
