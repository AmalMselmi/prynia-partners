import { motion } from 'framer-motion'
import { GraduationCap, HeartHandshake, DollarSign, Award } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { useTranslation } from 'react-i18next'

const reasonIcons = [Award, GraduationCap, HeartHandshake, DollarSign]

/**
 * WhyChoose — reworked as a numbered, row-based list rather than a
 * generic three-column icon grid. Each row's icon box fills with
 * gold on hover for a subtle sense of interactivity, and the large
 * faint number reinforces this is a short, deliberate list rather
 * than a decorative pattern.
 */
export default function WhyChoose() {
  const { t } = useTranslation()
  return (
    <section className="bg-paper py-10 md:py-20">
      <div className="container-prynia">
        <SectionHeading
        eyebrow={t('whyChoose.eyebrow')}
        align="center"
        className="mx-auto"
/>

        <div className="mt-16 border-t border-ink/15">
          {t('whyChoose.reasons', { returnObjects: true }).map((title, i) => {
            const Icon = reasonIcons[i]
            return (
            <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
            className="group flex flex-col gap-5 border-b border-ink/15 py-10 sm:flex-row sm:items-center sm:gap-10"
              >
                <span className="font-display text-4xl text-ink/15 sm:w-16 sm:shrink-0 sm:text-5xl">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </span>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-ink/15 text-ink transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                  <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <p className="font-[550] text-xl leading-snug text-ink sm:text-2xl">
                  {title}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}