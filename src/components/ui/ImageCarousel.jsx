import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { carouselImages } from '../../data/carousel'

const AUTOPLAY_INTERVAL = 5000

/**
 * ImageCarousel — full-bleed-feeling autoplaying slideshow, contained
 * within a fixed-aspect frame so layout never shifts as images change.
 * Fades between slides, pauses autoplay on hover/focus, supports
 * arrow-key navigation. `variant="dark"` swaps the outer border/shadow
 * treatment for use on dark backgrounds (e.g. inside the Hero) without
 * touching any of the carousel's actual behavior.
 */
export default function ImageCarousel({ variant = 'default', fill = false }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % carouselImages.length)
  }, [])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + carouselImages.length) % carouselImages.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, AUTOPLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [paused, next])
  const containerClasses = [
    'group relative w-full overflow-hidden border',
    variant === 'dark' ? 'border-paper/15 bg-ink shadow-2xl shadow-black/40' : 'border-ink/12 bg-ink',
    fill ? 'h-full' : '',
  ].join(' ')
  
  return (
    <div
      className={containerClasses}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Prynia Partners image gallery"
    >
<div className={fill ? 'relative h-full w-full' : 'relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[4/3]'}>
  <AnimatePresence mode="wait">
    <motion.img
      key={index}
      src={carouselImages[index].src}
      alt={carouselImages[index].alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className={`absolute inset-0 h-full w-full bg-ink ${fill ? 'object-cover' : 'object-contain'}`}
    />
  </AnimatePresence>
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink/70 to-transparent" />
</div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center border border-paper/30 bg-ink/40 text-paper opacity-0 backdrop-blur-sm transition-opacity duration-200 hover:bg-ink/60 focus-visible:opacity-100 group-hover:opacity-100 sm:flex"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} strokeWidth={2} />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center border border-paper/30 bg-ink/40 text-paper opacity-0 backdrop-blur-sm transition-opacity duration-200 hover:bg-ink/60 focus-visible:opacity-100 group-hover:opacity-100 sm:flex"
        aria-label="Next image"
      >
        <ChevronRight size={20} strokeWidth={2} />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-gold' : 'w-2 bg-paper/50 hover:bg-paper/80'
            }`}
            aria-label={`Go to image ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  )
}