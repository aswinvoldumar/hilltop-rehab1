import { NavLink } from 'react-router-dom'
import { nondiscriminationPdfUrl } from '../assets/images'
import { Reveal } from '../components/Reveal'
import { legalPages } from '../data/legal'

type LegalKey = keyof typeof legalPages

type LegalPageProps = {
  page: LegalKey
}

export function LegalPage({ page }: LegalPageProps) {
  const content = legalPages[page]

  return (
    <article className="mx-auto max-w-4xl px-5 pb-20 pt-36 sm:px-8 lg:px-12">
      <Reveal direction="from-bottom">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Legal</p>
      <h1 className="mt-3 text-4xl font-extrabold text-ink">{content.title}</h1>
      {content.updated ? <p className="mt-3 text-sm text-muted">{content.updated}</p> : null}
      </Reveal>
      <div className="mt-10 space-y-8">
        {content.sections.map((section, index) => (
          <Reveal
            key={section.heading}
            direction={index % 2 === 0 ? 'from-left' : 'from-right'}
            delay={(index % 4) * 60}
          >
          <section>
            <h2 className="text-2xl font-bold text-ink">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-muted">
                {paragraph}
              </p>
            ))}
          </section>
          </Reveal>
        ))}
      </div>
      {page === 'nondiscrimination' ? (
        <p className="mt-8">
          <a
            href={nondiscriminationPdfUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand underline"
          >
            View the Notice of Nondiscrimination Statement (PDF)
          </a>
        </p>
      ) : null}
      {page === 'privacy' ? (
        <p className="mt-8">
          See also our{' '}
          <NavLink to="/do-not-share" className="font-semibold text-brand underline">
            Do Not Share My Information
          </NavLink>{' '}
          page.
        </p>
      ) : null}
    </article>
  )
}
