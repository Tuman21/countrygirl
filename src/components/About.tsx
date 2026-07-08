export default function About() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: '#F2EDE4' }}
    >
      <div
        className="mx-auto grid gap-0"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          minHeight: 480,
        }}
      >
        {/* Photographer photo */}
        <div
          className="relative overflow-hidden"
          style={{ minHeight: 320, backgroundColor: '#C2783A' }}
        >
          <img
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=720&h=640&fit=crop&auto=format"
            alt="The photographer in the field"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(194,120,58,0.18) 0%, transparent 60%)' }}
          />
        </div>

        {/* Text block */}
        <div
          className="flex flex-col justify-center px-10 py-14"
          style={{ maxWidth: 600 }}
        >
          <span
            className="block mb-3"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#C2783A',
            }}
          >
            About Me
          </span>
          <h2
            className="mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#1C1C1A',
            }}
          >
            Meet the Photographer
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#4A4238',
            }}
          >
            I grew up on a family cattle ranch in central Texas, and I've spent the last decade
            photographing the rhythms of agricultural life — early morning feeds, branding days,
            harvest seasons, and everything in between. My work is about more than beautiful
            images; it's about honoring the people, animals, and landscapes that feed the world.
            Every session is personal, unhurried, and shaped by the character of your land.
          </p>
          <p
            className="mt-4"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#4A4238',
            }}
          >
            I work primarily across Texas and the surrounding states, traveling for the right
            light and the right story. Whether you raise cattle, horses, heritage chickens, or
            heritage grains — I want to photograph what you love.
          </p>
        </div>
      </div>
    </section>
  )
}
