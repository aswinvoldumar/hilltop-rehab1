import { useEffect, useRef } from 'react'

const DEFAULT_COLOR_1 = '#2792DC'
const DEFAULT_COLOR_2 = '#9CE6E6'

type ElevenLabsOrbProps = {
  size?: number
  speaking?: boolean
  className?: string
}

export function ElevenLabsOrb({ size = 40, speaking = false, className = '' }: ElevenLabsOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = size * pixelRatio
    canvas.height = size * pixelRatio
    context.scale(pixelRatio, pixelRatio)

    const center = size / 2
    const radius = size / 2
    let frame = 0
    let angle = 0

    const draw = (time: number) => {
      const speed = speaking ? 0.0042 : 0.0018
      angle += media.matches ? 0 : speed * 16
      const pulse = speaking ? 0.06 * Math.sin(time / 180) : 0

      context.clearRect(0, 0, size, size)
      context.save()
      context.translate(center, center)
      context.rotate(angle)

      const gradient = context.createConicGradient(0, 0, 0)
      gradient.addColorStop(0, DEFAULT_COLOR_1)
      gradient.addColorStop(0.28, DEFAULT_COLOR_2)
      gradient.addColorStop(0.5, '#ffffff')
      gradient.addColorStop(0.72, DEFAULT_COLOR_1)
      gradient.addColorStop(1, DEFAULT_COLOR_2)

      context.beginPath()
      context.arc(0, 0, radius - 0.5 + pulse, 0, Math.PI * 2)
      context.fillStyle = gradient
      context.fill()

      const sheen = context.createRadialGradient(-radius * 0.25, -radius * 0.3, 2, 0, 0, radius)
      sheen.addColorStop(0, 'rgba(255,255,255,0.55)')
      sheen.addColorStop(0.45, 'rgba(255,255,255,0.08)')
      sheen.addColorStop(1, 'rgba(39,146,220,0.15)')
      context.fillStyle = sheen
      context.fill()

      context.restore()

      if (!media.matches) {
        frame = window.requestAnimationFrame(draw)
      }
    }

    frame = window.requestAnimationFrame(draw)

    return () => {
      window.cancelAnimationFrame(frame)
    }
  }, [size, speaking])

  return (
    <canvas
      ref={canvasRef}
      className={`block rounded-full ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  )
}
