// LeaderCard — leadership profile card.
// Used in Legacy page and About page.
// imageSrc is optional — shows initials if no photo.

export default function LeaderCard({ person, variant = 'default' }) {
  const initials = person.name
    .split(' ')
    .filter(w => w.length > 2)
    .slice(0, 2)
    .map(w => w[0])
    .join('')

  return (
    <div className={`
      bg-white rounded-2xl overflow-hidden
      border border-border-warm
      transition-transform duration-300 hover:-translate-y-1
      ${variant === 'featured' ? 'border-terra/20' : ''}
    `}>

      {/* Photo area */}
      <div className="h-56 bg-charcoal-warm relative overflow-hidden">
        {person.imageSrc ? (
          <img
            src={person.imageSrc}
            alt={person.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-5xl font-light text-terra/40">
              {initials}
            </span>
          </div>
        )}

        {/* Legacy tag for founder */}
        {person.legacy && (
          <div className="absolute top-4 left-4">
            <span className="bg-terra/90 text-text-light text-xs font-body font-medium
                             tracking-wider uppercase px-3 py-1 rounded-full">
              Founder
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-light text-display-sm text-text-primary leading-tight">
          {person.name}
        </h3>
        <p className="font-body text-xs font-medium tracking-[0.15em] uppercase
                      text-terra mt-1 mb-4">
          {person.title}
        </p>
        <p className="font-body text-sm text-text-muted leading-relaxed line-clamp-4">
          {person.bio}
        </p>

        {/* Quote — only for founder */}
        {person.quote && (
          <blockquote className="mt-4 pt-4 border-t border-border-warm">
            <p className="font-display italic text-sm text-text-primary/70 leading-relaxed">
              "{person.quote}"
            </p>
            <cite className="font-body text-xs text-text-muted not-italic mt-2 block">
              {person.quoteSource}
            </cite>
          </blockquote>
        )}
      </div>

    </div>
  )
}