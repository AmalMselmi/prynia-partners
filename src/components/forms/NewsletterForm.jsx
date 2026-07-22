import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '../../utils/cn'

/**
 * NewsletterForm — a lightweight, single-field signup used in the
 * footer. Uses the same EmailJS account as ContactForm, but its own
 * template, so submissions land in your inbox clearly labeled as
 * newsletter signups rather than contact inquiries. Swap the
 * onSubmit function for a real mailing-list provider (Mailchimp,
 * Brevo, etc.) once one is chosen — the form UI won't need to change.
 */
export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onBlur' })

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
        { email: data.email },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
      reset()
    } catch (error) {
      console.error('Newsletter signup error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  if (submitted) {
    return (
      <p className="flex items-center gap-2 text-sm text-paper/80">
        <CheckCircle2 size={16} strokeWidth={1.5} className="text-gold-soft" aria-hidden="true" />
        You're subscribed. Thank you.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-2 sm:flex-row sm:items-start">
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email address"
          className={cn(
            'w-full border border-paper/25 bg-transparent px-4 py-2.5 text-sm text-paper placeholder:text-paper/40 focus-visible:outline-2 focus-visible:outline-gold-soft transition-colors',
            errors.email && 'border-coral'
          )}
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email', {
            required: 'Please enter your email.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email.',
            },
          })}
        />
        {errors.email && (
          <p className="mt-1.5 text-xs text-coral">{errors.email.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="whitespace-nowrap bg-gold px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gold-soft disabled:opacity-60"
      >
        {isSubmitting ? 'Subscribing…' : 'Subscribe'}
      </button>
    </form>
  )
}