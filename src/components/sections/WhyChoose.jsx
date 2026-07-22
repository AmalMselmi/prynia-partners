import { motion } from 'framer-motion'
import { ShieldCheck, Globe2, Lightbulb } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Trusted by Institutions',
    description:
      'Our engagements are built on discretion, rigour, and accountability, the standard institutional mandates require.',
  },
  {
    icon: Globe2,
    title: 'Genuine Cultural Intelligence',
    description:
      'We work across governments, agencies, and communities with real fluency in the norms each context demands.',
  },
  {
    icon: Lightbulb,
    title: 'Transdisciplinary by Design',
    description:
      'Our teams draw on policy, economics, and organizational design together, not as separate, siloed services.',
  },
]

/**
 * WhyChoose — a quiet, three-column trust-signal section. Uses
 * hairline top borders rather than shadowed cards, consistent with
 * the flat, editorial visual language used across the site.
 */
export default function WhyChoose() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-prynia">
        <SectionHeading
          eyebrow="Why Prynia"
          title="Counsel institutions can stake their mandate on."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="border-t border-ink/15 pt-6 text-center md:text-left"
              >
                <Icon size={26} strokeWidth={1.5} className="mx-auto mb-5 text-gold md:mx-0" aria-hidden="true" />
                <h3 className="font-display text-xl text-ink">{reason.title}</h3>
                <p className="mt-3 text-sm text-slate leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
