export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 border-b"
      style={{
        height: '72px',
        backgroundColor: 'rgba(250,247,242,0.96)',
        backdropFilter: 'blur(8px)',
        borderColor: 'rgba(28,28,26,0.10)',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div
          className="rounded-full flex items-center justify-center flex-shrink-0"
          style={{
            width: 48,
            height: 48,
            backgroundColor: '#C2783A',
          }}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="13" r="10" stroke="white" strokeWidth="1.5" />
            <path d="M8 13 Q13 7 18 13 Q13 19 8 13Z" fill="white" opacity="0.85" />
          </svg>
        </div>
      </div>

      {/* Title — hidden on mobile */}
      <span
        className="hidden sm:block select-none"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: '#1C1C1A',
          lineHeight: 1,
        }}
      >
        Country Girl
      </span>
    </nav>
  )
}
