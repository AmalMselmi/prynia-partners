import { Compass, GraduationCap, Globe2 } from 'lucide-react'

/**
 * Services — icons and slugs only. All title/description/items/CTA
 * text now lives in the translation files under services.list,
 * keyed by array index. This file just maps each position to its
 * icon and a stable slug for React keys and routing.
 */
export const services = [
  { slug: 'cultural-advisory', icon: Compass },
  { slug: 'leadership-trainings', icon: GraduationCap },
  { slug: 'international-engagement', icon: Globe2 },
]