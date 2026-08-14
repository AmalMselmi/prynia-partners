import { motion } from 'framer-motion'
import ImageCarousel from '../ui/ImageCarousel'

/**
 * GalleryCarousel — wraps ImageCarousel with the site's standard
 * section padding/container, so it sits consistently with every
 * other section rather than being a one-off full-bleed element.
 */
export default function GalleryCarousel() {
  return (
  <section className="bg-paper-dim/60 py-6 md:py-8 lg:hidden">
    <div className="container-prynia">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <ImageCarousel />
        </motion.div>
      </div>
    </section>
  )
}