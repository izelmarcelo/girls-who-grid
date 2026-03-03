import React from 'react'
import Image from 'next/image'

export default function ShopPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="py-28 md:py-36 text-center" style={{ background: 'linear-gradient(135deg, var(--pink-light) 0%, var(--cream) 40%, var(--blue-soft) 100%)' }}>
        <div className="container max-w-4xl mx-auto px-6">
          <p className="font-accent text-xl mb-4" style={{ color: 'var(--pink-deep)' }}>the grid collection</p>
          <h1>RACE DAY<br/>TO ANY DAY</h1>
          <p className="font-accent text-2xl mt-6 max-w-xl mx-auto" style={{ color: 'var(--gray-soft)' }}>
            motorsport apparel that works as hard as your favorite driver
          </p>
        </div>
      </section>

      {/* Coming Soon Card */}
      <section className="py-20 md:py-28" style={{ background: 'var(--cream)' }}>
        <div className="container max-w-4xl mx-auto px-6">
          <div className="neu-card p-10 md:p-16 text-center">
            <div className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center" 
              style={{ background: 'var(--lime-accent)' }}>
              <span className="font-heading text-4xl">🏎️</span>
            </div>
            <h2 className="mb-6">COMING SOON</h2>
            <p className="text-lg max-w-2xl mx-auto mb-4" style={{ color: 'var(--gray-soft)' }}>
              Merchandise is both a revenue stream and a brand visibility tool. Every item a 
              member wears to a race becomes organic marketing. Every hoodie at the airport, 
              every cap at the coffee shop — that&apos;s the grid expanding.
            </p>
            <p className="text-lg max-w-2xl mx-auto mb-10">
              We&apos;re building a core collection of branded apparel, race day essentials, 
              and limited-edition collaborations with motorsport brands and female designers.
            </p>

            {/* What to expect */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12 text-left">
              {[
                { title: 'Core Collection', desc: 'Tees, hoodies, and hats with the GWG identity — bold, clean, unapologetic.' },
                { title: 'Race Day Essentials', desc: 'Lanyards, credential holders, tote bags — everything you need trackside.' },
                { title: 'Limited Drops', desc: 'Collaborative pieces with motorsport brands and female designers.' },
                { title: 'Gift & Bundles', desc: 'Race weekend prep kits and gift cards for the motorsport women in your life.' },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--pink-bg)' }}>
                  <p className="font-heading text-lg">{item.title}</p>
                  <p className="text-sm mt-1" style={{ color: 'var(--gray-soft)' }}>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Email signup */}
            <p className="font-heading text-xl mb-4">BE FIRST ON THE GRID</p>
            <p className="font-accent text-lg mb-6" style={{ color: 'var(--pink-deep)' }}>
              Sign up to get early access when the shop drops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="flex-1 px-6 py-4 rounded-xl neu-inset"
              />
              <button className="neu-button-dark px-8 py-4">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand strip */}
      <section className="py-12" style={{ background: 'var(--charcoal)' }}>
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <p className="font-accent text-lg" style={{ color: 'var(--lime-accent)' }}>
            &ldquo;Motorsports apparel made for fans, by fans.&rdquo;
          </p>
        </div>
      </section>
    </main>
  )
}
