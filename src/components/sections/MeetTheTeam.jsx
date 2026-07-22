import SectionHeading from '../ui/SectionHeading'
import TeamCard from '../ui/TeamCard'
import { ceo, team } from '../../data/team'

/**
 * MeetTheTeam — CEO shown first in a larger "featured" card, with
 * the wider team below in a simpler grid. Lives on the About page,
 * directly after Company Story.
 */
export default function MeetTheTeam() {
  return (
    <section className="bg-paper-dim/60 py-24 md:py-32">
      <div className="container-prynia">
        <SectionHeading
          eyebrow="Leadership"
          title="The people behind Prynia Partners."
          description="A transdisciplinary team with direct experience advising governments, agencies, and international institutions."
        />

        <div className="mt-14">
          <TeamCard person={ceo} featured />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, i) => (
            <TeamCard key={person.name} person={person} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}