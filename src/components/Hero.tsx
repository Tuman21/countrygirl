import { useState, useEffect, useCallback } from 'react'

const SLIDES = [
  {
    id: 1,
    label: 'Image 1',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1440&h=500&fit=crop&auto=format',
    alt: 'Golden wheat field at sunset',
  },
  {
    id: 2,
    label: 'Image 2',
    url: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1440&h=500&fit=crop&auto=format',
    alt: 'Cattle grazing on open pasture',
  },
  {
    id: 3,
    label: 'Image 3',
    url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1440&h=500&fit=crop&auto=format',
    alt: 'Scenic farm landscape in morning light',
  },
  {
    id: 4,
    label: 'Image 4',
    url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1440&h=500&fit=crop&auto=format',
    alt: 'Wildflower meadow on a working farm',
  },
  {
    id: 5,
    label: 'Image 5',
    url: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1440&h=500&fit=crop&auto=format',
    alt: 'Horses in a sunlit paddock',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const prev = useCallback(() => setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length), [])
  const next = useCallback(() => setCurrent(c => (c + 1) % SLIDES.length), [])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section
      className="w-full"
      style={{ paddingTop: '72px' }}
    >
      {/* Tagline */}
      <div className="text-center px-6 pt-14 pb-10">
        <h1
          className="mx-auto"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 5vw, 3.75rem)',
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: '-0.025em',
            color: '#1C1C1A',
            maxWidth: '760px',
          }}
        >
          The land tells a story —<br />
          <em style={{ fontStyle: 'italic', color: '#C2783A' }}>let us capture it.</em>
        </h1>
        <p
          className="mt-4 mx-auto"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.05rem',
            fontWeight: 300,
            color: '#7A7060',
            maxWidth: '480px',
            lineHeight: 1.65,
          }}
        >
          Agricultural photography rooted in patience, light, and a deep love for the land.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden" style={{ backgroundColor: '#C2783A' }}>
        <div
          className="relative w-full overflow-hidden"
          style={{ height: 'clamp(260px, 38vw, 500px)' }}
        >
          {SLIDES.map((slide, i) => (
            <img
              key={slide.id}
              src={slide.url}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0 }}
            />
          ))}

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(28,28,26,0.3) 100%)' }}
          />

          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all hover:scale-110"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              backgroundColor: 'rgba(250,247,242,0.88)',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Previous image"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9L11 14" stroke="#1C1C1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all hover:scale-110"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              backgroundColor: 'rgba(250,247,242,0.88)',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Next image"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4L12 9L7 14" stroke="#1C1C1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 py-4" style={{ backgroundColor: '#FAF7F2' }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: i === current ? '#C2783A' : 'rgba(28,28,26,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'width 0.3s, background-color 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
