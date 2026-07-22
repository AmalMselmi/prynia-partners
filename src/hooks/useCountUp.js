import { useEffect, useRef, useState } from 'react'

/**
 * useCountUp — animates a number from 0 to `end` over `duration` ms,
 * starting only once `start` becomes true (driven by whileInView in
 * the component using it, so numbers don't animate off-screen).
 */
export function useCountUp(end, start, duration = 1400) {
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!start || startedRef.current) return
    startedRef.current = true

    const startTime = performance.now()

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1)
      // ease-out for a natural deceleration into the final number
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [start, end, duration])

  return value
}