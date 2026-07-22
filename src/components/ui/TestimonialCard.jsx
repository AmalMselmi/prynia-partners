import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

/**
 * TestimonialCard — a flat, quote-led card consistent with the
 * site's hairline-border language (no shadows, no rounded-xl).
 */
export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      className="flex flex-col gap-6 border border-ink/12 bg-white/40 p-8 md:p-10"
    >
      <Quote size={24} strokeWidth={1.5} className="text-gold" aria-hidden="true" />
      <blockquote className="flex-1 text-ink leading-relaxed">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="border-t border-ink/10 pt-5">
        <p className="font-display text-base text-ink">{testimonial.name}</p>
        <p className="mt-1 text-sm text-slate">
          {testimonial.role}, {testimonial.organization}
        </p>
      </figcaption>
    </motion.figure>
  )
}