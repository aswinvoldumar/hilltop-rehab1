import { useLayoutEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { images } from '../assets/images'
import { ContactCTA } from '../components/ContactCTA'
import { PageHero } from '../components/PageHero'
import { teamMembers } from '../data/site'

const photos = {
  staffBahe: images.staffBahe,
  staffDavis: images.staffDavis,
  staffDonner: images.staffDonner,
  staffGarcia: images.staffGarcia,
}

type TeamMember = (typeof teamMembers)[number]

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [expanded, setExpanded] = useState(false)
  const [canExpand, setCanExpand] = useState(false)
  const bioRef = useRef<HTMLParagraphElement>(null)
  const fullBio = member.bio.join(' ')

  useLayoutEffect(() => {
    const el = bioRef.current
    if (!el || expanded) return

    const measure = () => {
      setCanExpand(el.scrollHeight > el.clientHeight + 1)
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [expanded, fullBio])

  return (
    <article className="flex flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-sm md:min-h-[22rem] md:flex-row">
      {member.photo ? (
        <div className="h-72 w-full shrink-0 overflow-hidden bg-brand-soft md:h-auto md:w-[40%] lg:w-[28rem]">
          <img
            src={photos[member.photo]}
            alt={member.name}
            className="h-full w-full object-cover object-top"
          />
        </div>
      ) : (
        <div className="flex h-72 w-full shrink-0 items-center justify-center bg-brand-soft text-4xl font-bold text-brand md:h-auto md:w-[40%] lg:w-[28rem]">
          {member.name
            .split(' ')
            .slice(0, 2)
            .map((part) => part[0])
            .join('')}
        </div>
      )}
      <div className="flex flex-1 flex-col justify-center p-6 lg:p-10">
        <h3 className="text-2xl font-bold text-ink">{member.name}</h3>
        <p className="mt-1 font-medium text-brand">{member.role}</p>
        {fullBio ? (
          <p ref={bioRef} className={`mt-3 text-muted ${expanded ? '' : 'line-clamp-5'}`}>
            {fullBio}
          </p>
        ) : null}
        {canExpand ? (
          <button
            type="button"
            className="mt-3 inline-flex items-center gap-1 self-start font-semibold text-brand hover:underline"
            aria-expanded={expanded}
            onClick={() => setExpanded((open) => !open)}
          >
            {expanded ? (
              <>
                Show less
                <ChevronUp className="h-5 w-5" />
              </>
            ) : (
              <>
                Show more
                <ChevronDown className="h-5 w-5" />
              </>
            )}
          </button>
        ) : null}
        {member.email ? (
          <a href={`mailto:${member.email}`} className="mt-4 font-semibold text-brand underline">
            {member.email}
          </a>
        ) : null}
      </div>
    </article>
  )
}

export function Faculty() {
  return (
    <>
      <PageHero
        title="Hilltop Estates Team"
        description="Each one of our staff members is fully trained and can provide the friendly medical attention that you or a loved one will require."
        image={images.facilitySign}
        imageAlt="Hilltop Estates Rehabilitation Center exterior"
      />
      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink">Fully Trained Staff</h2>
            <p className="mt-4 text-lg text-muted">
              That's just the easiest way for us to put it. Each one of our staff members is fully
              trained and can provide the friendly medical attention that you or a loved one will
              require. We hope you're ready to receive care from the best.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-ink">Our Certifications Aren't Everything</h2>
            <p className="mt-4 text-lg text-muted">
              At Hilltop Estates, we're proud that every member of our staff is fully certified and
              trained to deliver the best medical care to each one of our patients. We provide a
              personalized treatment catered to each of our patients to help them recover from their
              injuries.
            </p>
            <p className="mt-4 text-lg text-muted">
              We're also proud that we treat each one of our guests with a level of respect and
              compassion. We have over 20 years of experience.
            </p>
          </div>
        </div>
        <div className="mt-12 rounded-[1.75rem] bg-brand-soft p-8">
          <h2 className="text-2xl font-bold text-ink">Who Are We?</h2>
          <p className="mt-3 max-w-3xl text-muted">
            Before you go deciding on an individual staffer who will provide you or a loved one care,
            you may want to know a bit more about our facility. To learn more about Hilltop Estates,
            read the information listed here. We're a great facility, and we'll be even better when
            you join us.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-content">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-ink sm:text-4xl">Meet Our Team</h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
