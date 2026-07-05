import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer id="contact" className="bg-darkness border-t border-turtle/30 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="font-serif text-2xl font-bold text-daisy mb-4">UdonExpo<span className="text-lime">2026</span></h3>
            <p className="text-leek/70 text-sm leading-relaxed whitespace-pre-line font-sans">
              {t('footer.desc')}
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-serif text-lg font-bold text-daisy mb-6">{t('footer.quick_links')}</h4>
            <ul className="space-y-3 font-sans text-sm">
              {['about', 'gallery', 'map'].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="text-leek/70 hover:text-daisy transition-colors">
                    {t(`nav.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-serif text-lg font-bold text-daisy mb-6">{t('footer.contact')}</h4>
            <ul className="space-y-4 font-sans text-sm text-leek/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                <span className="whitespace-pre-line">{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-lime shrink-0" />
                <span>{t('footer.phone')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-lime shrink-0" />
                <span>{t('footer.email')}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h4 className="font-serif text-lg font-bold text-daisy mb-6">Newsletter</h4>
            <p className="text-leek/70 text-sm mb-4 font-sans">{t('footer.newsletter')}</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-turtle border border-saratoga/30 text-daisy 
                         placeholder-leek/40 text-sm font-sans focus:outline-none focus:border-lime"
              />
              <button className="px-4 py-2 bg-saratoga text-daisy font-sans font-semibold text-sm 
                               hover:bg-lime transition-colors">
                {t('footer.subscribe')}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-turtle/20 pt-8 text-center text-leek/40 text-xs font-sans">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
