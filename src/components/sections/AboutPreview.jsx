import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import { coreValues } from '../../data/company'

/**
 * AboutPreview — a condensed introduction to the company story and
 * core values, with a link through to the full About page.
 */
export default function AboutPreview() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-prynia">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeading
              eyebrow="About Prynia"
              title="Strategic counsel, built for public mandates."
              description="We bring the rigour of private-sector strategy to the institutions responsible for public prosperity, without losing sight of the cultural and political nuance their work demands."
            />
            <div className="mt-8">
              <Button to="/about" variant="ghost">
                Our Story
              </Button>
            </div>
          </div>

          <div className="md:col-span-7">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {coreValues.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                  className="border-t border-ink/15 pt-5"
                >
                  <dt className="font-display text-xl text-ink">{value.title}</dt>
                  <dd className="mt-2 text-sm text-slate leading-relaxed">
                    {value.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
