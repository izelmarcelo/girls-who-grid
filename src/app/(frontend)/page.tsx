import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

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
  } catch (e) {
    // No posts yet
  }

  return (
    <main className="flex-1">
      {/* =================== HERO =================== */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, var(--pink-light) 0%, var(--cream) 40%, var(--blue-soft) 100%)' }}>
        
        {/* Decorative line art */}
        <div className="absolute top-10 right-10 w-64 h-64 opacity-20 pointer-events-none hidden lg:block">
          <Image src="/brand/branding-05.png" alt="" width={256} height={256} className="object-contain" />
        </div>

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
        <h1 className="text-center tracking-wider px-4" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: '0.9' }}>
          MOTORSPORT<br/>
          <span style={{ color: 'var(--pink-deep)' }}>CULTURE</span><br/>
          REDEFINED
        </h1>

        {/* Handwritten subtitle */}
        <p className="font-accent text-2xl md:text-3xl mt-6 text-center" style={{ color: 'var(--gray-soft)' }}>
          by women, for women — on the grid and beyond
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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 font-accent text-xl" style={{ color: 'var(--gray-soft)' }}>
          scroll down ↓
        </div>
      </section>

      {/* =================== MARQUEE STRIP =================== */}
      <section className="py-4 overflow-hidden" style={{ background: 'var(--charcoal)' }}>
        <div className="flex whitespace-nowrap marquee-track">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-8 text-xl tracking-[0.3em] font-heading" style={{ color: 'var(--lime-accent)' }}>
              GIRLS WHO GRID ✦ SHE&apos;S ALREADY ON THE GRID ✦ RACING BEYOND BOUNDARIES ✦
            </span>
          ))}
        </div>
      </section>

      {/* =================== MISSION (Pink Section) =================== */}
      <section className="py-20 md:py-28" style={{ background: 'var(--pink-light)' }}>
        <div className="container max-w-4xl mx-auto text-center px-6">
          <p className="font-accent text-xl mb-4" style={{ color: 'var(--pink-deep)' }}>our mission</p>
          <h2 className="mb-6">
            FROM THE GRANDSTANDS<br/>TO THE GARAGE
          </h2>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'var(--charcoal)' }}>
            We&apos;re amplifying the women who show up on the grid — every race, every series, every day. 
            This isn&apos;t a site painted pink. It&apos;s a platform built with <em className="font-accent text-2xl" style={{ color: 'var(--pink-deep)' }}>intention</em> — 
            where craft meets motorsport culture, where style meets substance, 
            where every woman who loves racing finds her people.
          </p>
        </div>
      </section>

      {/* =================== FEATURED CONTENT =================== */}
      <section className="py-20 md:py-28" style={{ background: 'var(--cream)' }}>
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
                >
                  {post.heroImage && typeof post.heroImage !== 'number' && (
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={post.heroImage.url || ''}
                        alt={post.heroImage.alt || ''}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  {(!post.heroImage || typeof post.heroImage === 'number') && (
                    <div className="aspect-video flex items-center justify-center" style={{ background: 'var(--pink-light)' }}>
                      <span className="font-heading text-4xl" style={{ color: 'var(--pink-deep)' }}>GWG</span>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      {post.categories && post.categories.length > 0 && (
                        <span className="inline-block px-3 py-1 text-xs font-mono rounded-full" 
                          style={{ background: 'var(--lime-accent)', color: 'var(--charcoal)' }}>
                          {typeof post.categories[0] === 'object' ? post.categories[0].title : ''}
                        </span>
                      )}
                    </div>
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
              {['Race Recap', 'Style Guide', 'Community'].map((cat, i) => (
                <div key={i} className="neu-card p-0 overflow-hidden">
                  <div className="aspect-video flex items-center justify-center" 
                    style={{ background: i === 0 ? 'var(--pink-light)' : i === 1 ? 'var(--blue-soft)' : 'var(--lime-accent)' }}>
                    <span className="font-heading text-5xl" style={{ color: 'var(--charcoal)', opacity: 0.3 }}>GWG</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-mono rounded-full mb-3"
                      style={{ background: 'var(--lime-accent)', color: 'var(--charcoal)' }}>
                      {cat}
                    </span>
                    <h3 className="text-2xl">Coming Soon</h3>
                    <p className="mt-2 text-sm font-accent text-lg" style={{ color: 'var(--gray-soft)' }}>
                      Fresh content is on its way...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/posts" className="neu-button-dark inline-block px-8 py-4">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* =================== COMMUNITY STATS (Blue Section) =================== */}
      <section className="py-20 md:py-28" style={{ background: 'var(--blue-soft)' }}>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-accent text-xl mb-2" style={{ color: 'var(--charcoal)' }}>join the grid</p>
            <h2>WE&apos;RE MORE THAN MERCH.<br/>
              <span style={{ color: 'var(--pink-deep)' }}>WE&apos;RE A MOVEMENT.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { num: '15K+', label: 'Community Members', sub: 'and growing every race weekend' },
              { num: '50+', label: 'Races Covered', sub: 'from karting to Formula 1' },
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

      {/* =================== MERCH TEASER (Lime Section) =================== */}
      <section className="py-20 md:py-28" style={{ background: 'var(--lime-accent)' }}>
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <p className="font-accent text-xl mb-2" style={{ color: 'var(--charcoal)' }}>coming soon</p>
          <h2>START YOUR ENGINES,<br/>YOUR CLOSET&apos;S CALLING</h2>
          <p className="text-lg mt-6 mb-10 max-w-2xl mx-auto">
            Race day to any day. Motorsport apparel that&apos;s as bold as the women who wear it.
          </p>
          <Link href="/shop" className="neu-button-dark inline-block px-10 py-5 text-xl">
            Shop Coming Soon
          </Link>
        </div>
      </section>

      {/* =================== NEWSLETTER CTA (Pink Gradient) =================== */}
      <section className="py-20 md:py-28" 
        style={{ background: 'linear-gradient(135deg, var(--pink-primary) 0%, var(--pink-deep) 100%)' }}>
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <p className="font-accent text-xl mb-2" style={{ color: 'var(--white)' }}>stay connected</p>
          <h2 style={{ color: 'var(--white)' }}>PIT STOP IN<br/>YOUR INBOX</h2>
          <p className="text-lg mt-4 mb-10" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Race recaps, style drops, and community invites — no spam, just speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="flex-1 px-6 py-4 rounded-xl text-base neu-inset"
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
