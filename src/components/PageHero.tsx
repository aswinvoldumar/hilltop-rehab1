import { Reveal } from './Reveal'

type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
  image: string
  imageAlt: string
}

export function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <Reveal direction="from-scale">
    <section className="relative isolate overflow-hidden rounded-b-[2rem] bg-black pt-32 sm:pt-36">
      <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      <div className="relative mx-auto max-w-content px-5 py-16 sm:px-8 lg:px-12">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg text-white/90">{description}</p>
        ) : null}
      </div>
    </section>
    </Reveal>
  )
}
