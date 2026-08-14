import { motion } from 'framer-motion'
import Button from '../ui/Button'
import GrowthRings from '../ui/GrowthRings'
import { useTranslation } from 'react-i18next'

/**
 * CTASection — the closing invitation, reusable across pages.
 * `spacing` controls top/bottom padding independently so two
 * CTASections can be stacked back-to-back without doubled gaps:
 *
 * - 'normal'       → full padding on both sides (default)
 * - 'tight-top'    → small top padding (use on the section BELOW another)
 * - 'tight-bottom' → small bottom padding (use on the section ABOVE another)
 */
export default function CTASection({
  eyebrow,
  title,
  buttonLabel,
  buttonTo = '/contact',
  spacing = 'normal',
}) {
  const { t } = useTranslation()

  const resolvedEyebrow = eyebrow ?? t('cta.eyebrow')
  const resolvedTitle = title ?? t('cta.title')
  const resolvedButtonLabel = buttonLabel ?? t('cta.button')

  const paddingClasses = {
    normal: 'py-24 md:py-28',
    'tight-top': 'pt-8 pb-24 md:pt-10 md:pb-28',
    'tight-bottom': 'pt-24 pb-8 md:pt-28 md:pb-10',
  }[spacing]

  return (
    <section className="relative">
      <div
        className={`container-prynia relative text-center ${paddingClasses}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-2xl"
        >
          <p className="eyebrow mb-5 text-gold-soft">
            {resolvedEyebrow}
          </p>

          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            {resolvedTitle}
          </h2>

          <div className="mt-8 flex justify-center">
            <Button to={buttonTo} variant="gold" className="!font-bold">
              {resolvedButtonLabel}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}