import { buildingGallery, funGallery, images } from '../assets/images'
import { ContactCTA } from '../components/ContactCTA'
import { GalleryGrid } from '../components/GalleryGrid'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { site } from '../data/site'

export function PhotoTour() {
  return (
    <>
      <PageHero
        title="Hilltop Estates Photo Gallery"
        description="Take a Tour Around Hilltop Estates"
        image={images.building}
        imageAlt="Hilltop Estates Rehabilitation Center building"
      />
      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:px-12">
        <Reveal direction="from-bottom">
        <p className="gallery-intro max-w-3xl text-lg text-muted">
          At Hilltop Estates, we'd love you to visit our facilities. Check out these photos to get a
          better idea of what life at Hilltop Estates is like. We do not discriminate on the basis of
          race, color, age, or disability. Call {site.phoneDisplay} today to schedule your tour.
        </p>
        </Reveal>
        <Reveal direction="from-left">
        <h2 className="gallery-heading mt-12 text-3xl font-extrabold text-ink">Our Building</h2>
        </Reveal>
        <GalleryGrid photos={buildingGallery} />
        <Reveal direction="from-right">
        <h2 className="gallery-heading mt-16 text-3xl font-extrabold text-ink">
          Check Out All the Fun We Have Here!
        </h2>
        </Reveal>
        <GalleryGrid photos={funGallery} />
      </section>
      <ContactCTA />
    </>
  )
}
