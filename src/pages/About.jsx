import { motion } from 'framer-motion'
import PageBanner from '../components/ui/PageBanner'
import SectionHeading from '../components/ui/SectionHeading'
import CTASection from '../components/sections/CTASection'
import { company, coreValues, companyStory } from '../data/company'
import MeetTheTeam from '../components/sections/MeetTheTeam'

export default function About() {
  return (
    <>
      <PageBanner
        eyebrow="About Prynia Partners"
        title="Guiding development and prosperity."
        description="A transdisciplinary partner for the institutions responsible for public and international prosperity."
      />

      {/* Vision & Mission */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-prynia grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHeading eyebrow="Our Vision" title={company.vision} />
          </div>
          <div className="md:col-span-8">
            <p className="eyebrow mb-4">Our Mission</p>
            <p className="max-w-2xl text-lg text-ink leading-relaxed">
              {company.missionIntro}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {company.missionPillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                  className="border-t border-ink/15 pt-5"
                >
                  <h3 className="font-display text-lg text-ink">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-slate leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-paper-dim/60 py-24 md:py-32">
        <div className="container-prynia">
          <SectionHeading
            eyebrow="What Guides Us"
            title="Core Values"
            align="center"
            className="mx-auto"
          />
          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
                className="border-t border-ink/15 pt-6 text-center"
              >
                <h3 className="font-display text-xl text-ink">{value.title}</h3>
                <p className="mt-3 text-sm text-slate leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-prynia">
          <SectionHeading eyebrow="Our Story" title="How Prynia came to be" />
          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-2">
            {companyStory.map((block, i) => (
              <motion.div
                key={block.heading}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              >
                <h3 className="font-display text-2xl text-ink">{block.heading}</h3>
                <p className="mt-4 text-slate leading-relaxed">{block.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MeetTheTeam />

      <CTASection />
    </>
  )
}
