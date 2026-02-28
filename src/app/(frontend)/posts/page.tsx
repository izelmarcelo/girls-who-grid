import type { Metadata } from 'next/types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PageClient from './page.client'

export const dynamic = 'force-dynamic'

export const revalidate = 600

export default async function PostsPage() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 50,
    sort: '-publishedAt',
  })

  // Get unique categories
  const categories = Array.from(
    new Set(
      posts.docs.flatMap((post) =>
        (post.categories || [])
          .filter((cat) => typeof cat === 'object')
          .map((cat) => cat.title)
      )
    )
  )

  return (
    <main className="flex-1 pt-24 pb-20 bg-pink-bg">
      <PageClient />
      
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-pink-light via-cream to-pink-bg">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-charcoal mb-4">
            The Grid
          </h1>
          <p className="text-xl md:text-2xl text-gray-soft max-w-2xl mx-auto">
            Stories, insights, and inspiration from women in motorsport
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.length > 0 && (
        <section className="py-8 bg-cream border-b border-pink-primary/10">
          <div className="container">
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="px-6 py-2 neu-button text-sm font-semibold">
                All Posts
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 neu-card text-sm font-semibold hover:bg-pink-light transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.docs.map((post) => (
              <Link
                key={post.id}
                href={`/posts/${post.slug}`}
                className="neu-card p-6 space-y-4 group hover:scale-[1.02] transition-transform"
              >
                {post.heroImage && typeof post.heroImage !== 'number' && (
                  <div className="aspect-video rounded-lg overflow-hidden bg-pink-light">
                    <Image
                      src={(post.heroImage as any).url || ''}
                      alt={(post.heroImage as any).alt || post.title}
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
                </div>

                <h3 className="text-xl font-heading font-semibold group-hover:text-pink-deep transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {post.meta?.description && (
                  <p className="text-gray-soft text-sm line-clamp-3 leading-relaxed">
                    {post.meta.description}
                  </p>
                )}

                {post.publishedAt && (
                  <p className="text-xs text-gray-soft font-mono">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                )}
              </Link>
            ))}
          </div>

          {posts.docs.length === 0 && (
            <div className="neu-card p-12 text-center">
              <p className="text-xl text-gray-soft">
                No posts yet. Check back soon for stories from the grid!
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Blog | Girls Who Grid',
    description: 'Stories, insights, and inspiration from women in motorsport.',
  }
}
