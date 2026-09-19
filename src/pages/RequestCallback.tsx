import { images } from '../assets/images'
import { InquiryForm } from '../components/InquiryForm'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { callbackNotes, site } from '../data/site'

export function RequestCallback() {
  return (
    <>
      <PageHero
        title="Request a Call Back"
        description="Now offering virtual consultations!"
        image={images.virtual}
        imageAlt="Rehabilitation consultation"
      />
      <section className="mx-auto grid max-w-content gap-12 px-5 py-16 sm:px-8 lg:px-12 lg:grid-cols-2">
        <Reveal direction="from-left">
        <div>
          <p className="text-lg text-muted">
            Fill out this short form and a Hilltop Estates representative will contact you in two to
            three business days.
          </p>
          <h2 className="mt-10 text-2xl font-bold text-ink">Important Notes:</h2>
          <ul className="mt-4 space-y-4">
            {callbackNotes.map((note) => (
              <li key={note} className="rounded-2xl border border-line bg-white p-4 text-muted">
                {note}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-muted">
            You can also call{' '}
            <a href={`tel:${site.phoneTel}`} className="font-semibold text-brand underline">
              {site.phoneDisplay}
            </a>
            .
          </p>
        </div>
        </Reveal>
        <Reveal direction="from-right" delay={80}>
          <InquiryForm kind="callback" />
        </Reveal>
      </section>
    </>
  )
}
