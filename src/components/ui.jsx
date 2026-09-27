// Shared typographic and layout pieces for the site's editorial style

// Small uppercase, letter-spaced section label in the brand orange
export function Eyebrow({ children, className = '' }) {
  return (
    <p className={`text-[11px] font-medium uppercase tracking-[0.18em] text-brand ${className}`}>{children}</p>
  );
}

const HEADING_SIZES = {
  hero: 'text-4xl sm:text-5xl lg:text-6xl',
  page: 'text-4xl sm:text-5xl md:text-6xl',
  section: 'text-3xl md:text-5xl',
  card: 'text-3xl md:text-4xl',
};

// Two-tone headline: `title` in full strength followed by `muted` in a lighter tone, on one line
export function Heading({ as: Tag = 'h2', title, muted, size = 'section', dark = false, className = '' }) {
  return (
    <Tag className={`${HEADING_SIZES[size]} font-medium leading-[1.04] tracking-[-0.035em] ${className}`}>
      {title}
      {muted && (
        <>
          {' '}
          <span className={dark ? 'text-white/55' : 'text-graphite/65'}>{muted}</span>
        </>
      )}
    </Tag>
  );
}

// Row of features: thin line icon, bold title, one-line description
export function FeatureRow({ items, dark = false, className = '' }) {
  const columns = items.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3';
  return (
    <div className={`grid gap-12 text-center ${columns} ${className}`}>
      {items.map(({ icon: Icon, title, body }) => (
        <div key={title}>
          {Icon && <Icon className={`mx-auto h-6 w-6 ${dark ? 'text-white' : 'text-black'}`} strokeWidth={1.25} />}
          <h3 className="mt-4 text-[15px] font-semibold">{title}</h3>
          <p className={`mx-auto mt-1.5 max-w-64 text-sm leading-relaxed ${dark ? 'text-white/65' : 'text-graphite'}`}>
            {body}
          </p>
        </div>
      ))}
    </div>
  );
}

// Frosted label laid over photos and screenshots
export function MediaPill({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-black/45 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md ${className}`}
    >
      {children}
    </span>
  );
}
