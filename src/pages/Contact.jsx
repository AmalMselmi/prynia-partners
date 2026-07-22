import { Mail, Phone, MapPin } from 'lucide-react'
import PageBanner from '../components/ui/PageBanner'
import ContactForm from '../components/forms/ContactForm'
import { contactInfo } from '../data/company'

export default function Contact() {
  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        title="Start a conversation with Prynia Partners."
        description="Tell us about your institution and what you're hoping to achieve. A member of our team will respond within one business day."
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-prynia grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <div className="md:col-span-5">
            <div className="border border-ink/12 bg-white/40 p-8 md:p-10">
              <h3 className="font-display text-xl text-ink">Direct Contact</h3>
              <ul className="mt-6 flex flex-col gap-5">
                <li className="flex items-start gap-3">
                  <Mail size={18} strokeWidth={1.5} className="mt-0.5 text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-slate">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-ink hover:text-gold transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} strokeWidth={1.5} className="mt-0.5 text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-slate">Phone</p>
                    <span className="text-ink">{contactInfo.phone}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} strokeWidth={1.5} className="mt-0.5 text-gold" aria-hidden="true" />
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-slate">Office</p>
                    <span className="text-ink">{contactInfo.address}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
