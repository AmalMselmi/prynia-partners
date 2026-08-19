import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ceoPhoto, teamPhotos } from '../../data/team'
import { calendlyLinks } from '../../data/calendlyLinks'
import { PopupWidget, useCalendlyEventListener } from 'react-calendly'

/**
 * TeamPickerCards — shown after a Discovery Call request is
 * submitted. Lets the visitor pick which team member they'd like to
 * speak with, then opens that person's own Calendly popup. Names,
 * roles, and photos are pulled from the same sources as Meet the
 * Team, so the two always stay in sync.
 */
export default function TeamPickerCards({ onBooked }) {
  const { t } = useTranslation()
  const [openFor, setOpenFor] = useState(null)
  useCalendlyEventListener({
  onEventScheduled: () => {
    onBooked?.()
  },
})

  const teamMembers = t('team.members', { returnObjects: true })

  const people = [
    {
      id: 'narjess',
      photo: ceoPhoto,
      name: t('team.ceo.name'),
      role: t('team.ceo.role'),
      calendlyUrl: calendlyLinks.narjess,
    },
    {
      id: 'hind',
      photo: teamPhotos[0],
      name: teamMembers[0].name,
      role: teamMembers[0].role,
      calendlyUrl: calendlyLinks.hind,
    },
  ]

  return (
    <div className="mt-8 w-full">
      <p className="mb-5 text-center font-mono text-xs font-bold uppercase tracking-wide text-slate">
        {t('contact.discoveryCall.form.choosePerson')}
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {people.map((person) => (
          <div
            key={person.id}
            className="flex flex-col items-center gap-4 border border-ink/12 bg-white/60 p-6 text-center"
          >
            <div className="h-24 w-24 overflow-hidden rounded-full bg-ink">
              <img
                src={person.photo}
                alt={person.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div>
              <h4 className="font-display text-lg text-ink">{person.name}</h4>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-gold">
                {person.role}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpenFor(person.id)}
              className="mt-2 inline-flex items-center justify-center bg-gold px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-gold-soft"
            >
              {t('contact.discoveryCall.form.bookWith', { name: person.name })}
            </button>

            {openFor === person.id && (
              <PopupWidget
                url={person.calendlyUrl}
                onModalClose={() => setOpenFor(null)}
                open
                rootElement={document.getElementById('root')}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}