import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '../../utils/cn'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

const fieldBase =
  'w-full border border-ink/20 bg-white/60 px-4 py-3 text-sm text-ink placeholder:text-slate/60 focus-visible:outline-2 focus-visible:outline-gold transition-colors'

/**
 * ContactForm — validated with react-hook-form. There is no backend
 * yet, so onSubmit simply simulates a request and reveals a success
 * message. The submit handler is isolated at the top so a real API
 * call can be dropped in later without touching the JSX below.
 */
export default function ContactForm() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onBlur' })

const onSubmit = async (data) => {
  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error('Request failed')
    setSubmitted(true)
    reset()
  } catch (error) {
    console.error('Contact form error:', error)
    alert('Something went wrong sending your message. Please try again.')
  }
}

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-start gap-4 border border-emerald/30 bg-emerald-soft px-8 py-10"
        role="status"
      >
        <CheckCircle2 size={32} strokeWidth={1.5} className="text-emerald" aria-hidden="true" />
        <h3 className="font-display text-2xl text-ink">{t('contact.form.successTitle')}</h3>
        <p className="text-slate leading-relaxed">
          {t('contact.form.successBody')}
          </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 font-body text-sm font-medium text-gold hover:text-ink transition-colors"
        >
          {t('contact.form.sendAnother')}
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wide text-slate">
            {t('contact.form.name')}
          </label>

          <input
            id="name"
            type="text"
            className={cn(fieldBase, errors.name && 'border-red-400')}
            aria-invalid={errors.name ? 'true' : 'false'}
            {...register('name', { required: 'Please enter your name.' })}
          />
          {errors.name && (
            <p className="mt-2 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="organization" className="mb-2 block font-mono text-xs uppercase tracking-wide text-slate">
            {t('contact.form.organization')}
          </label>
          <input
            id="organization"
            type="text"
            className={cn(fieldBase, errors.organization && 'border-red-400')}
            aria-invalid={errors.organization ? 'true' : 'false'}
            {...register('organization', { required: 'Please enter your organization.' })}
          />
          {errors.organization && (
            <p className="mt-2 text-xs text-red-500">{errors.organization.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wide text-slate">
            {t('contact.form.email')}
          </label>

          <input
            id="email"
            type="email"
            className={cn(fieldBase, errors.email && 'border-red-400')}
            aria-invalid={errors.email ? 'true' : 'false'}
            {...register('email', {
              required: 'Please enter your email address.',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address.',
              },
            })}
          />
          {errors.email && (
            <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="country" className="mb-2 block font-mono text-xs uppercase tracking-wide text-slate">
            {t('contact.form.country')}
          </label>

          <input
            id="country"
            type="text"
            className={cn(fieldBase, errors.country && 'border-red-400')}
            aria-invalid={errors.country ? 'true' : 'false'}
            {...register('country', { required: 'Please enter your country.' })}
          />
          {errors.country && (
            <p className="mt-2 text-xs text-red-500">{errors.country.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wide text-slate">
          {t('contact.form.message')}
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(fieldBase, 'resize-none', errors.message && 'border-red-400')}
          aria-invalid={errors.message ? 'true' : 'false'}
          {...register('message', {
            required: 'Please tell us a little about your inquiry.',
            minLength: { value: 10, message: 'Please add a few more details.' },
          })}
        />
        {errors.message && (
          <p className="mt-2 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex w-fit items-center justify-center bg-ink px-8 py-3 font-body text-sm font-medium text-paper transition-colors hover:bg-ink-soft disabled:opacity-60"
      >
        {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
      </button>
    </form>
  )
}
