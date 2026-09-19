import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { images } from '../assets/images'
import { InquiryForm } from '../components/InquiryForm'
import { PageHero } from '../components/PageHero'
import { Reveal } from '../components/Reveal'
import { site } from '../data/site'

export function Contact() {
  return (
    <>
      <PageHero
        title="Contact Hilltop Estates"
        description="Get in Touch With Us"
        image={images.facilitySign}
        imageAlt="Hilltop Estates Rehabilitation Center"
      />
      <section className="mx-auto grid max-w-content gap-12 px-5 py-16 sm:px-8 lg:px-12 lg:grid-cols-2">
        <Reveal direction="from-left">
        <div>
          <h2 className="text-3xl font-extrabold text-ink">Get in Touch With Us</h2>
          <p className="mt-4 text-lg text-muted">
            Please fill out this short form and we'll contact you shortly.
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <MapPin className="mt-1 h-6 w-6 text-brand" />
              <div>
                <p className="font-semibold">Visit Us</p>
                <p>
                  {site.addressLines[0]}
                  <br />
                  {site.addressLines[1]}
                </p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block font-semibold text-brand underline"
                >
                  Get Directions
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-1 h-6 w-6 text-brand" />
              <div>
                <p className="font-semibold">Visiting Hours</p>
                <p>
                  {site.visitingHours.days}
                  <br />
                  {site.visitingHours.time}
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 h-6 w-6 text-brand" />
              <div>
                <p className="font-semibold">Contact Us</p>
                <p>
                  Main:{' '}
                  <a href={`tel:${site.phoneTel}`} className="text-brand underline">
                    {site.phoneDisplay}
                  </a>
                </p>
                <p>Fax: {site.faxDisplay}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 h-6 w-6 text-brand" />
              <a href={`mailto:${site.email}`} className="text-brand underline">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
        </Reveal>
        <Reveal direction="from-right" delay={80}>
          <InquiryForm kind="contact" />
        </Reveal>
      </section>
    </>
  )
}
