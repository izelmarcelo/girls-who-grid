import React from 'react'

export default function ScaleTestPage() {
  const bodyText = "We serve fans, professionals, creators, and newcomers who are passionate about racing and tired of being treated as outsiders in a sport they love."

  const scales = [
    {
      name: 'Current',
      h1: 'clamp(3.5rem, 8vw, 8rem)',
      h2: 'clamp(2.5rem, 5vw, 5rem)',
      h3: 'clamp(1.5rem, 3vw, 2.5rem)',
      body: '1.125rem',    // 18px
      bodySmall: '1rem',   // 16px
    },
    {
      name: 'Scale A — Bigger headings, same body',
      h1: 'clamp(4.5rem, 12vw, 10rem)',
      h2: 'clamp(3rem, 7vw, 6rem)',
      h3: 'clamp(2rem, 3.5vw, 3rem)',
      body: '1.125rem',
      bodySmall: '1rem',
    },
    {
      name: 'Scale B — Bigger headings, smaller body',
      h1: 'clamp(4.5rem, 12vw, 10rem)',
      h2: 'clamp(3rem, 7vw, 6rem)',
      h3: 'clamp(2rem, 3.5vw, 3rem)',
      body: '1rem',        // 16px
      bodySmall: '0.875rem', // 14px
    },
    {
      name: 'Scale C — Max contrast (huge headings, compact body)',
      h1: 'clamp(5rem, 14vw, 12rem)',
      h2: 'clamp(3.5rem, 8vw, 7rem)',
      h3: 'clamp(2.25rem, 4vw, 3.5rem)',
      body: '0.9375rem',   // 15px
      bodySmall: '0.8125rem', // 13px
    },
  ]

  return (
    <main className="flex-1 py-20" style={{ background: 'var(--cream)' }}>
      <div className="container max-w-5xl mx-auto px-6">
        <h1 className="mb-4">TYPE SCALE TEST</h1>
        <p className="font-accent text-xl mb-16" style={{ color: 'var(--pink-deep)' }}>
          compare heading-to-body contrast
        </p>

        {scales.map((scale, i) => (
          <div key={i} className="neu-card p-8 md:p-12 mb-12">
            <div className="mb-8 pb-4" style={{ borderBottom: '2px solid var(--pink-light)' }}>
              <span className="font-heading text-lg px-3 py-1 rounded" style={{ background: 'var(--lime-accent)' }}>
                {scale.name}
              </span>
            </div>
            
            <div style={{ fontSize: scale.h1, fontFamily: 'var(--font-heading)', lineHeight: '0.95', textTransform: 'uppercase', letterSpacing: '0.02em' }} className="mb-6">
              SHE&apos;S ALREADY<br/>ON THE GRID
            </div>
            
            <p className="font-accent text-2xl mb-8" style={{ color: 'var(--pink-deep)', letterSpacing: '-0.05em' }}>
              she doesn&apos;t need an invitation to the paddock.
            </p>

            <div style={{ fontSize: scale.h2, fontFamily: 'var(--font-heading)', lineHeight: '1', textTransform: 'uppercase', letterSpacing: '0.02em' }} className="mb-4">
              FROM THE GRANDSTANDS<br/>TO THE GARAGE
            </div>

            <p style={{ fontSize: scale.body }} className="leading-relaxed mb-6">
              {bodyText}
            </p>

            <div style={{ fontSize: scale.h3, fontFamily: 'var(--font-heading)', lineHeight: '1.1', textTransform: 'uppercase' }} className="mb-3">
              CONTENT THAT MOVES THE NEEDLE
            </div>

            <p style={{ fontSize: scale.bodySmall, color: 'var(--gray-soft)' }} className="leading-relaxed">
              Real-time race coverage, reactions, recaps, and hot takes that feel like debriefing with your smartest friend at the track.
            </p>

            {/* Size reference */}
            <div className="mt-6 pt-4 flex flex-wrap gap-4 text-xs font-mono" style={{ borderTop: '1px solid var(--pink-light)', color: 'var(--gray-soft)' }}>
              <span>H1: {scale.h1}</span>
              <span>H2: {scale.h2}</span>
              <span>H3: {scale.h3}</span>
              <span>Body: {scale.body}</span>
              <span>Small: {scale.bodySmall}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
