import { Hero } from '../components/Hero'
import { RehabQuote } from '../components/RehabQuote'
import { TrustHighlights } from '../components/TrustHighlights'
import { VirtualConsultation } from '../components/VirtualConsultation'
import { IntroSection } from '../components/IntroSection'
import { ServicesSection } from '../components/ServicesSection'
import { RehabilitationSection } from '../components/RehabilitationSection'
import { Testimonials } from '../components/Testimonials'
import { AboutSection } from '../components/AboutSection'
import { ContactCTA } from '../components/ContactCTA'

export function Home() {
  return (
    <>
      <Hero />
      <RehabQuote />
      <TrustHighlights />
      <VirtualConsultation />
      <IntroSection />
      <ServicesSection />
      <RehabilitationSection />
      <Testimonials />
      <AboutSection />
      <ContactCTA />
    </>
  )
}
