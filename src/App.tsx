import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import BookingForm from './pages/BookingForm'

export default function App() {
  const [page, setPage] = useState<'home' | 'booking'>('home')

  if (page === 'booking') {
    return <BookingForm onBack={() => setPage('home')} />
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FAF7F2' }}>
      <Nav />
      <Hero />
      <About />
      <Portfolio />
      <Footer />
      <FloatingCTA onBook={() => setPage('booking')} />
    </div>
  )
}
