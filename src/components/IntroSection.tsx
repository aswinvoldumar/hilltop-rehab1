import { intro, site } from '../data/site'
import { Button } from './Button'

export function IntroSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-content text-center">
        <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-5xl">{intro.heading}</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted sm:text-xl">{intro.body}</p>
        <div className="mt-8">
          <Button href={`tel:${site.phoneTel}`}>Call {site.phoneDisplay}</Button>
        </div>
      </div>
    </section>
  )
}
