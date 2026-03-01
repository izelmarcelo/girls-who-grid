export const dynamic = "force-dynamic"

import type { Metadata } from 'next'
import { Bebas_Neue, Inter, Caveat, JetBrains_Mono } from 'next/font/google'
import { cn } from '@/utilities/ui'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-accent',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html 
      className={cn(bebasNeue.variable, inter.variable, caveat.variable, jetbrainsMono.variable)} 
      lang="en" 
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <link href="/logo.png" rel="apple-touch-icon" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: 'Girls Who Grid | Women in Motorsport',
  description: 'The community and content platform for women who live and breathe motorsport.',
  openGraph: mergeOpenGraph({
    title: 'Girls Who Grid',
    description: 'The community and content platform for women who live and breathe motorsport.',
    images: [
      {
        url: '/logo.png',
      },
    ],
  }),
  twitter: {
    card: 'summary_large_image',
    title: 'Girls Who Grid',
    description: 'The community and content platform for women who live and breathe motorsport.',
  },
}
