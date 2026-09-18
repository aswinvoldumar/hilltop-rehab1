import { Phone } from 'lucide-react'
import { site } from '../data/site'
import { Button } from './Button'

export function ContactCTA() {
  return (
    <section className="px-5 pb-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-content overflow-hidden rounded-[2rem] bg-brand px-6 py-14 text-center text-white sm:px-12">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to learn more about Hilltop Estates?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          Request a call back or call us today at {site.phoneDisplay} to schedule an appointment.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/request-a-call-back" variant="light">
            Request a Call Back
          </Button>
          <Button href={`tel:${site.phoneTel}`} variant="outline">
            <Phone className="h-4 w-4" />
            Call {site.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  )
}
