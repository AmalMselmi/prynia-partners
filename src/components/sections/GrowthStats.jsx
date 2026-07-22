import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import GrowthRings from '../ui/GrowthRings'
import { stats } from '../../data/stats'
import { useCountUp } from '../../hooks/useCountUp'

function StatItem({ stat, index, start }) {
  const count = useCountUp(stat.value, start, 1200 + index * 150)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      className="border-t border-paper/15 pt-6 text-center md:text-left"
    >
      <p className="font-display text-4xl text-paper md:text-5xl">
        {count}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-paper/60">{stat.label}</p>
    </motion.div>
  )
}

/**
 * GrowthStats — quantifies "Growing Prosperity" with a small set of
 * animated figures. `start` is toggled by a wrapping motion.div's
 * onViewportEnter so all counters begin together the first time the
 * section scrolls into view.
 */
export default function GrowthStats() {
  const [start, setStart] = useState(false)

  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <GrowthRings
        className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 text-paper/[0.05] md:h-96 md:w-96"
        strokeWidth={1}
      />
      <motion.div
        onViewportEnter={() => setStart(true)}
        viewport={{ once: true, margin: '-100px' }}
        className="container-prynia relative"
      >
        <SectionHeading
          eyebrow="Our Impact"
          title="Prosperity, measured."
          description="A snapshot of the institutions and programs Prynia Partners has supported."
          className="[&_h2]:text-paper [&_p]:text-paper/60"
        />

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} start={start} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}