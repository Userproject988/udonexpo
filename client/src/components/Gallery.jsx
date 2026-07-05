import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

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
    <section id="gallery" className="relative py-24 md:py-32 bg-turtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image (reversed from About) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {images.slice(0, 4).map((img, i) => (
                <motion.div
                  key={img.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative overflow-hidden aspect-square">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-darkness/50 opacity-0 group-hover:opacity-100 
                                  transition-opacity duration-300 flex items-end p-4">
                    <span className="text-daisy font-serif text-sm">{img.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text + Big Number */}
          <div className="relative order-1 lg:order-2">
            <span className="section-number absolute -top-16 -right-4 md:-right-8">02</span>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <p className="section-label relative z-10">{t('gallery.badge')}</p>
              <h2 className="section-title relative z-10">{t('gallery.title')}</h2>
              <p className="section-text relative z-10 mb-8 max-w-lg">
                {t('gallery.desc')}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {t('gallery.images', { returnObjects: true }).slice(0, 4).map((img, i) => (
                  <div key={i} className="border-l-2 border-saratoga pl-4">
                    <h4 className="font-serif text-daisy font-bold text-sm mb-1">{img.title}</h4>
                    <p className="text-leek/70 text-xs">{img.desc}</p>
                  </div>
                ))}
              </div>

              <motion.a
                href="#map"
                onClick={(e) => { e.preventDefault(); document.querySelector('#map')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 text-lime text-sm font-sans font-semibold 
                           tracking-wider uppercase hover:text-daisy transition-colors group"
                whileHover={{ x: 5 }}>
                read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
