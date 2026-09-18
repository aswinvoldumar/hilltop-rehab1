import {
  BadgeCheck,
  HeartHandshake,
  Users,
  Wifi,
} from 'lucide-react'
import { trustHighlights } from '../data/site'

const icons = {
  BadgeCheck,
  Users,
  Wifi,
  HeartHandshake,
}

export function TrustHighlights() {
  return (
    <section className="bg-cream px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-content">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Hilltop Estates</p>
          <h2 className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
            Fully Certified, Trained Staff
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustHighlights.map((item) => {
            const Icon = icons[item.icon]
            return (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-line bg-white p-6 text-center shadow-sm"
              >
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
