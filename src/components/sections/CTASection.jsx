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
 *
 * Also renders a secondary "not sure which service?" prompt below
 * the main CTA, pulled from the `notsure` translation namespace, so
 * both live in one section without repeating the eyebrow.
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
  normal: 'py-14 md:py-20',
  'tight-top': 'pt-8 pb-14 md:pt-10 md:pb-20',
  'tight-bottom': 'pt-14 pb-8 md:pt-20 md:pb-10',
}[spacing]

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <GrowthRings
        className="pointer-events-none absolute -top-16 -right-16 h-72 w-72 text-paper/[0.06] md:h-96 md:w-96"
        strokeWidth={1}
      />
      <div className={`container-prynia relative text-center ${paddingClasses}`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-2xl"
        >
          <p className="eyebrow mb-5 text-gold-soft">{resolvedEyebrow}</p>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">
            {resolvedTitle}
          </h2>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Button to={buttonTo} variant="gold">
              {resolvedButtonLabel}
            </Button>

            <p className="mt-12 font-display text-3xl leading-tight md:text-4xl">
              {t('notsure.notSureTitle')}
            </p>
            <Button to="/contact" variant="gold">
            {t('notsure.notSureButton')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}