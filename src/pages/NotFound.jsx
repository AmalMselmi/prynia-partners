import { motion } from 'framer-motion'
import Button from '../components/ui/Button'
import GrowthRings from '../components/ui/GrowthRings'

/**
 * NotFound — the 404 page. Reuses the ink field + GrowthRings
 * language from the Hero/PageBanner so a wrong turn still feels
 * like part of the same considered site, not a broken default page.
 */
export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink text-paper">
      <GrowthRings
        className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 text-paper/[0.06] md:h-[30rem] md:w-[30rem]"
        strokeWidth={1}
      />
      <div className="container-prynia relative py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <p className="eyebrow mb-5 text-gold-soft">Error 404</p>
          <h1 className="font-display text-4xl leading-tight md:text-5xl">
            This page hasn't taken root yet.
          </h1>
          <p className="mt-5 text-base text-paper/70 leading-relaxed md:text-lg">
            The page you're looking for doesn't exist, or has moved. Let's get
            you back to solid ground.
          </p>
          <div className="mt-10">
            <Button to="/" variant="gold">
              Return Home
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
