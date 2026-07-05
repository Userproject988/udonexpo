import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Car, Plane, Train, MapPin, ArrowRight } from 'lucide-react'

export default function MapSection() {
  const { t } = useTranslation()

  const transport = [
    { icon: Car, title: t('map.by_car'), desc: t('map.by_car_desc') },
    { icon: Plane, title: t('map.by_plane'), desc: t('map.by_plane_desc') },
    { icon: Train, title: t('map.by_train'), desc: t('map.by_train_desc') },
  ]

  return (
    <section id="map" className="relative py-24 md:py-32 bg-darkness overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text + Big Number */}
          <div className="relative">
            <span className="section-number absolute -top-16 -left-4 md:-left-8">03</span>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <p className="section-label relative z-10">{t('map.badge')}</p>
              <h2 className="section-title relative z-10">{t('map.title')}</h2>
              <p className="section-text relative z-10 mb-8 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-lime shrink-0" />
                {t('map.desc')}
              </p>

              <h3 className="text-daisy font-serif font-bold text-lg mb-6 relative z-10">
                {t('map.how_to')}
              </h3>

              <div className="space-y-6 relative z-10 mb-8">
                {transport.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-turtle border border-saratoga/30 
                                    flex items-center justify-center shrink-0 group-hover:bg-saratoga transition-colors">
                      <item.icon className="w-5 h-5 text-daisy" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-daisy mb-1">{item.title}</h4>
                      <p className="text-leek/80 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="#countdown"
                onClick={(e) => { e.preventDefault(); document.querySelector('#countdown')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 text-lime text-sm font-sans font-semibold 
                           tracking-wider uppercase hover:text-daisy transition-colors group"
                whileHover={{ x: 5 }}>
                read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative">
            <div className="border border-turtle/50 p-2 bg-turtle/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.0!2d102.789!3d17.405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzE2LjQiTiAxMDLCsDQ3JzIwLjgiRQ!5e0!3m2!1sth!2sth!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0, filter: 'grayscale(60%) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                className="bg-darkness"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
