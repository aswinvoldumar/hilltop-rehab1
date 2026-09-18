import { images } from '../assets/images'
import { ContactCTA } from '../components/ContactCTA'
import { PageHero } from '../components/PageHero'
import { rehabServices, site, testimonials } from '../data/site'
import { Button } from '../components/Button'

export function Rehabilitation() {
  return (
    <>
      <PageHero
        title="Physical Rehabilitation Programs"
        description="We've designed our rehabilitation program to help you regain your full potential after suffering from illness or injury."
        image={images.therapy}
        imageAlt="Physical therapy at Hilltop Estates"
      />
      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink">It Takes Time to Get Better</h2>
            <p className="mt-4 text-lg text-muted">
              Rehabilitation is all about taking the time to make sure that you actually recover from
              your injury or condition. It also means understanding that results won't happen
              overnight. Rely on the professionals at Hilltop Estates to help you get better.
            </p>
            <p className="mt-4 text-lg text-muted">
              Getting better after an accident or injury can take a long time, and it can be a very
              delicate process. We are here to help, each step of the way.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem]">
            <img
              src={images.rehabRoom}
              alt="Rehabilitation room at Hilltop Estates"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-ink">
            Rehabilitation Through Physical and Occupational Therapy
          </h2>
          <p className="mt-4 max-w-4xl text-lg text-muted">
            We've designed our rehabilitation program to help you regain your full potential after
            suffering from illness or injury. Whatever your age, we'll help you get back home soon.
            After an initial evaluation of your specific needs, we focus our treatments to make you
            reach your prior functioning level.
          </p>
          <p className="mt-4 max-w-4xl text-lg text-muted">
            Common problems that we evaluate and treat are related to back and neck injuries,
            sports-related injuries, stroke, joint replacements, fractures, neurological disorders,
            and pulmonary or cardiovascular-related problems.
          </p>
          <p className="mt-4 text-lg text-muted">
            Count on us to work with your insurance company and handle all the paperwork.
          </p>
        </div>
      </section>
      <section className="bg-cream px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-content">
          <h2 className="text-3xl font-extrabold text-ink">Our Services and Areas of Treatment</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rehabServices.map((service) => (
              <article key={service.title} className="rounded-[1.5rem] bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-ink">{service.title}</h3>
                <p className="mt-2 text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-extrabold text-ink">Who's Going to Take Care of You?</h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          If you choose Hilltop Estates, your care will be in the hands of one of our excellent
          medical professionals. If you're interested in learning a bit more about what makes our
          staff so special, visit our Faculty page.
        </p>
        <div className="mt-6">
          <Button to="/faculty">Meet Our Team</Button>
        </div>
        <h2 className="mt-16 text-3xl font-extrabold text-ink">
          Trust Us to Make Rehabilitation Easy and Comfortable
        </h2>
        <p className="mt-4 text-lg text-muted">Call us to start your rehabilitation program.</p>
        <div className="mt-6">
          <Button href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</Button>
        </div>
        <blockquote className="mt-12 max-w-3xl rounded-[1.75rem] border border-line bg-cream p-8">
          <p className="text-xl text-ink">“{testimonials[0].quote}”</p>
          <footer className="mt-4 font-semibold text-brand-dark">— {testimonials[0].name}</footer>
        </blockquote>
      </section>
      <ContactCTA />
    </>
  )
}
