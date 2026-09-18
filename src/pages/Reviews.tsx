import { Quote } from 'lucide-react'
import { images } from '../assets/images'
import { ContactCTA } from '../components/ContactCTA'
import { PageHero } from '../components/PageHero'
import { testimonials } from '../data/site'

export function Reviews() {
  return (
    <>
      <PageHero
        title="Hilltop Estates Patient Reviews"
        description="Here's what our satisfied patients are saying..."
        image={images.aboutMedia}
        imageAlt="Rehabilitation care at Hilltop Estates"
      />
      <section className="mx-auto max-w-content px-5 py-16 sm:px-8 lg:px-12">
        {testimonials.map((item) => (
          <blockquote
            key={item.name}
            className="rounded-[1.75rem] border border-line bg-white p-8 shadow-sm"
          >
            <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
            <p className="mt-4 text-xl text-ink">“{item.quote}”</p>
            <footer className="mt-6 font-semibold text-brand-dark">— {item.name}</footer>
          </blockquote>
        ))}
        <div className="mt-8 rounded-[1.75rem] border border-dashed border-line bg-cream p-8">
          <h2 className="text-2xl font-bold text-ink">Hear What Everyone Else Thinks</h2>
          <p className="mt-3 text-muted">
            We understand if you'd rather not take our word for it. After all, everyone says nice
            things about their own business. Our past clients can't lie though. They really do love
            our service, and they're always writing to tell us about it.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
