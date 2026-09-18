import { aboutVideoUrl, images } from '../assets/images'
import { Button } from './Button'

export function AboutSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-content">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-ink sm:text-5xl">
            Learn More About
            <span className="block text-brand">Hilltop Estates</span>
          </h2>
        </div>
        <div className="mt-12 overflow-hidden rounded-[2rem] bg-ink">
          <video
            className="aspect-video w-full object-cover"
            controls
            poster={images.aboutMedia}
            preload="metadata"
          >
            <source src={aboutVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-lg text-muted">
          Hilltop Estates offers primary nursing care to all residents. This means that our staff gets
          to know every patient and offers each of them a level of quality in their service that can't
          be matched anywhere else.
        </p>
        <div className="mt-8 text-center">
          <Button to="/about">Learn More About Us</Button>
        </div>
      </div>
    </section>
  )
}
