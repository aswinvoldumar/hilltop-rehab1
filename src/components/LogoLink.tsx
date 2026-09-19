import { useLocation, useNavigate } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import { images } from '../assets/images'
import { site } from '../data/site'
import { scrollPageToTop } from './ScrollToTop'

type LogoLinkProps = {
  className?: string
  imageClassName?: string
  onClick?: () => void
}

export function LogoLink({
  className = 'shrink-0 rounded-xl',
  imageClassName = 'h-12 w-auto sm:h-14',
  onClick,
}: LogoLinkProps) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const lenis = useLenis()

  return (
    <a
      href="/"
      className={className}
      onClick={(event) => {
        event.preventDefault()
        onClick?.()
        if (pathname !== '/') {
          navigate('/')
        }
        window.requestAnimationFrame(() => scrollPageToTop(lenis))
      }}
    >
      <img src={images.logo} alt={site.name} className={imageClassName} />
    </a>
  )
}
