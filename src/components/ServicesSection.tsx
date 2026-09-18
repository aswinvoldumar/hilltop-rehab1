import { images } from '../assets/images'
import { homeCards } from '../data/site'
import { ServiceCard } from './ServiceCard'

const cardImages = {
  cardA: images.cardA,
  therapy: images.therapy,
  care: images.care,
}

export function ServicesSection() {
  return (
    <section className="bg-cream px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Rehabilitation Center</p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Information For Patients And Families
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {homeCards.map((card) => (
            <ServiceCard
              key={card.title}
              title={card.title}
              body={card.body}
              cta={card.cta}
              to={card.to}
              image={cardImages[card.imageKey]}
              imageAlt={`${card.title} at Hilltop Estates`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
