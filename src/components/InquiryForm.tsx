import { useState, type FormEvent } from 'react'
import { site } from '../data/site'
import { Button } from './Button'

type FormKind = 'contact' | 'callback' | 'employment'

type InquiryFormProps = {
  kind: FormKind
}

const subjects: Record<FormKind, string> = {
  contact: 'Website contact from Hilltop Estates',
  callback: 'Request a Call Back from Hilltop Estates',
  employment: 'Employment inquiry at Hilltop Estates',
}

export function InquiryForm({ kind }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const lines = [...data.entries()]
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${String(value)}`)
    const body = encodeURIComponent(lines.join('\n'))
    const subject = encodeURIComponent(subjects[kind])
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-[1.5rem] border border-line bg-white p-8">
        <h2 className="text-2xl font-bold text-ink">Thank you for contacting us.</h2>
        <p className="mt-3 text-muted">
          We will get back to you as soon as possible. If your email app did not open, please call{' '}
          <a className="font-semibold text-brand underline" href={`tel:${site.phoneTel}`}>
            {site.phoneDisplay}
          </a>{' '}
          or email{' '}
          <a className="font-semibold text-brand underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      </div>
    )
  }

  const fieldClass =
    'mt-2 w-full rounded-2xl border border-line bg-cream/60 px-4 py-3 text-ink outline-none transition focus:border-brand focus:bg-white'

  return (
    <form onSubmit={onSubmit} className="rounded-[1.5rem] border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-5">
        <label className="block font-medium">
          Name{kind === 'callback' ? '*' : ''}
          <input name="Name" type="text" required className={fieldClass} autoComplete="name" />
        </label>
        <label className="block font-medium">
          Phone{kind === 'callback' ? '*' : ''}
          <input
            name="Phone"
            type="tel"
            required={kind === 'callback'}
            className={fieldClass}
            autoComplete="tel"
          />
        </label>
        <label className="block font-medium">
          Email{kind === 'callback' ? '*' : ''}
          <input
            name="Email"
            type="email"
            required={kind !== 'contact'}
            className={fieldClass}
            autoComplete="email"
          />
        </label>
        {kind === 'callback' ? (
          <>
            <label className="block font-medium">
              Services
              <input name="Services" type="text" className={fieldClass} />
            </label>
            <label className="block font-medium">
              Preferred Contact Type*
              <select name="Preferred Contact Type" required className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option>Phone</option>
                <option>Email</option>
                <option>Zoom</option>
                <option>FaceTime</option>
              </select>
            </label>
          </>
        ) : null}
        {kind === 'employment' ? (
          <label className="block font-medium">
            Position Interested In
            <input name="Position Interested In" type="text" className={fieldClass} />
          </label>
        ) : null}
        <label className="block font-medium">
          {kind === 'callback' ? 'Message' : 'Message'}
          <textarea name="Message" rows={5} className={fieldClass} />
        </label>
      </div>
      <Button type="submit" className="mt-6">
        {kind === 'callback' ? 'Request a Call Back' : kind === 'employment' ? 'Submit Application' : 'Send Message'}
      </Button>
    </form>
  )
}
