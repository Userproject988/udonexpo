import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const images = [
  { src: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80', title: 'Tropical Garden' },
  { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', title: 'Greenhouse' },
  { src: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80', title: 'Flower Exhibition' },
  { src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80', title: 'Botanical Garden' },
  { src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&q=80', title: 'Orchid House' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80', title: 'Forest Trail' },
]

export default function Gallery() {
  const { t } = useTranslation()

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-expo-green/10 text-expo-green 
                           text-sm font-bold mb-4">
            {t('gallery.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-expo-dark mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {t('gallery.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-expo-dark/70 via-transparent to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                              flex items-end p-6">
                <span className="text-white font-bold text-lg">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
