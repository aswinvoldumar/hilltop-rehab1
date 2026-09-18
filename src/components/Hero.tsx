import { useEffect, useState } from 'react'
import { CheckCircle2, ChevronLeft, ChevronRight, Phone, Star } from 'lucide-react'
import { heroSlides } from '../assets/images'
import { site } from '../data/site'
import { Button } from './Button'

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return undefined

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  function goTo(next: number) {
    setIndex((next + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative isolate overflow-hidden rounded-b-[2rem] bg-black">
      <div className="absolute inset-0" aria-hidden="true">
        {heroSlides.map((slide, slideIndex) => (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              slideIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

      <div className="relative mx-auto flex min-h-[40rem] max-w-content items-end px-5 pb-16 pt-44 sm:min-h-[46rem] sm:px-8 sm:pb-20 lg:min-h-[72svh] lg:px-12 lg:items-center lg:pt-40">
        <div className="max-w-3xl text-white">
          <div className="mb-4 flex items-center gap-2.5" aria-label="4.4 out of 5 star rating">
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }, (_, star) => {
                const fill = Math.min(1, Math.max(0, 4.4 - star))
                return (
                  <span key={star} className="relative h-5 w-5">
                    <Star className="h-5 w-5 text-white/35" />
                    <span
                      className="absolute inset-y-0 left-0 overflow-hidden"
                      style={{ width: `${fill * 100}%` }}
                    >
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    </span>
                  </span>
                )
              })}
            </div>
            <p className="text-sm font-semibold tracking-wide text-white">4.4 Rating</p>
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/85">
            Gothenburg, Nebraska
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90">{site.supportingLine}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/request-a-call-back" variant="light">
              Request a Call Back
            </Button>
            <Button href={`tel:${site.phoneTel}`} variant="outline">
              <Phone className="h-4 w-4" />
              Call {site.phoneDisplay}
            </Button>
          </div>
          <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
            {[
              'Fully Certified, Trained Staff',
              'Free Resident and Guest Wi-Fi',
              'Over 20 Years of Experience',
              'Virtual consultations available',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-200" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 sm:bottom-8 sm:right-10">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30"
          aria-label="Previous hero image"
          onClick={() => goTo(index - 1)}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2 px-2" role="tablist" aria-label="Hero images">
          {heroSlides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={slideIndex === index}
              aria-label={`Show image ${slideIndex + 1}: ${slide.alt}`}
              className={`h-2.5 rounded-full transition-all ${
                slideIndex === index ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
              onClick={() => goTo(slideIndex)}
            />
          ))}
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30"
          aria-label="Next hero image"
          onClick={() => goTo(index + 1)}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        {heroSlides[index].alt}
      </p>
    </section>
  )
}
