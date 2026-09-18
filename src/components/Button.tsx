import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'outline' | 'light'

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  type?: 'button' | 'submit'
  variant?: Variant
  className?: string
  onClick?: () => void
}

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-white hover:bg-brand-dark shadow-sm hover:shadow-md',
  secondary:
    'bg-white text-brand border border-brand/20 hover:bg-brand-soft',
  outline:
    'bg-transparent text-white border-2 border-white/80 hover:bg-white hover:text-brand-dark',
  light:
    'bg-white text-brand-dark hover:bg-brand-soft',
}

export function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold tracking-wide transition-all duration-200 ${variants[variant]} ${className}`

  if (to) {
    return (
      <NavLink to={to} className={classes} onClick={onClick}>
        {children}
      </NavLink>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
