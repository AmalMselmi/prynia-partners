import { motion } from 'framer-motion'
import Button from '../ui/Button'
import GrowthRings from '../ui/GrowthRings'
import ImageCarousel from '../ui/ImageCarousel'
import { useTranslation } from 'react-i18next'

/**
 * Hero — the page's thesis. Dark ink field so the site opens with
 * gravitas rather than a bright startup gradient; the GrowthRings
 * mark grows quietly out of the lower-left corner.
 *
 * On desktop (lg+), the previously empty right-hand space holds the
 * site's image carousel as a supporting visual, in a two-column grid
 * alongside the existing text. Below lg, layout is byte-for-byte
 * unchanged from before — the carousel isn't rendered at all on
 * mobile/tablet. CSS Grid respects dir="rtl" automatically, so
 * Arabic mirrors the composition correctly with no extra logic.
 */
export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <GrowthRings
        className="pointer-events-none absolute -bottom-24 -left-16 h-[28rem] w-[28rem] text-paper/[0.07] md:h-[36rem] md:w-[36rem]"
        strokeWidth={1}
      />
      <div className="container-prynia relative flex flex-col justify-center py-10 md:py-16 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 rtl:lg:gap-6 lg:py-16">        <div >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="eyebrow mb-6 whitespace-nowrap text-gold-soft"          >
            {t('hero.eyebrow')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="max-w-xl font-display text-3xl leading-tight md:text-4xl rtl:text-3xl rtl:md:text-5xl"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-paper/70 md:text-base rtl:text-lg rtl:md:text-xl"
          >
            {t('hero.body')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button to="/contact" variant="gold" className="rtl:text-lg rtl:px-7 rtl:py-3.5">
            {t('hero.ctaPrimary')}
            </Button>
            <Button to="/services" variant="secondary" className="border-paper/25 text-paper hover:border-paper hover:bg-paper/10 rtl:text-lg rtl:px-7 rtl:py-3.5">
            {t('hero.ctaSecondary')}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="hidden lg:ml-auto lg:block lg:h-[26rem] lg:w-[75%] lg:py-4 rtl:lg:ml-0 rtl:lg:mr-auto"
        >
          <ImageCarousel variant="dark" fill />
        </motion.div>
      </div>
    </section>
  )
}