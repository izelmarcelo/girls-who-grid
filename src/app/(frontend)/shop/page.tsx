import React from 'react'
import Link from 'next/link'

export default function ShopPage() {
  return (
    <main className="flex-1" style={{ background: 'var(--cream)' }}>
      <section className="py-32 md:py-40 text-center">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="neu-card p-12 md:p-20">
            <p className="font-accent text-xl mb-4" style={{ color: 'var(--pink-deep)' }}>coming soon</p>
            <h1>THE GRID<br/>COLLECTION</h1>
            <p className="text-lg mt-6 mb-4 max-w-xl mx-auto" style={{ color: 'var(--gray-soft)' }}>
              Motorsport apparel that&apos;s as bold and dynamic as the women who wear it. 
              Race day to any day.
            </p>
            <p className="font-accent text-2xl mb-10" style={{ color: 'var(--pink-deep)' }}>
              Sign up to be first in line.
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
    </main>
  )
}
