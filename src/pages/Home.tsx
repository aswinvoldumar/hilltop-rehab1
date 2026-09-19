import { AboutSection } from '../components/AboutSection'
import { ContactCTA } from '../components/ContactCTA'
import { Hero } from '../components/Hero'
import { IntroSection } from '../components/IntroSection'
import { RehabQuote } from '../components/RehabQuote'
import { RehabilitationSection } from '../components/RehabilitationSection'
import { Reveal } from '../components/Reveal'
import { ServicesSection } from '../components/ServicesSection'
import { Testimonials } from '../components/Testimonials'
import { TrustHighlights } from '../components/TrustHighlights'
import { VirtualConsultation } from '../components/VirtualConsultation'

export function Home() {
  return (
    <>
      <Reveal direction="from-scale">
        <Hero />
      </Reveal>
      <Reveal direction="from-bottom">
        <RehabQuote />
      </Reveal>
      <Reveal direction="from-left">
        <TrustHighlights />
      </Reveal>
      <Reveal direction="from-right">
        <VirtualConsultation />
      </Reveal>
      <Reveal direction="from-bottom">
        <IntroSection />
      </Reveal>
      <Reveal direction="from-left">
        <ServicesSection />
      </Reveal>
      <Reveal direction="from-right">
        <RehabilitationSection />
      </Reveal>
      <Reveal direction="from-bottom">
        <Testimonials />
      </Reveal>
      <Reveal direction="from-left">
        <AboutSection />
      </Reveal>
      <ContactCTA />
    </>
  )
}
