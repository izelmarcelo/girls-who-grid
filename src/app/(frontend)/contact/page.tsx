import React from 'react'

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="py-20 md:py-28" style={{ background: 'linear-gradient(180deg, var(--pink-light) 0%, var(--cream) 100%)' }}>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <p className="font-accent text-xl mb-2" style={{ color: 'var(--pink-deep)' }}>get in touch</p>
              <h1 className="mb-6">LET&apos;S SHIFT<br/>THE GRID<br/>TOGETHER</h1>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--gray-soft)' }}>
                Whether you&apos;re a woman in motorsport, a brand looking to reach the fastest-growing 
                audience in racing, or someone who just loves the sport — we want to hear from you.
              </p>

              {/* What we're looking for */}
              <div className="space-y-6 mb-10">
                <div className="neu-card p-6" style={{ borderLeft: '4px solid var(--pink-deep)' }}>
                  <p className="font-heading text-lg mb-1">BRAND PARTNERSHIPS</p>
                  <p className="text-sm" style={{ color: 'var(--gray-soft)' }}>
                    Sponsored content, event sponsorship, merch collaborations, and ambassador programs. 
                    We partner with brands that share our conviction that women are not a niche in motorsport.
                  </p>
                </div>
                <div className="neu-card p-6" style={{ borderLeft: '4px solid var(--blue-soft)' }}>
                  <p className="font-heading text-lg mb-1">PRESS & MEDIA</p>
                  <p className="text-sm" style={{ color: 'var(--gray-soft)' }}>
                    Interview requests, features, and media inquiries. We&apos;re happy to talk about 
                    the women-in-motorsport movement and where the culture is headed.
                  </p>
                </div>
                <div className="neu-card p-6" style={{ borderLeft: '4px solid var(--lime-accent)' }}>
                  <p className="font-heading text-lg mb-1">COMMUNITY & COLLABORATIONS</p>
                  <p className="text-sm" style={{ color: 'var(--gray-soft)' }}>
                    Event partnerships, content collaborations, and community cross-pollination. 
                    If you&apos;re building something for women in motorsport, let&apos;s talk.
                  </p>
                </div>
              </div>

              <div>
                <p className="font-heading text-xl mb-4">FIND US ONLINE</p>
                <div className="flex gap-4">
                  {[
                    { icon: '📸', label: 'Instagram', href: 'https://instagram.com/girlswhogrid' },
                    { icon: '𝕏', label: 'X/Twitter', href: 'https://twitter.com/girlswhogrid' },
                    { icon: '🎵', label: 'TikTok', href: 'https://tiktok.com/@girlswhogrid' },
                  ].map((social, i) => (
                    <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all hover:scale-110"
                      style={{ background: 'var(--pink-light)' }}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="neu-card p-8 md:p-10">
              <p className="font-heading text-2xl mb-6">SEND US A MESSAGE</p>
              <form className="space-y-6">
                <div>
                  <label className="font-heading text-base block mb-2">NAME</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl neu-inset" placeholder="Your name" />
                </div>
                <div>
                  <label className="font-heading text-base block mb-2">EMAIL</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl neu-inset" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="font-heading text-base block mb-2">I&apos;M REACHING OUT ABOUT</label>
                  <select className="w-full px-5 py-4 rounded-xl neu-inset appearance-none">
                    <option>Select a topic</option>
                    <option>Brand Partnership / Sponsorship</option>
                    <option>Press / Media Inquiry</option>
                    <option>Community Collaboration</option>
                    <option>Content Submission</option>
                    <option>Event Partnership</option>
                    <option>General Question</option>
                    <option>Just Saying Hi 👋</option>
                  </select>
                </div>
                <div>
                  <label className="font-heading text-base block mb-2">MESSAGE</label>
                  <textarea rows={5} className="w-full px-5 py-4 rounded-xl neu-inset resize-none" 
                    placeholder="Tell us what's on your mind..." />
                </div>
                <button type="submit" className="w-full neu-button-dark py-5 text-xl">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Pitch Strip */}
      <section className="py-16" style={{ background: 'var(--charcoal)' }}>
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <p className="font-accent text-xl mb-2" style={{ color: 'var(--lime-accent)' }}>for brands</p>
          <h2 style={{ color: 'var(--white)' }}>GIRLS WHO GRID REACHES<br/>THE FASTEST-GROWING<br/>SEGMENT IN MOTORSPORT</h2>
          <p className="text-lg mt-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Women who don&apos;t just watch the race — they drive the conversation.
          </p>
        </div>
      </section>
    </main>
  )
}
