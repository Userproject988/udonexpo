import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ChevronDown } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-expo-green via-expo-light to-teal-700">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80')] 
                        bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-expo-dark/60 via-transparent to-transparent" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-expo-gold/40 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md 
                           border border-white/20 text-white/90 text-sm font-medium mb-6">
            AIPH Certified International Expo
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 font-light tracking-widest mb-4"
        >
          {t('hero.subtitle')}
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          {t('hero.title').split(' ').map((word, i) => (
            <span key={i} className={i === 0 ? 'text-expo-gold' : ''}>
              {word}{' '}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8 text-white/80"
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-expo-gold" />
            <span className="text-sm md:text-base">{t('hero.date')}</span>
          </div>
          <div className="hidden md:block w-px h-5 bg-white/30" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-expo-gold" />
            <span className="text-sm md:text-base">{t('hero.location')}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary text-lg">
            {t('hero.cta_primary')}
          </button>
          <button className="px-8 py-3 rounded-full border-2 border-white/30 text-white 
                           font-bold hover:bg-white/10 transition-all duration-300 text-lg">
            {t('hero.cta_secondary')}
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#stats" onClick={(e) => { e.preventDefault(); document.querySelector('#stats').scrollIntoView({ behavior: 'smooth' }) }}>
          <ChevronDown className="w-8 h-8 text-white/60" />
        </a>
      </motion.div>
    </section>
  )
}
