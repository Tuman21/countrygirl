interface Props {
  onBook: () => void
}

export default function FloatingCTA({ onBook }: Props) {
  return (
    <button
      onClick={onBook}
      className="fixed flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
      style={{
        bottom: 'clamp(20px, 2.5vw, 32px)',
        right: 'clamp(20px, 2.5vw, 32px)',
        zIndex: 100,
        height: 'clamp(48px, 5vw, 52px)',
        paddingLeft: 'clamp(18px, 2vw, 24px)',
        paddingRight: 'clamp(18px, 2vw, 24px)',
        borderRadius: 100,
        backgroundColor: '#C2783A',
        color: '#FAF7F2',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: '0.95rem',
        fontWeight: 500,
        letterSpacing: '0.02em',
        boxShadow: '0 4px 24px rgba(194,120,58,0.4), 0 1px 4px rgba(0,0,0,0.2)',
        whiteSpace: 'nowrap',
      }}
    >
      Book a Session
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
