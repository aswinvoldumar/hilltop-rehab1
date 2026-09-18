import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollToTop } from './ScrollToTop'
import { SmoothScroll } from './SmoothScroll'

export function Layout() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-cream">
        <ScrollToTop />
        <Header />
        <main id="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}
