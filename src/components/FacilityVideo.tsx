import { useRef, useState } from 'react'
import { Play } from 'lucide-react'

type FacilityVideoProps = {
  src: string
  poster: string
}

export function FacilityVideo({ src, poster }: FacilityVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function togglePlay() {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-ink">
      <video
        ref={videoRef}
        className="aspect-video w-full object-cover"
        poster={poster}
        preload="metadata"
        playsInline
        onClick={togglePlay}
        onEnded={() => setPlaying(false)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {playing ? null : (
        <button
          type="button"
          className="absolute inset-0 flex items-center justify-center"
          aria-label="Play video"
          onClick={togglePlay}
        >
          <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-brand shadow-lg transition hover:bg-white">
            <Play className="ml-1 h-9 w-9" />
          </span>
        </button>
      )}
    </div>
  )
}
