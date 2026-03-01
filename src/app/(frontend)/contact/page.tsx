import React from 'react'

export default function ContactPage() {
  return (
    <main className="flex-1" style={{ background: 'var(--cream)' }}>
      <section className="py-20 md:py-28">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <p className="font-accent text-xl mb-2" style={{ color: 'var(--pink-deep)' }}>get in touch</p>
              <h1 className="mb-6">LET&apos;S<br/>CONNECT</h1>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--gray-soft)' }}>
                Whether you&apos;re a woman in motorsport, a brand looking to partner, 
                or just someone who loves racing — we want to hear from you.
              </p>

              <div className="neu-card p-6 mb-8">
                <p className="font-heading text-xl mb-2">OUR MISSION</p>
                <p className="font-accent text-lg" style={{ color: 'var(--gray-soft)' }}>
                  From the grandstands to the garage, we&apos;re amplifying the women who show up 
                  on the grid — every race, every series, every day.
                </p>
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
                      className="w-14 h-14 rounded-full flex items-center justify-center text-xl transition-colors"
                      style={{ background: 'var(--pink-light)' }}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="neu-card p-8 md:p-10">
              <form className="space-y-6">
                <div>
                  <label className="font-heading text-lg block mb-2">NAME</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl neu-inset" placeholder="Your name" />
                </div>
                <div>
                  <label className="font-heading text-lg block mb-2">EMAIL</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl neu-inset" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="font-heading text-lg block mb-2">SUBJECT</label>
                  <select className="w-full px-5 py-4 rounded-xl neu-inset appearance-none">
                    <option>Select a topic</option>
                    <option>Brand Partnership</option>
                    <option>Community</option>
                    <option>Press Inquiry</option>
                    <option>General Question</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-heading text-lg block mb-2">MESSAGE</label>
                  <textarea rows={5} className="w-full px-5 py-4 rounded-xl neu-inset resize-none" placeholder="Tell us what's on your mind..." />
                </div>
                <button type="submit" className="w-full neu-button-dark py-5 text-xl">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
