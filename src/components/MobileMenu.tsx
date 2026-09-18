import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Phone, X } from 'lucide-react'
import { images } from '../assets/images'
import { navItems, site } from '../data/site'
import { Button } from './Button'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return undefined
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile menu">
      <button
        type="button"
        className="absolute inset-0 bg-ink/50"
        aria-label="Close menu"
        onClick={onClose}
      />
      <div className="absolute inset-y-0 right-0 flex w-[min(100%,22rem)] flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <img src={images.logo} alt={site.name} className="h-12 w-auto" />
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-ink hover:bg-cream"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-5">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-base font-medium ${
                  isActive ? 'bg-brand-soft text-brand-dark' : 'text-ink hover:bg-cream'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="space-y-3 border-t border-line p-5">
          <Button to="/request-a-call-back" className="w-full" onClick={onClose}>
            Request a Call Back
          </Button>
          <a
            href={`tel:${site.phoneTel}`}
            className="flex items-center justify-center gap-2 rounded-full border border-line px-4 py-3 font-semibold text-brand-dark"
          >
            <Phone className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  )
}
