function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#181512' }}>
      {/* Main footer content */}
      <div
        className="mx-auto px-8 py-14"
        style={{ maxWidth: 1200 }}
      >
        {/* Desktop: three columns / Mobile: stacked */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Col 1 — Logo + tagline */}
          <div className="flex flex-col items-start gap-3 sm:items-start items-center text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div
                className="rounded-full flex items-center justify-center flex-shrink-0"
                style={{ width: 40, height: 40, backgroundColor: '#C2783A' }}
              >
                <img
          src="https://6a4edfe2ae4883bf378bd341.imgix.net/logo/Image.png"
          alt="Country Girl Logo"
          className="h-full w-full rounded-full object-cover"
       />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#FAF7F2',
                }}
              >
                Country Girl
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'rgba(250,247,242,0.45)',
                marginTop: 2,
              }}
            >
              Agricultural photography with heart.
            </p>
          </div>

          {/* Col 2 — Follow Along */}
          <div className="flex flex-col gap-3">
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(250,247,242,0.5)',
              }}
            >
              Follow Along
            </span>
            <a
              href="https://www.instagram.com/kountrygirlphotography?igsh=aWczNXUwb3AycXhx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
              style={{ color: '#C2783A', textDecoration: 'none' }}
            >
              <InstagramIcon />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.92rem',
                  fontWeight: 400,
                }}
              >
                @countrygirlphotography
              </span>
            </a>
          </div>

          {/* Col 3 — Copyright */}
          <div
            className="flex flex-col gap-1 sm:text-right text-center"
            style={{ color: 'rgba(250,247,242,0.35)' }}
          >
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem' }}>
              © 2025 Country Girl Photography
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem' }}>
              All rights reserved.
            </span>
          </div>
        </div>
      </div>

      {/* Thin divider + bottom bar */}
      <div style={{ borderTop: '1px solid rgba(250,247,242,0.08)' }}>
        <div
          className="flex items-center justify-center"
          style={{ height: 40 }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              color: 'rgba(250,247,242,0.2)',
              letterSpacing: '0.05em',
            }}
          >
            Built with love from the ranch
          </span>
        </div>
      </div>
    </footer>
  )
}
