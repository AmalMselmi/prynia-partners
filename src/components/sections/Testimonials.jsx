import SectionHeading from '../ui/SectionHeading'
import TestimonialCard from '../ui/TestimonialCard'
import { testimonials } from '../../data/testimonials'

/**
 * Testimonials — sits on Home, between WhyChoose and the final CTA,
 * so trust-building content leads directly into the closing invite
 * to get in touch.
 */
export default function Testimonials() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-prynia">
        <SectionHeading
          eyebrow="What Partners Say"
          title="Trusted by the institutions we serve."
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name + i} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}