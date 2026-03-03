import React from 'react'

export default function FontTestPage() {
  const sampleText = "We serve fans, professionals, creators, and newcomers who are passionate about racing and tired of being treated as outsiders in a sport they love. Through original content, community programming, and brand partnerships, GWG is building the most visible and engaged network of women in motorsport."
  const shortText = "From the grandstands to the garage, we're amplifying the women who show up on the grid — every race, every series, every day."

  const fonts = [
    { name: 'Inter (current)', family: 'Inter, sans-serif', note: 'Clean geometric. Maybe too neutral?' },
    { name: 'DM Sans', family: '"DM Sans", sans-serif', note: 'Slightly warmer, geometric but softer' },
    { name: 'Outfit', family: 'Outfit, sans-serif', note: 'Modern geometric, pairs great with Bebas' },
    { name: 'Poppins', family: 'Poppins, sans-serif', note: 'Rounded geometric, friendly and modern' },
    { name: 'Nunito Sans', family: '"Nunito Sans", sans-serif', note: 'Warm, rounded, approachable' },
    { name: 'Source Sans 3', family: '"Source Sans 3", sans-serif', note: 'Adobe classic, versatile, professional' },
    { name: 'Libre Franklin', family: '"Libre Franklin", sans-serif', note: 'Editorial feel, strong in longer text' },
    { name: 'Plus Jakarta Sans', family: '"Plus Jakarta Sans", sans-serif', note: 'Modern, slightly condensed, tech-forward' },
  ]

  return (
    <main className="flex-1 py-20" style={{ background: 'var(--cream)' }}>
      {/* Load all comparison fonts */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Outfit:wght@400;500&family=Poppins:wght@400;500&family=Nunito+Sans:wght@400;500&family=Source+Sans+3:wght@400;500&family=Libre+Franklin:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500&display=swap" rel="stylesheet" />
      <div className="container max-w-4xl mx-auto px-6">
        <h1 className="mb-4">FONT COMPARISON</h1>
        <p className="font-accent text-xl mb-12" style={{ color: 'var(--pink-deep)' }}>
          pick the one that feels right for GWG
        </p>

        {fonts.map((font, i) => (
          <div key={i} className="neu-card p-8 mb-8">
            <div className="flex items-baseline gap-4 mb-4">
              <h3 className="text-xl">{font.name}</h3>
              <span className="font-accent text-sm" style={{ color: 'var(--pink-deep)' }}>{font.note}</span>
            </div>
            <p className="text-lg leading-relaxed mb-4" style={{ fontFamily: font.family }}>
              {sampleText}
            </p>
            <p className="text-base leading-relaxed" style={{ fontFamily: font.family, color: 'var(--gray-soft)' }}>
              {shortText}
            </p>
          </div>
        ))}

        <div className="mt-16">
          <h2 className="mb-8">HANDWRITTEN SPACING</h2>
          {[
            { label: 'TIGHTENED (-0.02em)', spacing: '-0.02em' },
            { label: 'TIGHTER (-0.03em)', spacing: '-0.03em' },
            { label: 'TIGHTEST (-0.05em)', spacing: '-0.05em' },
            { label: 'DEFAULT (0)', spacing: '0' },
          ].map((opt, i) => (
            <div key={i} className="neu-card p-8 mb-6">
              <p className="text-sm font-heading mb-2">{opt.label}</p>
              <p className="font-accent text-2xl" style={{ letterSpacing: opt.spacing, color: 'var(--pink-deep)' }}>
                she doesn&apos;t need an invitation to the paddock. she already knows the way.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
