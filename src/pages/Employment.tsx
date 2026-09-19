import { images } from '../assets/images'
import { ContactCTA } from '../components/ContactCTA'
import { InquiryForm } from '../components/InquiryForm'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { employmentContacts, site } from '../data/site'

export function Employment() {
  return (
    <>
      <PageHero
        title="Hilltop Estates Employment Opportunities"
        description="Complete our application and apply to become a staff member at Hilltop Estates."
        image={images.facilitySign}
        imageAlt="Hilltop Estates Rehabilitation Center"
      />
      <section className="mx-auto grid max-w-content gap-12 px-5 py-16 sm:px-8 lg:px-12 lg:grid-cols-2">
        <Reveal direction="from-left">
        <div>
          <h2 className="text-3xl font-extrabold text-ink">Become a Member of Our Team</h2>
          <p className="mt-4 text-lg text-muted">
            Complete our application and apply to become a staff member at Hilltop Estates. We offer a
            pleasant working environment, competitive wages, and a employer matching retirement plan.
          </p>
          <h3 className="mt-10 text-2xl font-bold text-ink">Our Team Includes</h3>
          <ul className="mt-4 space-y-3">
            {employmentContacts.map((person) => (
              <li key={person.email} className="rounded-2xl border border-line bg-white p-4">
                <p className="font-semibold text-ink">
                  {person.title} – {person.name}
                </p>
                <a href={`mailto:${person.email}`} className="text-brand underline">
                  {person.email}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg font-semibold text-ink">
            We Offer Paid Holidays and Paid Vacation
          </p>
          <p className="mt-2 text-muted">
            Call us today for more details.{' '}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-brand underline">
              {site.phoneDisplay}
            </a>
          </p>
        </div>
        </Reveal>
        <Reveal direction="from-right" delay={80}>
          <InquiryForm kind="employment" />
        </Reveal>
      </section>
      <ContactCTA />
    </>
  )
}
