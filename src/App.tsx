import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Faculty } from './pages/Faculty'
import { Rehabilitation } from './pages/Rehabilitation'
import { Employment } from './pages/Employment'
import { RequestCallback } from './pages/RequestCallback'
import { PhotoTour } from './pages/PhotoTour'
import { Reviews } from './pages/Reviews'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { LegalPage } from './pages/LegalPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/rehabilitation" element={<Rehabilitation />} />
          <Route path="/employment" element={<Employment />} />
          <Route path="/request-a-call-back" element={<RequestCallback />} />
          <Route path="/photo-tour" element={<PhotoTour />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<LegalPage page="privacy" />} />
          <Route path="/do-not-share" element={<LegalPage page="doNotShare" />} />
          <Route path="/conditions-of-use" element={<LegalPage page="conditions" />} />
          <Route path="/notice-and-take-down" element={<LegalPage page="notice" />} />
          <Route path="/accessibility" element={<LegalPage page="accessibility" />} />
          <Route path="/nondiscrimination" element={<LegalPage page="nondiscrimination" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
