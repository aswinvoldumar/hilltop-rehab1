import { aboutVideoUrl, images } from '../assets/images'
import { Button } from '../components/Button'
import { ContactCTA } from '../components/ContactCTA'
import { PageHero } from '../components/PageHero'
import { site } from '../data/site'

export function About() {
  return (
    <>
      <PageHero
        title="About Hilltop Estates"
        description="We're Here to Care for You"
        image={images.facilitySign}
        imageAlt="Hilltop Estates Rehabilitation Center in Gothenburg, Nebraska"
      />
      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-ink">We're Here to Care for You</h2>
            <p className="mt-4 text-lg text-muted">
              Hilltop Estates offers primary nursing care to all residents. This means that our staff
              gets to know every patient and offers each of them a level of quality in their service
              that can't be matched anywhere else. If you're looking to receive care from the finest
              team in Gothenburg or ensure that it's there for a loved one, trust Hilltop Estates.
            </p>
          </div>
          <img
            src={images.building}
            alt="Hilltop Estates building at sunset"
            className="h-80 w-full rounded-[1.75rem] object-cover"
          />
        </div>
        <div className="mt-16 grid items-start gap-10 lg:grid-cols-2">
          <img
            src={images.aviary}
            alt="Aviary at Hilltop Estates"
            className="h-80 w-full rounded-[1.75rem] object-cover"
          />
          <div>
            <h2 className="text-3xl font-extrabold text-ink">Why Hilltop Estates?</h2>
            <p className="mt-4 text-lg text-muted">
              At Hilltop Estates, we think it's important that our patients have a choice. Our mission
              statement says it all - "We are a family-oriented health care provider dedicated to
              caring for all generations, whose mission is to enhance the lives of those we serve by
              providing quality care with respect, dignity, and kindness."
            </p>
            <p className="mt-4 text-lg text-muted">
              Our care plans are held each Thursday with the Social Service Director and Director of
              Nursing, Dietary, Activities. Family members and residents meet to discuss the care plan
              to ensure the resident is getting the best care possible for their individual needs. We
              also believe in quality in everything that we do. That's why our health and safety
              standards meet and often exceed all regulations. We also offer all residents a unique,
              home-like atmosphere where they can make new friends and visit old ones.
            </p>
            <p className="mt-4 text-lg text-muted">
              If you're interested in a pet, Hilltop Estates might be the home for you. We host a
              beautiful aviary. Call {site.phoneDisplay} now to find out about a care option for you.
            </p>
          </div>
        </div>
        <div className="mt-16 overflow-hidden rounded-[2rem] bg-ink">
          <video
            className="aspect-video w-full object-cover"
            controls
            poster={images.aboutMedia}
            preload="metadata"
          >
            <source src={aboutVideoUrl} type="video/mp4" />
          </video>
        </div>
        <div className="mt-12 rounded-[1.75rem] bg-brand-soft p-8">
          <h2 className="text-2xl font-bold text-ink">Hear What Everyone Else Thinks</h2>
          <p className="mt-3 max-w-3xl text-muted">
            We understand if you'd rather not take our word for it. After all, everyone says nice
            things about their own business. Our past clients can't lie though. They really do love
            our service, and they're always writing to tell us about it. Read some of their comments
            here.
          </p>
          <div className="mt-6">
            <Button to="/reviews">Read Reviews</Button>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
