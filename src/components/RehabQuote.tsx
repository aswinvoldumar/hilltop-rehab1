import { useEffect, useMemo, useRef, useState } from 'react'
import { rehabQuote } from '../data/site'

export function RehabQuote() {
  const sectionRef = useRef<HTMLElement>(null)
  const [filled, setFilled] = useState(0)
  const letters = useMemo(
    () =>
      rehabQuote.flatMap((line, lineIndex) =>
        [...line].map((char) => ({ char, lineIndex })),
      ),
    [],
  )

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setFilled(letters.length)
      return undefined
    }

    let frame = 0

    function update() {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const scrollable = section.offsetHeight - window.innerHeight
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(scrollable, 1))
      const progress = scrollable > 0 ? scrolled / scrollable : 1
      setFilled(Math.round(progress * letters.length))
    }

    function onScroll() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [letters.length])

  let cursor = 0

  return (
    <section ref={sectionRef} className="relative h-[220vh] bg-cream" aria-label="Rehabilitation quote">
      <div className="sticky top-0 flex h-svh items-center">
        <div className="mx-auto w-full max-w-content px-5 text-center sm:px-8 lg:px-12">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.22em] text-brand">
            Rehabilitation
          </p>
          <h2 className="sr-only">{rehabQuote.join(' ')}</h2>
          <div aria-hidden="true" className="space-y-3 sm:space-y-4">
            {rehabQuote.map((line) => {
              const start = cursor
              cursor += line.length

              return (
                <p
                  key={line}
                  className="text-2xl font-normal leading-[1.3] tracking-tight sm:text-4xl lg:text-[2.75rem] xl:text-5xl"
                >
                  {[...line].map((char, index) => {
                    const letterIndex = start + index
                    const isFilled = letterIndex < filled
                    return (
                      <span
                        key={`${line}-${index}`}
                        className={`inline-block transition-colors duration-150 ${
                          isFilled ? 'text-brand-dark' : 'text-[#b9d8c6]'
                        }`}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    )
                  })}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
