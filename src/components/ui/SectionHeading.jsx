import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

/**
 * SectionHeading — the recurring eyebrow + serif title + optional
 * supporting copy pattern used at the top of nearly every section.
 * `align` controls whether it centers (used on narrower sections)
 * or left-aligns (used on wider, editorial layouts).
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-display text-3xl md:text-4xl leading-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-slate leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
