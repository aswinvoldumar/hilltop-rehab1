import {
  Accessibility,
  Activity,
  Armchair,
  Dumbbell,
  Footprints,
  HeartPulse,
  House,
  MessageCircle,
  Scale,
  ShieldCheck,
} from 'lucide-react'
import { images } from '../assets/images'
import { rehabServices } from '../data/site'
import { Button } from './Button'

const icons = {
  Dumbbell,
  Footprints,
  Scale,
  HeartPulse,
  Activity,
  House,
  Accessibility,
  ShieldCheck,
  Armchair,
  MessageCircle,
}

export function RehabilitationSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Physical and Occupational Therapy
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Premium Therapies To Help You Return Home
          </h2>
          <p className="mt-5 text-lg text-muted">
            We can provide you with a variety of treatments and services, such as balance training,
            orthotic training, and prosthetic training to name a few. We can also provide speech
            therapy on demand.
          </p>
          <div className="mt-8">
            <Button to="/rehabilitation">Learn More About Rehabilitation</Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src={images.therapy}
            alt="Physical therapy session with a therapist assisting a patient"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="mx-auto mt-12 grid max-w-content gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {rehabServices.map((service) => {
          const Icon = icons[service.icon]
          return (
            <article key={service.title} className="rounded-2xl border border-line bg-cream p-4">
              <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
              <h3 className="mt-3 font-bold text-ink">{service.title}</h3>
              <p className="mt-1 text-sm text-muted">{service.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
