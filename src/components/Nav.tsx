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
          <img
          src="https://6a4edfe2ae4883bf378bd341.imgix.net/logo/Image.png"
          alt="Country Girl Logo"
          className="h-full w-full rounded-full object-cover"
       />
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
