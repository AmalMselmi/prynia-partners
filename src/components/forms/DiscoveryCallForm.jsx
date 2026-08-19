import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { cn } from '../../utils/cn'
import TeamPickerCards from '../ui/TeamPickerCards'

const fieldBase =
  'w-full border border-ink/20 bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-slate/60 focus-visible:outline-2 focus-visible:outline-gold transition-colors'

export default function DiscoveryCallForm() {
  const { t } = useTranslation()
  const [showCalendly, setShowCalendly] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [booked, setBooked] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        'http://localhost:5000/api/discovery-call',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setSubmitted(true)
      reset()
    } catch (error) {
      console.error('Discovery call error:', error)
      alert('Something went wrong. Please try again.')    }
  }
  
  if (submitted) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col items-start gap-4 border border-gold/30 bg-emerald-soft px-8 py-10"
      role="status"
    >
      {booked ? (
        <>
          <h3 className="font-display text-xl text-ink">
            {t('contact.discoveryCall.form.successTitle')}
          </h3>
          <p className="max-w-xl text-sm leading-relaxed text-ink/70">
            {t('contact.discoveryCall.form.successBody')}
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false)
              setBooked(false)
            }}
            className="mt-2 font-body text-sm font-medium text-gold transition-colors hover:text-ink"
          >
            {t('contact.discoveryCall.form.sendAnother')}
          </button>
        </>
      ) : (
        <TeamPickerCards onBooked={() => setBooked(true)} />
      )}
    </motion.div>
  )
}

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      {/* Name */}
      <div>
        <label
          htmlFor="dc-name"
          className="mb-2 block font-mono text-xs uppercase tracking-wide text-slate"
        >
          {t('contact.discoveryCall.form.name')}
        </label>

        <input
          id="dc-name"
          type="text"
          className={cn(
            fieldBase,
            errors.name && 'border-coral'
          )}
          {...register('name', {
            required: t('contact.discoveryCall.form.validation.name'),
          })}
        />

        {errors.name && (
          <p className="mt-2 text-xs text-coral" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Organization */}
      <div>
        <label
          htmlFor="dc-organization"
          className="mb-2 block font-mono text-xs uppercase tracking-wide text-slate"
        >
          {t('contact.discoveryCall.form.organization')}
        </label>

        <input
          id="dc-organization"
          type="text"
          className={cn(
            fieldBase,
            errors.organization && 'border-coral'
          )}
          {...register('organization', {
            required: t(
              'contact.discoveryCall.form.validation.organization'
            ),
          })}
        />

        {errors.organization && (
          <p className="mt-2 text-xs text-coral" role="alert">
            {errors.organization.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="dc-email"
          className="mb-2 block font-mono text-xs uppercase tracking-wide text-slate"
        >
          {t('contact.discoveryCall.form.email')}
        </label>

        <input
          id="dc-email"
          type="email"
          className={cn(
            fieldBase,
            errors.email && 'border-coral'
          )}
          {...register('email', {
            required: t(
              'contact.discoveryCall.form.validation.emailRequired'
            ),
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: t(
                'contact.discoveryCall.form.validation.emailInvalid'
              ),
            },
          })}
        />

        {errors.email && (
          <p className="mt-2 text-xs text-coral" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Preferred Call Language */}
<div>
  <label
    htmlFor="dc-language"
    className="mb-2 block font-mono text-xs uppercase tracking-wide text-slate"
  >
    {t('contact.discoveryCall.form.language')}
  </label>

  <select
    id="dc-language"
    className={fieldBase}
    defaultValue=""
    {...register('language', {
      required: t('contact.discoveryCall.form.validation.language'),
    })}
  >
    <option value="" disabled>
      {t('contact.discoveryCall.form.languagePlaceholder')}
    </option>

    {t('contact.discoveryCall.form.languageOptions', {
      returnObjects: true,
    }).map((language) => (
      <option key={language} value={language}>
        {language}
      </option>
    ))}
  </select>

  {errors.language && (
    <p className="mt-2 text-xs text-coral" role="alert">
      {errors.language.message}
    </p>
  )}
</div>

      {/* Topic */}
      <div>
        <label
          htmlFor="dc-topic"
          className="mb-2 block font-mono text-xs uppercase tracking-wide text-slate"
        >
          {t('contact.discoveryCall.form.topic')}
        </label>

        <input
          id="dc-topic"
          type="text"
          placeholder={t(
            'contact.discoveryCall.form.topicPlaceholder'
          )}
          className={fieldBase}
          {...register('topic')}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex w-fit items-center justify-center bg-gold px-8 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-gold-soft disabled:opacity-60"
      >
        {isSubmitting
          ? t('contact.discoveryCall.form.sending')
          : t('contact.discoveryCall.form.submit')}
      </button>
    </form>
  )
}

