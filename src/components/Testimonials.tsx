import { Quote } from 'lucide-react'
import { testimonials } from '../data/site'
import { Button } from './Button'

export function Testimonials() {
  return (
    <section className="bg-cream px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Patient Testimonials</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold text-ink sm:text-4xl">
              Here's what our satisfied patients are saying...
            </h2>
          </div>
          <Button to="/reviews" variant="secondary">
            Read Reviews
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-[1.75rem] border border-line bg-white p-8 shadow-sm"
            >
              <Quote className="h-8 w-8 text-brand" aria-hidden="true" />
              <p className="mt-4 text-lg text-ink">“{item.quote}”</p>
              <footer className="mt-6 font-semibold text-brand-dark">— {item.name}</footer>
            </blockquote>
          ))}
          <div className="rounded-[1.75rem] border border-dashed border-line bg-white/70 p-8">
            <h3 className="text-xl font-bold text-ink">Hear What Everyone Else Thinks</h3>
            <p className="mt-3 text-muted">
              We understand if you'd rather not take our word for it. After all, everyone says nice
              things about their own business. Our past clients can't lie though. They really do love
              our service, and they're always writing to tell us about it. Read some of their comments
              here.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
