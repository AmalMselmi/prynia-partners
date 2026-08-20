import { motion } from 'framer-motion'
import GrowthRings from './GrowthRings'

export default function PageBanner({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const lines = Array.isArray(description)
    ? description
    : description
      ? [description]
      : []

  const lastIndex = lines.length - 1
  const centered = align === 'center'

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  }

  const revealUp = {
    hidden: {
      opacity: 0,
      y: 24,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="relative overflow-hidden bg-ink text-paper">

      {/* Ambient background glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: 'easeOut',
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-soft/[0.04] blur-3xl"
      />

      {!centered && (
        <GrowthRings
          className="pointer-events-none absolute -bottom-32 -right-32 h-[34rem] w-[34rem] text-paper/[0.06] md:h-[44rem] md:w-[44rem] rtl:-right-auto rtl:-left-32"
          strokeWidth={1}
        />
      )}

      <div className="container-prynia relative py-12 md:py-16">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className={
            centered
              ? 'mx-auto max-w-3xl text-center'
              : 'max-w-3xl'
          }
        >

          {/* Eyebrow */}
          {eyebrow && (
            <motion.p
              variants={revealUp}
              className="eyebrow mb-4 text-gold-soft"
            >
              {eyebrow}
            </motion.p>
          )}

          {/* Main title */}
          <motion.h1
            variants={revealUp}
            className="font-display text-4xl leading-tight md:text-3xl"
          >
            {title}
          </motion.h1>

          {/* Description */}
          {lines.length > 0 && (
            <div
              className={`mt-8 flex flex-col gap-3 ${
                centered ? 'items-center' : ''
              }`}
            >
              {lines.map((line, i) =>
                i === lastIndex && lines.length > 1 ? (
                  <motion.p
                    key={i}
                    variants={revealUp}
                    className={`page-banner-description mt-3 max-w-2xl text-base leading-relaxed text-paper/70 md:text-base ${                      centered ? 'mx-auto text-center' : ''
                    }`}
                  >
                    {line}
                  </motion.p>
                ) : (
                  <motion.p
                    key={i}
                    variants={revealUp}
                    className={`font-body font-normal text-2xl leading-snug text-paper/90 md:text-3xl ${
                      centered ? 'mx-auto text-center' : ''
                    }`}
                  >
                    {line}
                  </motion.p>
                )
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}