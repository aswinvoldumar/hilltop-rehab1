import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'

export function scrollPageToTop(lenis?: { scrollTo: (value: number, options?: { immediate?: boolean }) => void }) {
  lenis?.scrollTo(0, { immediate: true })
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

export function ScrollToTop() {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    const reset = () => scrollPageToTop(lenis)
    reset()
    const frame = window.requestAnimationFrame(reset)
    const timer = window.setTimeout(reset, 50)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timer)
    }
  }, [pathname, lenis])

  return null
}
