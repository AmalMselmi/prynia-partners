import PageBanner from '../components/ui/PageBanner'
import ServiceCard from '../components/ui/ServiceCard'
import CTASection from '../components/sections/CTASection'
import { services } from '../data/services'
import TrainingCatalogue from '../components/sections/TrainingCatalogue'

export default function Services() {
  return (
    <>
      <PageBanner
        eyebrow="What We Do"
        title="Services"
        description="Three disciplines that work in concert to move institutions from analysis to durable, on-the-ground prosperity."
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-prynia grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>

<TrainingCatalogue />

<CTASection
  title="Not sure which program fits your mandate?"
  buttonLabel="Talk to Our Team"
/>
      <CTASection
        title="Not sure which program fits your mandate?"
        buttonLabel="Talk to Our Team"
      />
    </>
  )
}
