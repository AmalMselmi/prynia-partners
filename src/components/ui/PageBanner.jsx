import { motion } from 'framer-motion'
import GrowthRings from './GrowthRings'

/**
 * PageBanner — the consistent, quiet header used on every interior
 * page. Deliberately restrained: no imagery, just eyebrow + serif
 * title + a faint GrowthRings mark, so the pages themselves never
 * compete with the deliberately dramatic Home hero.
 */
export default function PageBanner({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <GrowthRings
        className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 text-paper/10 md:h-80 md:w-80"
        strokeWidth={1}
      />
      <div className="container-prynia relative py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl lg:max-w-4xl"
        >
          {eyebrow && <p className="eyebrow mb-4 text-gold-soft">{eyebrow}</p>}
          <h1 className="font-display text-4xl md:text-5xl leading-tight">
            {title}
          </h1>
          {description && (
            <div className="mt-5 flex flex-col gap-2 text-base md:text-lg text-paper/75 leading-relaxed">
              {Array.isArray(description) ? (
                description.map((line, i) => <p key={i}>{line}</p>)
              ) : (
                <p>{description}</p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
