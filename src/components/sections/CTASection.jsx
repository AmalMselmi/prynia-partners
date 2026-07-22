import { motion } from 'framer-motion'
import Button from '../ui/Button'
import GrowthRings from '../ui/GrowthRings'

/**
 * CTASection — the closing invitation, reused at the end of Home
 * and available for other pages later. Kept as its own component
 * (rather than inlined in Home) so future pages can drop it in
 * without duplicating markup.
 */
export default function CTASection({
  eyebrow = 'Ready When You Are',
  title = 'Let\u2019s discuss what prosperity looks like for your institution.',
  buttonLabel = 'Start a Conversation',
  buttonTo = '/contact',
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <GrowthRings
        className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 text-paper/[0.06] md:h-96 md:w-96"
        strokeWidth={1}
      />
      <div className="container-prynia relative py-24 text-center md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-2xl"
        >
          <p className="eyebrow mb-5 text-gold-soft">{eyebrow}</p>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">
            {title}
          </h2>
          <div className="mt-10 flex justify-center">
            <Button to={buttonTo} variant="gold">
              {buttonLabel}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
