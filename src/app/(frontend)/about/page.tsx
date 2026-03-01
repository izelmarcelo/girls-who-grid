import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="py-24 md:py-32 text-center" style={{ background: 'linear-gradient(180deg, var(--pink-light) 0%, var(--cream) 100%)' }}>
        <div className="container max-w-5xl mx-auto px-6">
          <p className="font-accent text-xl mb-4" style={{ color: 'var(--pink-deep)' }}>our story</p>
          <h1>WHERE WOMEN AND<br/>MOTORSPORT MEET —<br/>
            <span style={{ color: 'var(--pink-deep)' }}>UNAPOLOGETICALLY</span>
          </h1>
          <p className="font-accent text-2xl mt-6" style={{ color: 'var(--gray-soft)' }}>
            we&apos;re not here to ask permission. we&apos;re here to show up.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="container max-w-3xl mx-auto px-6">
          <div className="neu-card p-8 md:p-12">
            <p className="text-lg leading-relaxed mb-6">
              <strong className="font-heading text-2xl" style={{ color: 'var(--pink-deep)' }}>Girls Who Grid</strong> started as a simple idea: 
              what if there was a space that celebrated women in motorsport without caveat, 
              without qualification, without having to prove they belong?
            </p>
            <p className="text-lg leading-relaxed mb-6">
              From karting to F1, from the grandstands to the garage, from track days to pit crew, 
              women have always been on the grid. We&apos;re here to make sure they&apos;re seen, heard, and celebrated.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              This isn&apos;t a site painted pink. It&apos;s a platform built with intention — where craft meets 
              motorsport culture, where style meets substance, where every woman who loves racing finds her people.
            </p>
            <p className="font-accent text-2xl" style={{ color: 'var(--pink-deep)' }}>
              Because she&apos;s already on the grid. We&apos;re just turning up the volume.
            </p>
          </div>
        </div>
      </section>

      {/* Values - Blue Section */}
      <section className="py-20 md:py-28" style={{ background: 'var(--blue-soft)' }}>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-accent text-xl mb-2">what drives us</p>
            <h2>WHAT WE<br/>STAND FOR</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Visibility', desc: 'Amplifying women in motorsport across every series, every role, every race.' },
              { num: '02', title: 'Community', desc: 'Building a supportive network where women connect, collaborate, and celebrate.' },
              { num: '03', title: 'Authenticity', desc: 'Real stories, real experiences, real passion for the sport we love.' },
              { num: '04', title: 'Ambition', desc: 'Encouraging every woman to push boundaries and chase her motorsport dreams.' },
              { num: '05', title: 'Bold Expression', desc: 'Celebrating individuality, style, and the unique way each woman shows up on the grid.' },
            ].map((value, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.5)' }}>
                <span className="font-heading text-4xl" style={{ color: 'var(--pink-deep)' }}>{value.num}</span>
                <h3 className="text-2xl mt-2 mb-3">{value.title}</h3>
                <p style={{ color: 'var(--gray-soft)' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="container max-w-4xl mx-auto px-6">
          <div className="neu-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full flex items-center justify-center text-6xl flex-shrink-0" 
              style={{ background: 'var(--pink-light)' }}>
              👋
            </div>
            <div>
              <p className="font-accent text-xl mb-2" style={{ color: 'var(--pink-deep)' }}>meet the founder</p>
              <h3 className="text-3xl mb-4">THE WOMAN BEHIND THE GRID</h3>
              <p className="text-lg leading-relaxed">
                More than just a motorsport fan — a builder, a believer, and someone who refuses 
                to accept that women in racing should be the exception rather than the rule.
              </p>
              <p className="font-accent text-lg mt-4" style={{ color: 'var(--gray-soft)' }}>
                Full founder story and team profiles coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Press CTA - Lime Section */}
      <section className="py-20" style={{ background: 'var(--lime-accent)' }}>
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2>PRESS &<br/>PARTNERSHIPS</h2>
          <p className="text-lg mt-4 mb-8">
            Interested in featuring Girls Who Grid or exploring partnership opportunities? We&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="neu-button-dark inline-block px-10 py-5">
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
