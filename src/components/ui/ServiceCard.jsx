import { motion } from 'framer-motion'
import Button from './Button'

/**
 * ServiceCard — icon comes from the `service` object (data/services.js),
 * all text comes from translated props passed in by whatever page
 * renders this card, so the same component works for any language.
 */
export default function ServiceCard({ service, title, description, items, ctaLabel, videoSrc,index = 0 }) {
  const Icon = service.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      className="flex flex-col gap-5 border border-ink/12 bg-white/40 p-8 md:p-10"
    >
      <div className="flex h-16 w-16 items-center justify-center border border-ink/20 text-ink">
        <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <h3 className="font-display text-2xl text-ink">{title}</h3>
      <p className="text-slate leading-relaxed">{description}</p>
      {items && items.length > 0 && (
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate leading-relaxed">
              <span className="mt-2 h-1 w-1 shrink-0 bg-gold" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="pt-2">
  <Button to="/contact" variant="ghost" className="!px-0 !py-0 !font-bold text-base">
    {ctaLabel}
  </Button>
</div>

{videoSrc && (
  <div className="mt-6 overflow-hidden rounded-sm border border-ink/12 shadow-lg shadow-ink/10 lg:h-56 xl:h-64">
    <video
      src={videoSrc}
      controls
      preload="metadata"
      playsInline
      className="aspect-video w-full bg-ink object-cover lg:h-full"
    >
      Your browser does not support embedded video.
    </video>
  </div>
)}
    </motion.article>
  )
}