import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
// import type { Post } from '@/payload-types'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import Image from 'next/image'
import Link from 'next/link'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function PostDetailPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const url = '/posts/' + decodedSlug
  const post = await queryPostBySlug({ slug: decodedSlug })

  if (!post) return <PayloadRedirects url={url} />

  return (
    <article className="flex-1 pt-24 pb-20 bg-pink-bg">
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}

      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-pink-light via-cream to-pink-bg">
        <div className="container max-w-4xl">
          {/* Categories & Reading Time */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {post.categories && post.categories.length > 0 && (
              <>
                {post.categories.map((category) => (
                  typeof category === 'object' && (
                    <span
                      key={category.id}
                      className="inline-block px-4 py-2 bg-lime-accent text-charcoal text-sm font-mono font-semibold rounded-full"
                    >
                      {category.title}
                    </span>
                  )
                ))}
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-charcoal mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          {post.publishedAt && (
            <p className="text-gray-soft font-mono text-sm mb-8">
              Published {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          )}

          {/* Hero Image */}
          {post.heroImage && typeof post.heroImage !== 'number' && (
            <div className="neu-card p-4 mb-8">
              <div className="aspect-video rounded-lg overflow-hidden bg-pink-light">
                <Image
                  src={(post.heroImage as any).url || ''}
                  alt={(post.heroImage as any).alt || post.title}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="neu-card p-8 md:p-12">
            <RichText
              className="prose prose-lg prose-pink max-w-none
                prose-headings:font-heading prose-headings:text-charcoal
                prose-p:text-gray-soft prose-p:leading-relaxed
                prose-a:text-pink-deep prose-a:no-underline hover:prose-a:underline
                prose-strong:text-charcoal
                prose-img:rounded-xl prose-img:neu-card
                prose-blockquote:border-l-4 prose-blockquote:border-pink-primary prose-blockquote:pl-6 prose-blockquote:italic
                prose-code:bg-cream prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-sm
                prose-pre:bg-charcoal prose-pre:text-white prose-pre:p-6 prose-pre:rounded-xl"
              data={post.content}
              enableGutter={false}
            />
          </div>

          {/* Author / Share Section */}
          <div className="mt-12 neu-card p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm text-gray-soft mb-1">Share this post</p>
              <div className="flex gap-3">
                <button className="neu-button w-10 h-10 flex items-center justify-center text-charcoal hover:text-pink-deep transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button className="neu-button w-10 h-10 flex items-center justify-center text-charcoal hover:text-pink-deep transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>

            <Link
              href="/posts"
              className="neu-button px-6 py-3 font-semibold text-charcoal hover:scale-105 transition-transform"
            >
              ← Back to All Posts
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const post = await queryPostBySlug({ slug: decodedSlug })
  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}
