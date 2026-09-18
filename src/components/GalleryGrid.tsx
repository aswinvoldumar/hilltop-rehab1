import { useEffect, useRef, useState } from 'react'

type GalleryPhoto = {
  src: string
  alt: string
}

const directions = ['from-left', 'from-right', 'from-bottom', 'from-top', 'from-scale'] as const

function GalleryCard({ photo, index }: { photo: GalleryPhoto; index: number }) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const direction = directions[index % directions.length]
  const delay = (index % 6) * 80

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
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <figure
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`gallery-card overflow-hidden rounded-[1.5rem] ${visible ? `is-visible ${direction}` : ''}`}
    >
      <img src={photo.src} alt={photo.alt} className="h-64 w-full object-cover" />
    </figure>
  )
}

export function GalleryGrid({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo, index) => (
        <GalleryCard key={photo.src} photo={photo} index={index} />
      ))}
    </div>
  )
}
