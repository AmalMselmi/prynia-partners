import { motion } from 'framer-motion'
import Button from './Button'

/**
 * ServiceCard — flat, bordered block (no shadow, no rounded-xl) in
 * keeping with the minimal/premium/editorial direction. The icon
 * sits inside a hairline square rather than a filled colour chip,
 * so the card reads as restrained rather than "app feature tile."
 */
export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      className="flex flex-col gap-5 border border-ink/12 bg-white/40 p-8 md:p-10"
    >
      <div className="flex h-12 w-12 items-center justify-center border border-ink/20 text-ink">
        <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <h3 className="font-display text-2xl text-ink">{service.title}</h3>
      <p className="text-slate leading-relaxed">
        {service.description || service.shortDescription}
      </p>
      <div className="mt-auto pt-2">
        <Button to="/contact" variant="ghost" className="!px-0 !py-0">
          {service.ctaLabel || 'Learn more'}
        </Button>
      </div>
    </motion.article>
  )
}
