import { images } from '../assets/images'
import { virtualConsult } from '../data/site'
import { Button } from './Button'

export function VirtualConsultation() {
  return (
    <section className="px-5 py-6 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-content overflow-hidden rounded-[2rem]">
        <img
          src={images.virtual}
          alt="Rehabilitation therapy session"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="relative grid gap-8 px-6 py-14 sm:px-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
              {virtualConsult.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">{virtualConsult.heading}</h2>
            <p className="mt-5 max-w-xl text-lg text-white/90">{virtualConsult.body}</p>
          </div>
          <div className="lg:justify-self-end">
            <Button to="/request-a-call-back" variant="light">
              Request a Call Back
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
