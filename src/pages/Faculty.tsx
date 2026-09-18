import { images } from '../assets/images'
import { ContactCTA } from '../components/ContactCTA'
import { PageHero } from '../components/PageHero'
import { TeamSlider } from '../components/TeamSlider'

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
          <TeamSlider />
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
