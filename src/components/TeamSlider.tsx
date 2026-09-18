import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { images } from '../assets/images'
import { teamMembers } from '../data/site'

const photos = {
  staffBahe: images.staffBahe,
  staffDavis: images.staffDavis,
  staffDonner: images.staffDonner,
  staffGarcia: images.staffGarcia,
}

function wrappedOffset(index: number, active: number, length: number) {
  let diff = index - active
  if (diff > length / 2) diff -= length
  if (diff < -length / 2) diff += length
  return diff
}

export function TeamSlider() {
  const [active, setActive] = useState(0)
  const total = teamMembers.length

  function goTo(next: number) {
    setActive((next + total) % total)
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') goTo(active - 1)
      if (event.key === 'ArrowRight') goTo(active + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, total])

  return (
    <div className="relative overflow-x-hidden px-4 sm:px-10">
      <div className="relative mx-auto h-[34rem] max-w-6xl sm:h-[36rem]">
        {teamMembers.map((member, index) => {
          const offset = wrappedOffset(index, active, total)
          const isCenter = offset === 0
          const hidden = Math.abs(offset) > 2

          return (
            <article
              key={member.name}
              className="absolute top-1/2 left-1/2 h-[28rem] w-[min(100%,22rem)] overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-lg transition-all duration-500 ease-out"
              style={{
                transform: `translate(-50%, -50%) translateX(${offset * 72}%) scale(${isCenter ? 1 : 0.78})`,
                zIndex: isCenter ? 20 : 10 - Math.abs(offset),
                opacity: hidden ? 0 : isCenter ? 1 : 0.45,
                pointerEvents: hidden ? 'none' : 'auto',
                filter: isCenter ? 'none' : 'saturate(0.85)',
              }}
            >
              <button
                type="button"
                className="flex h-full w-full flex-col text-left"
                onClick={() => goTo(index)}
                aria-label={`${member.name}, ${member.role}`}
                tabIndex={hidden ? -1 : 0}
              >
                {member.photo ? (
                  <img
                    src={photos[member.photo]}
                    alt=""
                    className="h-52 w-full shrink-0 object-cover object-top"
                  />
                ) : (
                  <div className="flex h-52 w-full shrink-0 items-center justify-center bg-brand-soft text-4xl font-bold text-brand">
                    {member.name
                      .split(' ')
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join('')}
                  </div>
                )}
                <div className="flex min-h-0 flex-1 flex-col p-5">
                  <h3 className="line-clamp-2 min-h-[3.25rem] text-lg font-bold leading-snug text-ink">
                    {member.name}
                  </h3>
                  <p className="mt-1 line-clamp-1 text-sm font-medium text-brand">{member.role}</p>
                  <p className="mt-3 line-clamp-3 min-h-[3.75rem] text-sm text-muted">
                    {member.bio[0] ?? ''}
                  </p>
                </div>
              </button>
            </article>
          )
        })}
      </div>

      <button
        type="button"
        className="absolute top-1/2 left-0 z-30 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md transition hover:bg-cream sm:left-2"
        aria-label="Previous team member"
        onClick={() => goTo(active - 1)}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-0 z-30 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md transition hover:bg-cream sm:right-2"
        aria-label="Next team member"
        onClick={() => goTo(active + 1)}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Team members">
        {teamMembers.map((member, index) => (
          <button
            key={member.name}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={member.name}
            className={`h-2.5 rounded-full transition-all ${
              index === active ? 'w-8 bg-brand' : 'w-2.5 bg-line hover:bg-muted'
            }`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>

      {teamMembers[active]?.email ? (
        <p className="mt-5 text-center">
          <a
            href={`mailto:${teamMembers[active].email}`}
            className="font-semibold text-brand underline"
          >
            {teamMembers[active].email}
          </a>
        </p>
      ) : null}
    </div>
  )
}
