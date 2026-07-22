import { motion } from 'framer-motion'
import Button from '../ui/Button'
import GrowthRings from '../ui/GrowthRings'

/**
 * Hero — the page's thesis. Dark ink field so the site opens with
 * gravitas rather than a bright startup gradient; the GrowthRings
 * mark grows quietly out of the lower-left corner, literalizing
 * "Growing Prosperity" as the very first thing a visitor sees.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <GrowthRings
        className="pointer-events-none absolute -bottom-24 -left-16 h-[28rem] w-[28rem] text-paper/[0.07] md:h-[36rem] md:w-[36rem]"
        strokeWidth={1}
      />

      <div className="container-prynia relative flex min-h-[86vh] flex-col justify-center py-28 md:py-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="eyebrow mb-6 text-gold-soft"
        >
          Advisory · Leadership · Engagement
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="max-w-3xl font-display text-4xl leading-[1.1] md:text-6xl"
        >
          Growing Prosperity for the institutions shaping tomorrow.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="mt-6 max-w-xl text-base text-paper/70 md:text-lg leading-relaxed"
        >
          Prynia Partners guides governments, NGOs, and international
          institutions through pragmatic advisory studies, visionary
          leadership trainings, and strategic engagement programs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button to="/contact" variant="gold">
            Start a Conversation
          </Button>
          <Button to="/services" variant="secondary" className="border-paper/25 text-paper hover:bg-paper/10 hover:border-paper">
            Explore Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
