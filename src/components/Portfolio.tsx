const PORTFOLIO_IMAGES = [
  { id: 'A', url: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=420&h=320&fit=crop&auto=format', alt: 'Horses at dawn, paddock gate' },
  { id: 'B', url: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=420&h=320&fit=crop&auto=format', alt: 'Longhorn cattle on open range' },
  { id: 'C', url: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=420&h=320&fit=crop&auto=format', alt: 'Cattle herd at golden hour' },
  { id: 'D', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=420&h=320&fit=crop&auto=format', alt: 'Wheat field in late afternoon light' },
  { id: 'E', url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=420&h=320&fit=crop&auto=format', alt: 'Farm at sunrise, soft mist' },
  { id: 'F', url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=420&h=320&fit=crop&auto=format', alt: 'Flower meadow beside a hay field' },
  { id: 'G', url: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?w=420&h=320&fit=crop&auto=format', alt: 'Chickens in a heritage barn' },
  { id: 'H', url: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=420&h=320&fit=crop&auto=format', alt: 'Working dog resting near feed bags' },
  { id: 'I', url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=420&h=320&fit=crop&auto=format', alt: 'Goats on a rocky hillside pasture' },
  { id: 'J', url: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=420&h=320&fit=crop&auto=format', alt: 'Farmstead reflected in morning pond' },
  { id: 'K', url: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=420&h=320&fit=crop&auto=format', alt: 'Cowboy on horseback at dusk' },
  { id: 'L', url: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=420&h=320&fit=crop&auto=format', alt: 'Draft horses pulling a plow' },
  { id: 'M', url: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=420&h=320&fit=crop&auto=format', alt: 'Young calves in a sunlit barn' },
  { id: 'N', url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=420&h=320&fit=crop&auto=format', alt: 'Rolling green hills of a cattle ranch' },
  { id: 'O', url: 'https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?w=420&h=320&fit=crop&auto=format', alt: 'Autumn harvest, bales in a field' },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full"
      style={{ backgroundColor: '#1A1512', paddingTop: 80, paddingBottom: 80 }}
    >
      <h2
        className="text-center mb-12"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          color: '#FAF7F2',
        }}
      >
        Portfolio
      </h2>

      <div
        className="mx-auto px-6"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: 16,
          maxWidth: 1380,
        }}
      >
        {PORTFOLIO_IMAGES.map(img => (
          <div
            key={img.id}
            className="relative overflow-hidden group"
            style={{
              aspectRatio: '420 / 320',
              backgroundColor: '#2A2218',
              borderRadius: 4,
            }}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.78rem',
                  color: 'rgba(250,247,242,0.9)',
                  letterSpacing: '0.04em',
                }}
              >
                {img.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
