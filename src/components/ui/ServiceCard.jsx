import { motion } from 'framer-motion'
import Button from './Button'

/**
 * ServiceCard — displays a service with its icon, translated content,
 * and CTA button. All cards stretch to the same height when placed
 * inside the Services grid.
 */
export default function ServiceCard({
  service,
  title,
  description,
  items,
  ctaLabel,
  index = 0,
}) {
  const Icon = service.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: index * 0.1,
      }}
      className="flex h-full flex-col gap-5 border border-ink/12 bg-white/40 p-8 md:p-10"
    >
      {/* Icon */}
      <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-ink/20 text-ink">
        <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl text-ink">
        {title}
      </h3>

      {/* Description */}
      <p className="leading-relaxed text-slate">
        {description}
      </p>

      {/* Service items */}
      {items && items.length > 0 && (
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm leading-relaxed text-slate"
            >
              <span
                className="mt-2 h-1 w-1 shrink-0 bg-gold"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA — always pushed to the bottom */}
      <div className="mt-auto pt-6">
        <Button
          to="/contact"
          variant="ghost"
          className="!px-0 !py-0 !font-bold text-base"
        >
          {ctaLabel}
        </Button>
      </div>
    </motion.article>
  )
}