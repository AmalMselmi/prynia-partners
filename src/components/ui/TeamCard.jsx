import { motion } from 'framer-motion'

/**
 * TeamCard — featured variant now uses a fixed-height image column
 * that fills the full card height (via CSS grid), so photos read as
 * genuine portraits rather than small square thumbnails.
 */
export default function TeamCard({ person, index = 0, featured = false }) {
  const initials = person.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
        className="grid grid-cols-1 overflow-hidden border border-ink/12 bg-white/40 sm:grid-cols-[240px_1fr] md:grid-cols-[300px_1fr]"
      >
        <div className="h-72 w-full sm:h-auto">
          {person.photo ? (
            <img
              src={person.photo}
              alt={person.name}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-ink">
              <span className="font-display text-5xl text-paper">{initials}</span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-3 p-8 md:p-12">
          <h3 className="font-display text-2xl text-ink md:text-3xl">{person.name}</h3>
          <p className="font-mono text-xs uppercase tracking-wide text-gold">{person.role}</p>
          <p className="mt-2 text-base text-slate leading-relaxed">{person.description}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      className="flex flex-col gap-5 border-t border-ink/15 pt-6"
    >
      <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden bg-ink text-lg text-paper">
        {person.photo ? (
          <img src={person.photo} alt={person.name} className="h-full w-full object-cover" />
        ) : (
          <span className="font-display">{initials}</span>
        )}
      </div>
      <div>
        <h3 className="font-display text-lg text-ink">{person.name}</h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-wide text-gold">{person.role}</p>
        <p className="mt-3 text-sm text-slate leading-relaxed">{person.description}</p>
      </div>
    </motion.div>
  )
}