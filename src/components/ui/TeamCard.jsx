import { motion } from 'framer-motion'

/**
 * TeamCard — displays a photo when provided, otherwise falls back
 * to a clean initials avatar so the layout never shows a broken
 * image icon while real headshots are pending.
 */
export default function TeamCard({ person, index = 0, featured = false }) {
  const initials = person.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      className={
        featured
          ? 'flex flex-col gap-6 border border-ink/12 bg-white/40 p-8 md:flex-row md:items-center md:p-10'
          : 'flex flex-col gap-5 border-t border-ink/15 pt-6'
      }
    >
      <div
        className={
          featured
            ? 'flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden bg-ink text-2xl text-paper'
            : 'flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden bg-ink text-lg text-paper'
        }
      >
        {person.photo ? (
          <img src={person.photo} alt={person.name} className="h-full w-full object-cover" />
        ) : (
          <span className="font-display">{initials}</span>
        )}
      </div>

      <div>
        <h3 className={featured ? 'font-display text-2xl text-ink' : 'font-display text-lg text-ink'}>
          {person.name}
        </h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-wide text-gold">
          {person.role}
        </p>
        <p className="mt-3 text-sm text-slate leading-relaxed">{person.bio}</p>
      </div>
    </motion.div>
  )
}