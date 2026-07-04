import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Clock, Users, Globe, Maximize } from 'lucide-react'

export default function Stats() {
  const { t } = useTranslation()

  const stats = [
    { icon: Clock, value: '135', label: t('stats.days'), desc: t('stats.days_desc') },
    { icon: Users, value: '3+', label: t('stats.visitors'), desc: t('stats.visitors_desc') },
    { icon: Globe, value: '30+', label: t('stats.countries'), desc: t('stats.countries_desc') },
    { icon: Maximize, value: '1,200', label: t('stats.area'), desc: t('stats.area_desc') },
  ]

  return (
    <section id="stats" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-expo-cream rounded-2xl p-6 md:p-8 text-center border border-gray-100 
                         hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-expo-green/10 
                              flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-expo-green" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-expo-dark mb-1">
                {stat.value}
              </div>
              <div className="text-expo-green font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
