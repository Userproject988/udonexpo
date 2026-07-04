import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Leaf, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer id="contact" className="bg-expo-dark text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-8 h-8 text-expo-gold" />
              <span className="text-2xl font-bold">{t('footer.title')}</span>
            </div>
            <p className="text-gray-400 leading-relaxed whitespace-pre-line">
              {t('footer.desc')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 text-expo-gold">{t('footer.quick_links')}</h3>
            <ul className="space-y-3">
              {['home', 'about', 'gallery', 'map'].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="text-gray-400 hover:text-white transition-colors">
                    {t(`nav.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 text-expo-gold">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-expo-gold shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-expo-gold shrink-0" />
                <span>{t('footer.phone')}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-expo-gold shrink-0" />
                <span>{t('footer.email')}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-6 text-expo-gold">Newsletter</h3>
            <p className="text-gray-400 mb-4">รับข่าวสารและอัปเดตล่าสุดจากงานมหกรรม</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 
                         text-white placeholder-gray-500 focus:outline-none focus:border-expo-gold"
              />
              <button className="px-4 py-2 rounded-lg bg-expo-gold text-expo-dark font-bold 
                               hover:bg-yellow-500 transition-colors">
                ติดตาม
              </button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
