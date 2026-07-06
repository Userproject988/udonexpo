// ============================================
// i18n Resources Index
// รวมทุกภาษาไว้ที่นี่ ไฟล์เดียวจบ!
// ============================================

import { th } from './th.js'
import { en } from './en.js'
import { zh } from './zh.js'
import { ja } from './ja.js'

export const resources = {
  th: { translation: th },
  en: { translation: en },
  zh: { translation: zh },
  ja: { translation: ja },
}

// รายการภาษาที่รองรับ
export const LANGUAGES = [
  { code: 'th', label: 'ไทย', flag: '🇹🇭' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
]

export const DEFAULT_LANGUAGE = 'th'
