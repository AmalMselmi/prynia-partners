import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'
import Button from '../ui/Button'
import { services } from '../../data/services'

/**
 * ServicesPreview — the three core service lines, each rendered
 * with the shared ServiceCard used again (in more detail) on the
 * Services page.
 */
export default function ServicesPreview() {
  return (
    <section className="bg-paper-dim/60 py-24 md:py-32">
      <div className="container-prynia">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Three disciplines, one mandate."
            description="Advisory, leadership, and engagement work in concert, so a strategy is never handed over without the capacity to carry it forward."
          />
          <Button to="/services" variant="secondary" className="shrink-0">
            View All Services
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
