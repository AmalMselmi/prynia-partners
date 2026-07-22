import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../utils/cn'

const base =
  'inline-flex items-center justify-center gap-2 font-body text-sm font-medium tracking-wide px-6 py-3 rounded-[var(--radius-sm)] transition-colors duration-200 focus-visible:outline-2'

const variants = {
  primary: 'bg-ink text-paper hover:bg-ink-soft',
  secondary: 'border border-ink/25 text-ink hover:border-ink hover:bg-ink/5',
  gold: 'bg-gold text-white hover:bg-gold-soft',
  ghost: 'text-ink hover:text-gold',
}

/**
 * Button — renders as a React Router <Link> when `to` is given,
 * otherwise as a native <button>. `showArrow` appends the shared
 * arrow glyph used throughout the site for forward-moving actions.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  showArrow = true,
  className = '',
  ...rest
}) {
  const classes = cn(base, variants[variant], className)

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  )
}
