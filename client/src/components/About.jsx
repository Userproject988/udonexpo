import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="relative py-24 md:py-32 bg-darkness overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text + Big Number */}
          <div className="relative">
            <span className="section-number absolute -top-16 -left-4 md:-left-8">01</span>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <p className="section-label relative z-10">{t('about.badge')}</p>
              <h2 className="section-title relative z-10">{t('about.title')}</h2>
              <p className="section-text relative z-10 mb-8 max-w-lg">
                {t('about.description')}
              </p>
              
              <div className="space-y-6 relative z-10">
                {t('about.features', { returnObjects: true }).map((feature, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-turtle border border-saratoga/30 
                                    flex items-center justify-center shrink-0 group-hover:bg-saratoga transition-colors">
                      <span className="text-daisy font-serif font-bold text-lg">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-daisy text-lg mb-1">{feature.title}</h3>
                      <p className="text-leek/80 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <motion.a
                href="#gallery"
                onClick={(e) => { e.preventDefault(); document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 mt-8 text-lime text-sm font-sans font-semibold 
                           tracking-wider uppercase hover:text-daisy transition-colors group"
                whileHover={{ x: 5 }}>
                read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative">
            <img
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
              alt="Horticultural Expo"
              className="w-full h-[500px] md:h-[600px] object-cover rounded-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-darkness/40 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
