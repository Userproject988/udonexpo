import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Building2, Sprout, Music } from 'lucide-react'

export default function About() {
  const { t } = useTranslation()

  const features = [
    { icon: Building2, title: t('about.feature1_title'), desc: t('about.feature1_desc') },
    { icon: Sprout, title: t('about.feature2_title'), desc: t('about.feature2_desc') },
    { icon: Music, title: t('about.feature3_title'), desc: t('about.feature3_desc') },
  ]

  return (
    <section id="about" className="section-padding bg-expo-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-expo-green/10 text-expo-green 
                             text-sm font-bold mb-6">
              {t('about.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-expo-dark mb-6 leading-tight">
              {t('about.title')}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-expo-green/10 flex items-center justify-center 
                                  group-hover:bg-expo-green group-hover:text-white transition-all duration-300
                                  text-expo-green shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-expo-dark mb-1">{feature.title}</h3>
                    <p className="text-gray-500 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
                alt="Horticultural Expo"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-expo-dark/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-expo-gold/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-expo-green/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
