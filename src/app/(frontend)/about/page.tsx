import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Girls Who Grid',
  description: 'Where Women and Motorsport Meet — Unapologetically.',
}

export default function AboutPage() {
  const values = [
    {
      title: 'Visibility',
      description: 'Amplifying women in motorsport across every series, every role, every race.',
    },
    {
      title: 'Community',
      description: 'Building a supportive network where women connect, collaborate, and celebrate.',
    },
    {
      title: 'Authenticity',
      description: 'Real stories, real experiences, real passion for the sport we love.',
    },
    {
      title: 'Ambition',
      description: 'Encouraging every woman to push boundaries and chase her motorsport dreams.',
    },
    {
      title: 'Bold Expression',
      description: 'Celebrating individuality, style, and the unique way each woman shows up on the grid.',
    },
  ]

  return (
    <main className="flex-1 pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-pink-light via-cream to-pink-bg">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-charcoal mb-6">
            Where Women and Motorsport Meet — Unapologetically.
          </h1>
          <p className="text-xl md:text-2xl text-gray-soft max-w-3xl mx-auto">
            We&apos;re not here to ask permission. We&apos;re here to show up, speak up, and celebrate
            the women who live for the roar of engines and the smell of burnt rubber.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-pink-bg">
        <div className="container max-w-4xl">
          <div className="neu-card p-8 md:p-12 space-y-6 text-lg leading-relaxed">
            <p>
              <strong className="text-pink-deep">Girls Who Grid</strong> started as a simple idea:
              what if there was a space that celebrated women in motorsport without caveat, without
              qualification, without having to prove they belong?
            </p>
            <p>
              From karting to F1, from the grandstands to the garage, from track days to pit crew,
              women have always been on the grid. We&apos;re here to make sure they&apos;re seen, heard,
              and celebrated.
            </p>
            <p>
              This isn&apos;t a site painted pink. It&apos;s a platform built with intention — where craft
              meets motorsport culture, where style meets substance, where every woman who loves racing
              finds her people.
            </p>
            <p className="text-pink-deep font-semibold">
              Because she&apos;s already on the grid. We&apos;re just turning up the volume.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="neu-card p-8 space-y-4 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 neu-circle flex items-center justify-center text-2xl font-bold text-pink-deep">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-heading font-semibold text-charcoal">
                  {value.title}
                </h3>
                <p className="text-gray-soft leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section (Placeholder) */}
      <section className="py-20 bg-pink-bg">
        <div className="container max-w-4xl">
          <div className="neu-card p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="neu-circle aspect-square bg-pink-light flex items-center justify-center">
                <span className="text-6xl">👋</span>
              </div>
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-3xl font-heading font-bold">Meet the Founder</h3>
                <p className="text-gray-soft leading-relaxed">
                  More than just a motorsport fan — a builder, a believer, and someone who refuses
                  to accept that women in racing should be the exception rather than the rule.
                </p>
                <p className="text-sm text-gray-soft italic">
                  (Coming soon: Full founder story and team profiles)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-primary via-pink-deep to-pink-primary">
        <div className="container text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            Press & Partnerships
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Interested in featuring Girls Who Grid or exploring partnership opportunities?
            We&apos;d love to hear from you.
          </p>
          <Link 
            href="/contact" 
            className="inline-block neu-button bg-white text-pink-deep px-8 py-4 font-semibold rounded-xl hover:bg-white/90 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
