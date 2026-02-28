import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Shop | Girls Who Grid',
  description: 'Girls Who Grid merchandise coming soon.',
}

export default function ShopPage() {
  return (
    <main className="flex-1 pt-24 min-h-screen bg-pink-bg">
      <section className="py-20">
        <div className="container max-w-4xl text-center">
          <div className="neu-card p-12 md:p-16 space-y-8">
            {/* Logo */}
            <div className="flex justify-center">
              <div className="neu-circle p-8">
                <Image
                  src="/logo.png"
                  alt="Girls Who Grid"
                  width={100}
                  height={100}
                  className="w-20 h-20 md:w-24 md:h-24"
                />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-charcoal">
              Coming Soon
            </h1>

            <p className="text-xl md:text-2xl text-gray-soft max-w-2xl mx-auto">
              We&apos;re crafting a collection that celebrates women in motorsport — from the track
              to everyday life.
            </p>

            <div className="neu-inset p-6 bg-cream rounded-xl max-w-md mx-auto">
              <p className="text-charcoal font-semibold mb-4">
                Be the first to know when we launch
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="neu-inset flex-1 px-4 py-3 bg-white text-charcoal rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-primary"
                  required
                />
                <button
                  type="submit"
                  className="neu-button px-6 py-3 font-semibold text-charcoal whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>
            </div>

            {/* Sneak Peek */}
            <div className="pt-8">
              <p className="text-sm text-gray-soft italic">
                Think: premium quality, bold designs, and pieces you&apos;ll actually want to wear — on
                race day and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
