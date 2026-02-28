import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })
  
  // Fetch latest 3 blog posts
  const posts = await payload.find({
    collection: 'posts',
    limit: 3,
    sort: '-publishedAt',
  })

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative flex items-center justify-center checkered-pattern overflow-hidden pt-24">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-light via-cream to-pink-bg opacity-80" />
        
        {/* Decorative generative art */}
        <div className="absolute top-10 right-10 opacity-20 hidden lg:block">
          <Image
            src="/brand/branding-05.png"
            alt=""
            width={400}
            height={400}
            className="animate-pulse"
          />
        </div>

        <div className="container relative z-10 text-center space-y-8 px-4">
          {/* Logo with neumorphic shadow */}
          <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="neu-card p-8 inline-block">
              <Image
                src="/logo.png"
                alt="Girls Who Grid"
                width={120}
                height={120}
                priority
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
          </div>

          {/* Hero headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-charcoal animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            She&apos;s Already On The Grid.
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-soft max-w-3xl mx-auto font-body animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            The community and content platform for women who live and breathe motorsport.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <Link 
              href="/posts" 
              className="neu-button px-8 py-4 text-lg font-semibold text-charcoal hover:scale-105 transition-transform"
            >
              Explore Content
            </Link>
            <Link 
              href="/about" 
              className="neu-card px-8 py-4 text-lg font-semibold text-charcoal hover:scale-105 transition-transform"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Strip */}
      <section className="py-16 bg-cream">
        <div className="container">
          <div className="neu-inset p-8 md:p-12 max-w-5xl mx-auto">
            <blockquote className="text-xl md:text-2xl text-center font-body leading-relaxed">
              From the <span className="text-lime-accent font-bold">grandstands</span> to the{' '}
              <span className="text-lime-accent font-bold">garage</span>, we&apos;re amplifying the women who
              show up on the <span className="text-lime-accent font-bold">grid</span> — every race, every
              series, every day.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-pink-bg">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            Latest from the Grid
          </h2>
          <p className="text-center text-gray-soft mb-12 text-lg">
            Stories, insights, and inspiration from the motorsport community
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {posts.docs.map((post) => (
              <Link 
                key={post.id} 
                href={`/posts/${post.slug}`}
                className="neu-card p-6 space-y-4 group"
              >
                {post.heroImage && typeof post.heroImage !== 'number' && (
                  <div className="aspect-video rounded-lg overflow-hidden bg-pink-light">
                    <Image
                      src={post.heroImage.url || ''}
                      alt={post.heroImage.alt || ''}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="flex items-center gap-2">
                  {post.categories && post.categories.length > 0 && (
                    <span className="inline-block px-3 py-1 bg-lime-accent text-charcoal text-xs font-mono rounded-full">
                      {typeof post.categories[0] === 'object' ? post.categories[0].title : ''}
                    </span>
                  )}
                  {post.publishedAt && (
                    <span className="text-xs text-gray-soft font-mono">
                      post
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-heading font-semibold group-hover:text-pink-deep transition-colors">
                  {post.title}
                </h3>

                {post.meta?.description && (
                  <p className="text-gray-soft text-sm line-clamp-2">
                    {post.meta.description}
                  </p>
                )}
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/posts" 
              className="inline-flex items-center gap-2 text-pink-deep font-semibold hover:gap-4 transition-all"
            >
              View All Posts
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Proof */}
      <section className="py-20 bg-cream">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            On the Grid
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="neu-circle aspect-square flex flex-col items-center justify-center p-8 text-center">
              <div className="text-5xl md:text-6xl font-heading font-bold text-pink-deep mb-2">
                15K+
              </div>
              <div className="text-lg font-body text-charcoal">
                Community Members
              </div>
            </div>

            <div className="neu-circle aspect-square flex flex-col items-center justify-center p-8 text-center">
              <div className="text-5xl md:text-6xl font-heading font-bold text-pink-deep mb-2">
                50+
              </div>
              <div className="text-lg font-body text-charcoal">
                Races Covered
              </div>
            </div>

            <div className="neu-circle aspect-square flex flex-col items-center justify-center p-8 text-center">
              <div className="text-5xl md:text-6xl font-heading font-bold text-pink-deep mb-2">
                100+
              </div>
              <div className="text-lg font-body text-charcoal">
                Women Featured
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="neu-card p-8">
              <p className="text-gray-soft italic mb-4">
                &quot;GWG gave me the confidence to show up at my first track day. Now I&apos;m hooked!&quot;
              </p>
              <p className="font-semibold text-charcoal">— Sarah M., Track Enthusiast</p>
            </div>

            <div className="neu-card p-8">
              <p className="text-gray-soft italic mb-4">
                &quot;Finally, a space where women in motorsport are celebrated, not questioned.&quot;
              </p>
              <p className="font-semibold text-charcoal">— Jessica R., Karting Competitor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-primary via-pink-deep to-pink-primary">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Get the Starting Grid
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join 5,000+ women in motorsport. Weekly insights, stories, and community updates.
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="neu-inset flex-1 px-6 py-4 bg-white/90 text-charcoal rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="neu-button bg-white text-pink-deep px-8 py-4 font-semibold rounded-xl hover:bg-white/90 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
