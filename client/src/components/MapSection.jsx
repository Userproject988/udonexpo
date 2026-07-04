import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Car, Plane, Train, MapPin } from 'lucide-react'

export default function MapSection() {
  const { t } = useTranslation()

  const transport = [
    { icon: Car, title: t('map.by_car'), desc: t('map.by_car_desc') },
    { icon: Plane, title: t('map.by_plane'), desc: t('map.by_plane_desc') },
    { icon: Train, title: t('map.by_train'), desc: t('map.by_train_desc') },
  ]

  return (
    <section id="map" className="section-padding bg-expo-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-expo-green/10 text-expo-green 
                           text-sm font-bold mb-4">
            {t('map.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-expo-dark mb-4">
            {t('map.title')}
          </h2>
          <p className="text-gray-500 flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-expo-green" />
            {t('map.desc')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {transport.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover"
            >
              <div className="w-14 h-14 rounded-full bg-expo-green/10 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-expo-green" />
              </div>
              <h3 className="text-xl font-bold text-expo-dark mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1234567890123!2d102.7891234!3d17.4045678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzE2LjQiTiAxMDLCsDQ3JzIwLjgiRQ!5e0!3m2!1sth!2sth!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  )
}
