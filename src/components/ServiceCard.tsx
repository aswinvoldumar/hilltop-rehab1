import { ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

type ServiceCardProps = {
  title: string
  body: string
  cta: string
  to: string
  image: string
  imageAlt: string
}

export function ServiceCard({ title, body, cta, to, image, imageAlt }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-ink">{title}</h3>
        <p className="mt-3 flex-1 text-muted">{body}</p>
        <NavLink
          to={to}
          className="mt-5 inline-flex items-center gap-2 font-semibold text-brand hover:gap-3"
        >
          {cta}
          <ArrowRight className="h-4 w-4" />
        </NavLink>
      </div>
    </article>
  )
}
