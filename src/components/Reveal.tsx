import { useEffect, useRef, useState, type ReactNode } from 'react'

export type RevealDirection = 'from-left' | 'from-right' | 'from-bottom' | 'from-top' | 'from-scale'

type RevealProps = {
  children: ReactNode
  direction?: RevealDirection
  delay?: number
  className?: string
}

export function Reveal({
  children,
  direction = 'from-bottom',
  delay = 0,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -56px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`reveal ${visible ? `is-visible ${direction}` : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
