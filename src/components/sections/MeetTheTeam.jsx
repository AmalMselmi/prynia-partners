import { useTranslation } from 'react-i18next'
import SectionHeading from '../ui/SectionHeading'
import TeamCard from '../ui/TeamCard'
import { ceoPhoto, teamPhotos } from '../../data/team'

export default function MeetTheTeam() {
  const { t } = useTranslation()
  const ceoText = t('team.ceo', { returnObjects: true })
  const membersText = t('team.members', { returnObjects: true })

  const ceo = { ...ceoText, photo: ceoPhoto }
  const team = membersText.map((member, i) => ({ ...member, photo: teamPhotos[i] }))

  return (
    <section className="bg-paper-dim/60 py-24 md:py-32">
      <div className="container-prynia">
        <SectionHeading
          eyebrow={t('meetTheTeam.eyebrow')}
          title={t('meetTheTeam.title')}
          description={t('meetTheTeam.description')}
        />

        <div className="mt-14">
          <TeamCard person={ceo} featured />
        </div>

        <div className="mt-10 flex flex-col gap-8">
          {team.map((person, i) => (
            <TeamCard key={person.name} person={person} index={i} featured />
          ))}
        </div>
      </div>
    </section>
  )
}