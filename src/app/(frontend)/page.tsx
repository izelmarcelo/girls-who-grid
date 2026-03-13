import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

// =================== SVG DECORATIVE ELEMENTS ===================

function CheckeredFlagSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10 L90 5 L85 75 L5 70 Z" fill="#1a1a2e" stroke="#C0C0C0" strokeWidth="2"/>
      <rect x="15" y="15" width="15" height="15" fill="#FF6B9D"/>
      <rect x="35" y="15" width="15" height="15" fill="#fff"/>
      <rect x="55" y="12" width="15" height="15" fill="#CCFF33"/>
      <rect x="75" y="10" width="15" height="15" fill="#FF6B9D"/>
      <rect x="12" y="35" width="15" height="15" fill="#fff"/>
      <rect x="32" y="35" width="15" height="15" fill="#FF6B9D"/>
      <rect x="52" y="32" width="15" height="15" fill="#fff"/>
      <rect x="72" y="30" width="15" height="15" fill="#CCFF33"/>
      <rect x="10" y="55" width="15" height="15" fill="#CCFF33"/>
      <rect x="30" y="55" width="15" height="15" fill="#fff"/>
      <rect x="50" y="52" width="15" height="15" fill="#FF6B9D"/>
      <rect x="70" y="50" width="15" height="15" fill="#fff"/>
      <rect x="5" y="70" width="6" height="25" fill="#C0C0C0"/>
    </svg>
  )
}

function RacingHelmetSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="40" cy="40" rx="30" ry="25" stroke="#C0C0C0" strokeWidth="2" fill="#1a1a2e"/>
      <path d="M20 35 Q40 15 60 35" stroke="#FF6B9D" strokeWidth="2" fill="none"/>
      <path d="M15 40 Q10 50 25 55" stroke="#CCFF33" strokeWidth="2" fill="none"/>
      <path d="M65 40 Q70 50 55 55" stroke="#CCFF33" strokeWidth="2" fill="none"/>
      <rect x="25" y="30" width="30" height="12" rx="3" stroke="#FFAFCC" strokeWidth="1.5" fill="none"/>
      <circle cx="40" cy="36" r="2" fill="#FF6B9D"/>
      <path d="M55 25 L70 20 L72 30 L57 35 Z" stroke="#C0C0C0" strokeWidth="1.5" fill="#1a1a2e"/>
    </svg>
  )
}

function TrophySVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 10 L45 10 L42 35 Q40 45 30 45 Q20 45 18 35 Z" stroke="#C0C0C0" strokeWidth="2" fill="#1a1a2e"/>
      <path d="M15 10 Q8 12 8 20 Q8 30 18 32" stroke="#CCFF33" strokeWidth="2" fill="none"/>
      <path d="M45 10 Q52 12 52 20 Q52 30 42 32" stroke="#CCFF33" strokeWidth="2" fill="none"/>
      <rect x="25" y="45" width="10" height="12" fill="#C0C0C0"/>
      <rect x="18" y="57" width="24" height="4" rx="1" fill="#FF6B9D"/>
      <path d="M25 18 L35 18 L32 28 L28 28 Z" fill="#FF6B9D" opacity="0.5"/>
    </svg>
  )
}

function SpeedLinesSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="10" x2="180" y2="10" stroke="#FF6B9D" strokeWidth="2" opacity="0.4"/>
      <line x1="20" y1="25" x2="200" y2="25" stroke="#CCFF33" strokeWidth="2" opacity="0.4"/>
      <line x1="10" y1="40" x2="160" y2="40" stroke="#C0C0C0" strokeWidth="2" opacity="0.4"/>
      <line x1="40" y1="55" x2="190" y2="55" stroke="#FFAFCC" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  )
}

function ArrowSVG({ className, direction = 'right' }: { className?: string; direction?: 'right' | 'left' | 'down' }) {
  const rotation = direction === 'left' ? 'rotate(180deg)' : direction === 'down' ? 'rotate(90deg)' : 'rotate(0deg)'
  return (
    <svg className={className} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: rotation }}>
      <line x1="5" y1="20" x2="45" y2="20" stroke="#CCFF33" strokeWidth="3" strokeLinecap="round"/>
      <path d="M40 10 L55 20 L40 30" stroke="#CCFF33" strokeWidth="3" strokeLinecap="round" fill="none"/>
    </svg>
  )
}

// =================== POLAROID FRAME COMPONENT ===================

function PolaroidFrame({ src, alt, caption, rotation = 0, className }: {
  src: string
  alt: string
  caption?: string
  rotation?: number
  className?: string
}) {
  return (
    <div 
      className={`bg-white p-2 md:p-3 pb-8 md:pb-12 shadow-lg ${className || ''}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <Image 
        src={src} 
        alt={alt} 
        width={280} 
        height={280} 
        className="object-cover w-full aspect-square"
      />
      {caption && (
        <p className="font-script text-center mt-1 md:mt-2 text-xs md:text-sm text-gray-600">
          {caption}
        </p>
      )}
    </div>
  )
}

export default async function HomePage() {
  let posts: any[] = []
  try {
    const payload = await getPayload({ config: configPromise })
    const result = await payload.find({
      collection: 'posts',
      limit: 3,
      sort: '-createdAt',
    })
    posts = result.docs
  } catch (_e) {
    // No posts yet
  }

  return (
    <main className="flex-1">
      {/* =================== HERO =================== */}
      <section 
        className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden texture-grain checkered-overlay"
        style={{ 
          background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 30%, #2B2B2B 60%, #1a1a2e 100%)',
        }}
      >
        {/* Frosted glass background for content */}
        <div className="absolute inset-0 glass-blur opacity-30 pointer-events-none" />
        
        {/* Decorative line art */}
        <div className="absolute top-10 right-10 w-64 h-64 opacity-20 pointer-events-none hidden lg:block">
          <Image src="/brand/branding-05.png" alt="" width={256} height={256} className="object-contain" />
        </div>

        {/* Script font overlay - decorative background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span 
            className="font-script text-white opacity-[0.08] select-none"
            style={{ 
              fontSize: 'clamp(6rem, 20vw, 18rem)',
              transform: 'rotate(-5deg)',
              whiteSpace: 'nowrap'
            }}
          >
            Girls Who Grid
          </span>
        </div>

        {/* Polaroid Frame - Top Left - Two women at track */}
        <div className="absolute -top-4 -left-8 md:top-8 md:left-4 lg:left-12 z-20 pointer-events-none hidden sm:block">
          <PolaroidFrame 
            src="/photos/IMG_7158-web.jpg" 
            alt="Two women selfie at the track"
            caption="race day vibes"
            rotation={-8}
            className="w-32 md:w-48 lg:w-56 shadow-2xl"
          />
        </div>

        {/* Polaroid Frame - Bottom Right - Woman at racing sign */}
        <div className="absolute -bottom-8 -right-4 md:bottom-12 md:right-4 lg:right-8 z-20 pointer-events-none hidden sm:block">
          <PolaroidFrame 
            src="/photos/IMG_4829-web.jpg" 
            alt="Woman at Racing Capital of the World sign"
            caption="Racing Capital"
            rotation={6}
            className="w-28 md:w-44 lg:w-52 shadow-2xl"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Logo */}
          <div className="relative mb-8">
            <Image 
              src="/logo.png" 
              alt="Girls Who Grid" 
              width={120} 
              height={120} 
              className="drop-shadow-lg"
            />
          </div>

          {/* Headline */}
          <h1 
            className="text-center tracking-wider px-4 text-white relative z-10" 
            style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: '0.9' }}
          >
            SHE&apos;S ALREADY<br/>
            <span style={{ color: 'var(--pink-deep)' }}>ON THE GRID.</span>
          </h1>

          {/* Handwritten subtitle */}
          <p 
            className="font-accent text-2xl md:text-3xl mt-6 text-center px-4 max-w-2xl text-white/80"
          >
            she doesn&apos;t need an invitation to the paddock. she already knows the way.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 mt-10">
            <Link href="/posts" className="neu-button-dark px-8 py-4 text-lg">
              Explore Content
            </Link>
            <Link href="/about" className="neu-button px-8 py-4 text-lg" style={{ color: 'var(--charcoal)' }}>
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 font-accent text-xl text-white/60">
          scroll down ↓
        </div>
      </section>

      {/* Racing Stripe Divider */}
      <div className="racing-stripe my-0" />

      {/* =================== MARQUEE STRIP =================== */}
      <section className="py-4 overflow-hidden" style={{ background: 'var(--charcoal)' }}>
        <div className="flex whitespace-nowrap marquee-track">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-8 text-xl tracking-[0.3em] font-heading" style={{ color: 'var(--lime-accent)' }}>
              ON THE GRID ✦ IN THE GAME ✦ GIRLS WHO GRID ✦ RACING BEYOND BOUNDARIES ✦
            </span>
          ))}
        </div>
      </section>

      {/* Racing Stripe Divider */}
      <div className="racing-stripe my-0" />

      {/* =================== BRAND INTRO =================== */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'var(--cream)' }}>
        {/* Checkered Flag SVG - Top Right */}
        <div className="absolute top-4 right-4 md:top-8 md:right-12 pointer-events-none opacity-30 hidden md:block" 
          style={{ transform: 'rotate(15deg)' }}>
          <CheckeredFlagSVG className="w-16 md:w-24 h-auto" />
        </div>

        {/* Trophy SVG - Bottom Left */}
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-12 pointer-events-none opacity-40 hidden md:block">
          <TrophySVG className="w-12 md:w-16 h-auto" />
        </div>

        <div className="container max-w-4xl mx-auto text-center px-6 relative z-10">
          <p className="font-accent text-xl mb-4" style={{ color: 'var(--pink-deep)' }}>who we are</p>
          <h2 className="mb-8">THE COMMUNITY AND<br/>CONTENT PLATFORM FOR<br/>WOMEN IN MOTORSPORT</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: 'var(--charcoal)' }}>
            We serve fans, professionals, creators, and newcomers who are passionate about racing 
            and tired of being treated as outsiders in a sport they love. Through original content, 
            community programming, and brand partnerships, GWG is building the most visible and 
            engaged network of women in motorsport.
          </p>
          <p className="font-accent text-2xl mt-6" style={{ color: 'var(--pink-deep)' }}>
            We don&apos;t soften the sport. We make space in it.
          </p>
        </div>
      </section>

      {/* Racing Stripe Divider */}
      <div className="racing-stripe" />

      {/* =================== MISSION (Pink Section) =================== */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'var(--pink-light)' }}>
        {/* Script accent - "our story" */}
        <div className="absolute top-8 left-4 md:top-16 md:left-12 pointer-events-none hidden md:block"
          style={{ transform: 'rotate(-12deg)' }}
>
          <span className="font-script text-6xl md:text-8xl opacity-[0.08]" style={{ color: 'var(--charcoal)' }}>
            our story
          </span>
        </div>

        {/* Mobile script accent */}
        <div className="absolute top-4 left-2 pointer-events-none md:hidden"
          style={{ transform: 'rotate(-8deg)' }}>
          <span className="font-script text-4xl opacity-[0.06]" style={{ color: 'var(--charcoal)' }}>
            our story
          </span>
        </div>

        {/* Polaroid Frame - Right side - Flat lay merch */}
        <div className="absolute top-1/2 -right-8 md:right-4 lg:right-16 -translate-y-1/2 z-10 pointer-events-none hidden md:block">
          <PolaroidFrame 
            src="/photos/IMG_3726-web.jpg" 
            alt="Flat lay of orange-themed racing merch"
            caption="gear up"
            rotation={-5}
            className="w-36 md:w-44 lg:w-56 shadow-xl"
          />
        </div>

        <div className="container max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-accent text-xl mb-4" style={{ color: 'var(--pink-deep)' }}>our mission</p>
              <h2>FROM THE<br/>GRANDSTANDS<br/>TO THE GARAGE</h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Motorsport has always had women in it — in the stands, in the garage, behind the wheel, 
                and behind the scenes. But the culture around the sport hasn&apos;t always reflected that.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                From the fan who plans her entire year around the race calendar to the engineer optimizing 
                downforce packages, from the content creator documenting her first paddock experience to 
                the sim racer grinding leaderboards at midnight — <em className="font-accent text-2xl" style={{ color: 'var(--pink-deep)' }}>Girls Who Grid is where these women find each other.</em>
              </p>
              <p className="text-lg leading-relaxed">
                We don&apos;t make motorsport &ldquo;more feminine.&rdquo; We make the women who already love it more visible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Racing Stripe Divider */}
      <div className="racing-stripe" />

      {/* =================== CONTENT PILLARS =================== */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'var(--cream)' }}>
        {/* Speed Lines behind heading */}
        <div className="absolute top-16 left-0 right-0 pointer-events-none opacity-60 hidden md:block">
          <SpeedLinesSVG className="w-full h-auto max-w-3xl mx-auto" />
        </div>

        {/* Script accent - "content" */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none hidden md:block"
          style={{ transform: 'translateX(-50%) rotate(3deg)' }}>
          <span className="font-script text-7xl md:text-9xl opacity-[0.06]" style={{ color: 'var(--charcoal)' }}>
            content
          </span>
        </div>

        {/* Mobile script accent */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 pointer-events-none md:hidden">
          <span className="font-script text-5xl opacity-[0.05]" style={{ color: 'var(--charcoal)' }}>
            content
          </span>
        </div>

        {/* Polaroid - IMS Exterior */}
        <div className="absolute bottom-8 -left-6 md:bottom-12 md:left-8 z-10 pointer-events-none hidden md:block">
          <PolaroidFrame 
            src="/photos/IMG_7149-web.jpg" 
            alt="Indianapolis Motor Speedway exterior"
            caption="IMS"
            rotation={4}
            className="w-32 md:w-40 lg:w-48 shadow-xl"
          />
        </div>

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="font-accent text-xl mb-2" style={{ color: 'var(--pink-deep)' }}>what we cover</p>
            <h2>CONTENT THAT<br/>MOVES THE NEEDLE</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Race Culture', desc: 'Real-time race coverage, reactions, recaps, and hot takes that feel like debriefing with your smartest friend at the track.', color: 'var(--pink-light)' },
              { title: 'Women on the Grid', desc: 'Profiles, interviews, and career spotlights across all motorsport roles — from drivers to engineers to the fans who make this sport pulse.', color: 'var(--blue-soft)' },
              { title: 'The Fan Experience', desc: 'Race weekend guides, travel intel, gear reviews, and everything you need to show up to the paddock like you own it.', color: 'var(--lime-accent)' },
              { title: 'Knowledge & Access', desc: "Educational content that demystifies motorsport for newer fans. You don't need to know the difference between hard and soft compound to belong here.", color: 'var(--pink-light)' },
              { title: 'Style & Gear', desc: 'Race day outfits, gear that works as hard as your favorite driver, and the lifestyle content that bridges motorsport and everyday identity.', color: 'var(--blue-soft)' },
              { title: 'Community Moments', desc: 'Member spotlights, event recaps, and the real stories of women who turned passion into pit lane passes.', color: 'var(--lime-accent)' },
            ].map((pillar, i) => (
              <div key={i} className="neu-card p-6" style={{ borderTop: `4px solid ${pillar.color}` }}>
                <h3 className="text-2xl mb-3">{pillar.title}</h3>
                <p style={{ color: 'var(--gray-soft)' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Racing Stripe Divider */}
      <div className="racing-stripe" />

      {/* =================== FEATURED POSTS =================== */}
      <section className="py-20 md:py-28" style={{ background: 'var(--pink-light)' }}>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-accent text-xl mb-2" style={{ color: 'var(--pink-deep)' }}>from the pit lane</p>
            <h2>LATEST FROM<br/>THE GRID</h2>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/posts/${post.slug}`}
                  className="neu-card p-0 overflow-hidden group"
                  style={{ background: 'var(--cream)' }}
                >
                  {post.heroImage && typeof post.heroImage !== 'number' && (
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={(post.heroImage as any).url || ''}
                        alt={(post.heroImage as any).alt || ''}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  {(!post.heroImage || typeof post.heroImage === 'number') && (
                    <div className="aspect-video flex items-center justify-center" style={{ background: 'var(--blue-soft)' }}>
                      <span className="font-heading text-4xl" style={{ color: 'var(--charcoal)', opacity: 0.3 }}>GWG</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl group-hover:text-pink-deep transition-colors">
                      {post.title}
                    </h3>
                    {post.meta?.description && (
                      <p className="mt-2 text-sm line-clamp-2" style={{ color: 'var(--gray-soft)' }}>
                        {post.meta.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { cat: 'Race Recap', title: 'Monaco Weekend: The Good, The Chaotic, and The Champagne', desc: 'From the yachts to the pit lane, we break down the most glamorous race weekend of the year.', bg: 'var(--cream)' },
                { cat: 'Style Guide', title: 'What to Wear to Your First Race Weekend', desc: 'Our guide to dressing for the paddock without losing your personal style.', bg: 'var(--blue-soft)' },
                { cat: 'Community', title: 'Meet the Girls: 5 Fans Who Turned Passion Into Pit Lane Passes', desc: 'Inspiring stories from our community members who made their racing dreams real.', bg: 'var(--lime-accent)' },
              ].map((post, i) => (
                <div key={i} className="neu-card p-0 overflow-hidden" style={{ background: 'var(--cream)' }}>
                  <div className="aspect-video flex items-center justify-center" style={{ background: post.bg }}>
                    <span className="font-heading text-5xl" style={{ color: 'var(--charcoal)', opacity: 0.15 }}>GWG</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-mono rounded-full mb-3"
                      style={{ background: 'var(--lime-accent)', color: 'var(--charcoal)' }}>
                      {post.cat}
                    </span>
                    <h3 className="text-xl mb-2">{post.title}</h3>
                    <p className="text-sm" style={{ color: 'var(--gray-soft)' }}>{post.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/posts" className="neu-button-dark inline-block px-8 py-4">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Racing Stripe Divider */}
      <div className="racing-stripe" />

      {/* =================== COMMUNITY (Blue Section) =================== */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'var(--blue-soft)' }}>
        {/* Script accent - "together" */}
        <div className="absolute top-24 right-4 md:top-32 md:right-16 pointer-events-none hidden md:block"
          style={{ transform: 'rotate(8deg)' }}>
          <span className="font-script text-7xl md:text-9xl opacity-[0.08]" style={{ color: 'var(--charcoal)' }}>
            together
          </span>
        </div>

        {/* Mobile script accent */}
        <div className="absolute top-16 right-2 pointer-events-none md:hidden"
          style={{ transform: 'rotate(5deg)' }}>
          <span className="font-script text-5xl opacity-[0.06]" style={{ color: 'var(--charcoal)' }}>
            together
          </span>
        </div>

        {/* Polaroid Frame - Bottom Left - Track photo 1 */}
        <div className="absolute bottom-16 -left-10 md:bottom-24 md:left-4 lg:left-8 z-10 pointer-events-none hidden lg:block">
          <PolaroidFrame 
            src="/photos/DSCN3089-2-web.jpg" 
            alt="Motorsport track photo"
            caption="on the grid"
            rotation={-6}
            className="w-36 md:w-44 shadow-xl"
          />
        </div>

        {/* Polaroid Frame - Top Right - Track photo 2 */}
        <div className="absolute top-32 -right-8 md:top-40 md:right-4 lg:right-8 z-10 pointer-events-none hidden lg:block">
          <PolaroidFrame 
            src="/photos/DSCN3096-2-web.jpg" 
            alt="Motorsport track photo"
            caption="race ready"
            rotation={8}
            className="w-32 md:w-40 shadow-xl"
          />
        </div>

        {/* Small polaroids for tablet */}
        <div className="absolute bottom-8 left-4 z-10 pointer-events-none hidden md:block lg:hidden">
          <PolaroidFrame 
            src="/photos/DSCN3089-2-web.jpg" 
            alt="Motorsport track photo"
            rotation={-4}
            className="w-24 shadow-lg"
          />
        </div>

        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="font-accent text-xl mb-2" style={{ color: 'var(--charcoal)' }}>join the movement</p>
            <h2>FANDOM IS<br/>BETTER TOGETHER</h2>
            <p className="text-lg mt-4 max-w-2xl mx-auto">
              GWG creates belonging for women who&apos;ve felt like outsiders in racing culture. 
              You don&apos;t need to know the difference between a hard and soft compound to belong here.
            </p>
            <p className="font-accent text-xl mt-2" style={{ color: 'var(--charcoal)' }}>
              (But you might after hanging out with us.)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { num: '15K+', label: 'Community Members', sub: 'and growing every race weekend' },
              { num: '50+', label: 'Races Covered', sub: 'F1, IndyCar, NASCAR, MotoGP & beyond' },
              { num: '100+', label: 'Women Featured', sub: 'drivers, engineers, fans, creators' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-44 h-44 mx-auto flex flex-col items-center justify-center rounded-full"
                  style={{ background: 'rgba(255,255,255,0.6)', boxShadow: 'inset 4px 4px 8px rgba(150,190,220,0.3), inset -4px -4px 8px rgba(255,255,255,0.8)' }}>
                  <span className="font-heading text-5xl" style={{ color: 'var(--pink-deep)' }}>{stat.num}</span>
                  <span className="text-sm font-semibold mt-1">{stat.label}</span>
                </div>
                <p className="font-accent text-lg mt-4" style={{ color: 'var(--charcoal)' }}>{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { quote: "GWG gave me the confidence to show up at my first track day. Now I'm hooked.", name: 'Sarah M.', role: 'Track Enthusiast' },
              { quote: "Finally, a space where women in motorsport are celebrated, not questioned.", name: 'Jessica R.', role: 'Karting Competitor' },
            ].map((t, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.5)' }}>
                <p className="text-lg italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-heading text-lg">— {t.name}</p>
                <p className="font-accent" style={{ color: 'var(--pink-deep)' }}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Racing Stripe Divider */}
      <div className="racing-stripe" />

      {/* =================== PARTNERSHIPS (Lime Section) =================== */}
      <section className="py-20 md:py-28" style={{ background: 'var(--lime-accent)' }}>
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <p className="font-accent text-xl mb-2" style={{ color: 'var(--charcoal)' }}>for brands</p>
          <h2>WOMEN ARE NOT A<br/>NICHE AUDIENCE<br/>IN MOTORSPORT</h2>
          <p className="text-lg mt-6 mb-4 max-w-2xl mx-auto">
            Girls Who Grid reaches the fastest-growing segment in motorsport: 
            women who don&apos;t just watch the race — they drive the conversation.
          </p>
          <p className="font-accent text-xl mb-10">
            They are the fastest-growing audience. Period.
          </p>
          <Link href="/contact" className="neu-button-dark inline-block px-10 py-5 text-xl">
            Partner With Us
          </Link>
        </div>
      </section>

      {/* Racing Stripe Divider */}
      <div className="racing-stripe" />

      {/* =================== NEWSLETTER CTA =================== */}
      <section className="relative py-20 md:py-28 overflow-hidden" 
        style={{ background: 'linear-gradient(135deg, var(--pink-primary) 0%, var(--pink-deep) 100%)' }}>
        
        {/* Racing Helmet SVG */}
        <div className="absolute top-8 left-8 md:top-12 md:left-16 pointer-events-none opacity-30 hidden md:block">
          <RacingHelmetSVG className="w-16 md:w-20 h-auto" />
        </div>

        {/* Decorative Arrow pointing to form */}
        <div className="absolute bottom-24 right-8 md:bottom-32 md:right-24 pointer-events-none hidden lg:block"
          style={{ transform: 'rotate(-15deg)' }}>
          <ArrowSVG className="w-16 md:w-20 h-auto" />
        </div>

        <div className="container max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="font-accent text-xl mb-2" style={{ color: 'var(--white)' }}>the starting grid</p>
          <h2 style={{ color: 'var(--white)' }}>PIT STOP IN<br/>YOUR INBOX</h2>
          <p className="text-lg mt-4 mb-10" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Weekly race intel, community highlights, and exclusive content. No spam, just speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="flex-1 px-6 py-4 rounded-xl text-base"
              style={{ background: 'rgba(255,255,255,0.9)', color: 'var(--charcoal)' }}
            />
            <button className="neu-button-dark px-8 py-4">
              Subscribe
            </button>
          </div>
          <p className="font-accent mt-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Join 5,000+ women in motorsport
          </p>
        </div>
      </section>
    </main>
  )
}
