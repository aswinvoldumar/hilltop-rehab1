import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { legalLinks, navItems, site } from '../data/site'
import { LogoLink } from './LogoLink'

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-16 sm:px-8 lg:px-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <LogoLink className="mb-4 inline-block rounded-lg" imageClassName="h-14 w-auto rounded-lg" />
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="mt-2 text-white/75">{site.tagline}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">Visit Us</h2>
          <p className="mt-4 flex items-start gap-3 text-white/90">
            <MapPin className="mt-1 h-5 w-5 shrink-0" />
            <span>
              {site.addressLines[0]}
              <br />
              {site.addressLines[1]}
            </span>
          </p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
          >
            Get Directions
          </a>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">Visiting Hours</h2>
          <p className="mt-4 flex items-start gap-3">
            <Clock className="mt-1 h-5 w-5 shrink-0" />
            <span>
              {site.visitingHours.days}
              <br />
              {site.visitingHours.time}
            </span>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">Contact Us</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={`tel:${site.phoneTel}`} className="inline-flex items-center gap-3 hover:underline">
                <Phone className="h-5 w-5" />
                Main: {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3 text-white/85">
              <Phone className="h-5 w-5" />
              Fax: {site.faxDisplay}
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 hover:underline">
                <Mail className="h-5 w-5" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-8 sm:px-8 lg:px-12">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80" aria-label="Footer">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="hover:text-white">
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/request-a-call-back" className="hover:text-white">
              Request a Call Back
            </NavLink>
          </nav>
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/70" aria-label="Policies">
            {legalLinks.map((item) => (
              <NavLink key={item.to} to={item.to} className="hover:text-white">
                {item.label}
              </NavLink>
            ))}
          </nav>
          <p className="text-sm text-white/60">{site.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
