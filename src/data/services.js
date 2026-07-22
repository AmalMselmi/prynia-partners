/**
 * Service offerings. `icon` stores a lucide-react component
 * reference directly, since the icon set is fixed by the brief and
 * unlikely to become CMS-driven before the icon library itself
 * would change.
 */
import { Compass, Users, Handshake } from 'lucide-react'

export const services = [
  {
    slug: 'advisory-studies',
    icon: Compass,
    title: 'Advisory Studies',
    shortDescription:
      'Pragmatic, evidence-based studies that translate complex policy and development questions into clear direction.',
    description:
      'We conduct rigorous, field-informed research for governments and institutions navigating complex development questions, distilling findings into strategic direction leadership can act on with confidence.',
    ctaLabel: 'Discuss an Advisory Study',
  },
  {
    slug: 'leadership-trainings',
    icon: Users,
    title: 'Leadership Trainings',
    shortDescription:
      'Development programs that prepare institutional leaders to navigate change with clarity and conviction.',
    description:
      'Our leadership programs are designed for institutional leaders operating across cultures and mandates, building the judgment and communication needed to lead through uncertainty.',
    ctaLabel: 'Explore Leadership Training',
  },
  {
    slug: 'strategic-engagement',
    icon: Handshake,
    title: 'Strategic Engagement Programs',
    shortDescription:
      'Structured, multi-stakeholder engagement that builds durable alignment across cultures and mandates.',
    description:
      'We design and facilitate engagement processes that align governments, agencies, and communities around a shared strategic direction, built to endure beyond a single administration or mandate.',
    ctaLabel: 'Plan an Engagement Program',
  },
]
