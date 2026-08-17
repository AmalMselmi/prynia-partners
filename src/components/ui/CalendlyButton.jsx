import { useState } from 'react'
import { PopupWidget } from 'react-calendly'
import { CalendarClock } from 'lucide-react'

/**
 * CalendlyButton — opens Calendly's own scheduling popup on click.
 * Kept as a standalone, self-contained component so it can be
 * dropped anywhere without affecting existing forms or state.
 * Replace CALENDLY_URL with the real link once available.
 */
const CALENDLY_URL = 'https://calendly.com/mselmii-amal-uvi0/discovery-calls'

export default function CalendlyButton({ label = 'Choose Your Preferred Time' }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gold-soft"      >
        <CalendarClock size={16} strokeWidth={2} aria-hidden="true" />
        {label}
      </button>

      {open && (
        <PopupWidget
          url={CALENDLY_URL}
          onModalClose={() => setOpen(false)}
          open={open}
          rootElement={document.getElementById('root')}
        />
      )}
    </>
  )
}