import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Clock, Mail, Menu, Phone } from 'lucide-react'
import { navItems, site } from '../data/site'
import { Button } from './Button'
import { LogoLink } from './LogoLink'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-semibold"
      >
        Skip to content
      </a>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 lg:px-8 xl:px-12">
        <div className="pointer-events-auto mx-auto max-w-content overflow-hidden rounded-[1.75rem] bg-white shadow-lg shadow-ink/10">
          <div className="hidden items-center justify-between gap-4 bg-brand px-5 py-2.5 text-sm text-white md:flex lg:px-7">
            <p className="font-medium tracking-wide">
              Certified Rehabilitation Center · Gothenburg, NE
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:underline">
                <Mail className="h-4 w-4" />
                {site.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Hours: {site.hoursLabel}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 px-4 py-3 lg:px-6">
            <LogoLink />

            <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 text-[0.92rem] font-medium transition-colors ${
                      isActive ? 'bg-brand-soft text-brand-dark' : 'text-ink/80 hover:bg-cream hover:text-ink'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={`tel:${site.phoneTel}`}
                className="hidden items-center gap-2 rounded-full border border-line px-3 py-2 text-sm font-semibold text-brand-dark hover:bg-cream lg:inline-flex"
              >
                <Phone className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
              <Button to="/request-a-call-back" className="hidden sm:inline-flex">
                Request a Call Back
              </Button>
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white lg:hidden"
                aria-label={`Call ${site.phoneDisplay}`}
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink xl:hidden"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
