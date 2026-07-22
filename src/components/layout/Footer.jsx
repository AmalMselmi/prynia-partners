import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { services } from '../../data/services'
import { contactInfo } from '../../data/company'
import GrowthRings from '../ui/GrowthRings'
import logo from '../../assets/prynia_light.png'
import NewsletterForm from '../forms/NewsletterForm'

/**
 * Footer — the standard four-column pattern (logo/tagline,
 * navigation, services, contact), closed with a copyright line and
 * a small GrowthRings emblem as the site's recurring signature.
 */
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="border-b border-paper/10">
      <div className="container-prynia flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-display text-lg text-paper">Stay Informed</h3>
          <p className="mt-1 text-sm text-paper/60">
        Insight on development, leadership, and strategic engagement all in your inbox.
        </p>
        </div>
        <div className="w-full md:w-96">
          <NewsletterForm />
          </div>
          </div>
          </div>
      <div className="container-prynia grid grid-cols-1 gap-12 py-16 md:grid-cols-4 md:py-20">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Prynia Partners" className="h-30 w-auto" />
          </Link>
          <p className="mt-0 text-sm text-paper/60 leading-relaxed">
            Growing Prosperity through pragmatic advisory studies, visionary
            leadership trainings, and strategic engagement programs.
          </p>
        </div>

        <div>
          <h3 className="eyebrow mb-5 text-paper/50">Navigation</h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-paper/80 hover:text-gold-soft transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5 text-paper/50">Services</h3>
          <ul className="flex flex-col gap-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  to="/services"
                  className="text-sm text-paper/80 hover:text-gold-soft transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5 text-paper/50">Contact</h3>
          <ul className="flex flex-col gap-3 text-sm text-paper/80">
            <li className="flex items-center gap-2">
              <Mail size={15} strokeWidth={1.5} aria-hidden="true" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-gold-soft transition-colors">
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} strokeWidth={1.5} aria-hidden="true" />
              <span>{contactInfo.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} strokeWidth={1.5} aria-hidden="true" />
              <span>{contactInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-prynia flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="font-mono text-xs text-paper/50">
            © {year} Prynia Partners. All rights reserved.
          </p>
          <GrowthRings className="h-8 w-8 text-paper/40" variant="quarter" strokeWidth={1} />
        </div>
      </div>
    </footer>
  )
}
