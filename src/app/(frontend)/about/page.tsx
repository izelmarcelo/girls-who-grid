import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="py-24 md:py-32 text-center" style={{ background: 'linear-gradient(180deg, var(--pink-light) 0%, var(--cream) 100%)' }}>
        <div className="container max-w-5xl mx-auto px-6">
          <p className="font-accent text-xl mb-4" style={{ color: 'var(--pink-deep)' }}>our story</p>
          <h1>WHERE WOMEN AND<br/>MOTORSPORT MEET —<br/>
            <span style={{ color: 'var(--pink-deep)' }}>UNAPOLOGETICALLY</span>
          </h1>
          <p className="font-accent text-2xl mt-6 max-w-2xl mx-auto" style={{ color: 'var(--gray-soft)' }}>
            we&apos;re not here to make motorsport &ldquo;more feminine.&rdquo; we&apos;re here to make the women who already love it more visible.
          </p>
        </div>
      </section>

      {/* Brand Manifesto */}
      <section className="py-20 md:py-28" style={{ background: 'var(--cream)' }}>
        <div className="container max-w-4xl mx-auto px-6">
          <div className="neu-card p-8 md:p-14">
            <p className="text-xl leading-relaxed mb-8">
              Motorsport has always had women in it — in the stands, in the garage, behind the wheel, 
              and behind the scenes. But the culture around the sport hasn&apos;t always reflected that.
            </p>
            <h2 className="mb-8" style={{ color: 'var(--pink-deep)' }}>GIRLS WHO GRID<br/>EXISTS TO CHANGE<br/>THE FRAME.</h2>
            <p className="text-lg leading-relaxed mb-6">
              We&apos;re not here to make motorsport &ldquo;more feminine.&rdquo; We&apos;re here to make the women who 
              already love it more visible. From the fan who plans her entire year around the race calendar 
              to the engineer optimizing downforce packages, from the content creator documenting her first 
              paddock experience to the sim racer grinding leaderboards at midnight — Girls Who Grid is 
              where these women find each other.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Our platform combines culturally sharp content with genuine community. We cover the races, 
              spotlight the women shaping the sport, and create spaces — digital and physical — where female 
              motorsport enthusiasts can connect, learn, and belong.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              We partner with brands that share our conviction that women are not a niche audience in 
              motorsport — they are the fastest-growing one.
            </p>
            <p className="font-accent text-3xl mt-8" style={{ color: 'var(--pink-deep)' }}>
              Girls Who Grid. On the grid. In the game.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Essence */}
      <section className="py-20 md:py-28" style={{ background: 'var(--pink-light)' }}>
        <div className="container max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="font-accent text-xl mb-4" style={{ color: 'var(--pink-deep)' }}>our essence</p>
              <h2>THE NAME<br/>SAYS IT ALL</h2>
              <p className="text-lg leading-relaxed mt-6">
                &ldquo;Grid&rdquo; references the starting grid in motorsport while simultaneously evoking 
                structure, organization, and intentionality — women who show up prepared, positioned, 
                and ready to compete.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <p className="font-heading text-xl" style={{ color: 'var(--pink-deep)' }}>MISSION</p>
                <p className="text-lg mt-2">
                  To build the most engaged, visible, and empowered community of women in motorsport — 
                  from the grandstands to the garage.
                </p>
              </div>
              <div>
                <p className="font-heading text-xl" style={{ color: 'var(--pink-deep)' }}>VISION</p>
                <p className="text-lg mt-2">
                  A world where women don&apos;t just watch the race — they shape the culture around it.
                </p>
              </div>
              <div>
                <p className="font-heading text-xl" style={{ color: 'var(--pink-deep)' }}>VOICE</p>
                <p className="text-lg mt-2">
                  Your smartest friend at the track — passionate, opinionated, knowledgeable, and never 
                  condescending. Confident without being aggressive. Fun without being frivolous. 
                  Motorsport-native.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Blue Section */}
      <section className="py-20 md:py-28" style={{ background: 'var(--blue-soft)' }}>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-accent text-xl mb-2">what drives us</p>
            <h2>WHAT WE<br/>STAND FOR</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Visibility', desc: 'Women in motorsport deserve to be seen, heard, and centered in the conversation. Not as a sidebar. Not as a novelty. As the force they\'ve always been.' },
              { num: '02', title: 'Community', desc: 'Fandom is better together. GWG creates belonging for women who\'ve felt like outsiders in racing culture — because that ends now.' },
              { num: '03', title: 'Authenticity', desc: 'Real passion over performative engagement. We speak the language of the paddock, not the press release.' },
              { num: '04', title: 'Ambition', desc: 'We celebrate women who are doing the work — whether that\'s building a career in motorsport or showing up race weekend after race weekend.' },
              { num: '05', title: 'Bold Expression', desc: 'The brand is visually striking and culturally unapologetic. We don\'t soften motorsport for women; we make space for women in motorsport as it is.' },
            ].map((value, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.5)' }}>
                <span className="font-heading text-4xl" style={{ color: 'var(--pink-deep)' }}>{value.num}</span>
                <h3 className="text-2xl mt-2 mb-3">{value.title}</h3>
                <p style={{ color: 'var(--gray-soft)' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 md:py-28" style={{ background: 'var(--cream)' }}>
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-accent text-xl mb-2" style={{ color: 'var(--pink-deep)' }}>who we serve</p>
            <h2>OUR COMMUNITY</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'The Passionate Fan', 
                desc: 'Women ages 18–34 who actively follow motorsport — F1, IndyCar, NASCAR, MotoGP, WEC, and beyond. They watch races, follow drivers, attend events, and are looking for a community that reflects their identity.',
                icon: '🏁'
              },
              { 
                title: 'The Aspiring Professional', 
                desc: 'Women ages 20–40 who work in or are breaking into motorsport-adjacent careers: engineering, media, marketing, team operations, driving, sim racing, content creation. They want visibility, networking, and mentorship.',
                icon: '🔧'
              },
              { 
                title: 'The Culture-Curious', 
                desc: 'Women ages 22–38 drawn to motorsport aesthetics and culture — the fashion, the lifestyle, the energy. They\'re a gateway audience who may deepen into hardcore fandom over time.',
                icon: '✨'
              },
            ].map((segment, i) => (
              <div key={i} className="neu-card p-8 text-center">
                <span className="text-5xl block mb-4">{segment.icon}</span>
                <h3 className="text-2xl mb-4">{segment.title}</h3>
                <p style={{ color: 'var(--gray-soft)' }}>{segment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-28" style={{ background: 'var(--pink-light)' }}>
        <div className="container max-w-4xl mx-auto px-6">
          <div className="neu-card p-8 md:p-12 flex flex-col md:flex-row items-center gap-8" style={{ background: 'var(--cream)' }}>
            <div className="w-32 h-32 rounded-full flex items-center justify-center text-6xl flex-shrink-0" 
              style={{ background: 'var(--pink-light)' }}>
              👋
            </div>
            <div>
              <p className="font-accent text-xl mb-2" style={{ color: 'var(--pink-deep)' }}>meet the founder</p>
              <h3 className="text-3xl mb-4">THE WOMAN BEHIND THE GRID</h3>
              <p className="text-lg leading-relaxed">
                More than just a motorsport fan — a builder, a believer, and someone who refuses 
                to accept that women in racing should be the exception rather than the rule. 
                Girls Who Grid started as an Instagram presence and is now becoming the platform 
                this community has always deserved.
              </p>
              <p className="font-accent text-lg mt-4" style={{ color: 'var(--gray-soft)' }}>
                Full founder story and team profiles coming soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Position - Lime Section */}
      <section className="py-20 md:py-28" style={{ background: 'var(--lime-accent)' }}>
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <p className="font-accent text-xl mb-4">the opportunity</p>
          <h2>NO ONE ELSE IS<br/>DOING THIS</h2>
          <p className="text-lg mt-6 mb-8 max-w-3xl mx-auto">
            The women-in-motorsport space is growing rapidly but remains underserved by brands that speak 
            to modern female fans with an authentic, community-first voice. No existing brand combines 
            social-first content, authentic motorsport credibility, lifestyle appeal, and accessible 
            community in a single platform. Girls Who Grid owns that space.
          </p>
        </div>
      </section>

      {/* Press & Partnerships CTA */}
      <section className="py-20 md:py-28" style={{ background: 'linear-gradient(135deg, var(--pink-primary) 0%, var(--pink-deep) 100%)' }}>
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <h2 style={{ color: 'var(--white)' }}>PRESS &<br/>PARTNERSHIPS</h2>
          <p className="text-lg mt-4 mb-4" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Interested in featuring Girls Who Grid or exploring partnership opportunities? 
            We&apos;d love to hear from you.
          </p>
          <p className="font-accent text-xl mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Downloadable press kit coming soon.
          </p>
          <Link href="/contact" className="neu-button-dark inline-block px-10 py-5 text-xl">
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
