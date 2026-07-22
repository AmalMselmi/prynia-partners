import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { cn } from '../../utils/cn'
import Button from '../ui/Button'
import logo from '../../assets/prynia_logo.png'
/**
 * MobileMenu — full-screen overlay used below the md breakpoint.
 * Shares the navLinks data source with Navbar so link edits only
 * ever happen in one place.
 */
export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-ink text-paper md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="container-prynia flex h-20 items-center justify-between">
            <img src={logo} alt="Prynia Partners" className="h-23 w-auto" />
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center"
              aria-label="Close menu"
            >
              <X size={26} strokeWidth={1.5} />
            </button>
          </div>

          <motion.ul
            initial="closed"
            animate="open"
            variants={{
              open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              closed: {},
            }}
            className="container-prynia mt-10 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.path}
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 12 },
                }}
              >
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'block border-b border-paper/10 py-5 font-display text-3xl',
                      isActive ? 'text-gold-soft' : 'text-paper'
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>

          <div className="container-prynia mt-10">
            <Button to="/contact" variant="gold" onClick={onClose} showArrow={false}>
              Start a Conversation
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
