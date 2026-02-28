# Girls Who Grid — Website Design Specification
## Brand Direction
**Motorsport x Feminine x Craft x Neumorphic**
The visual identity: **more pink and crafty, slightly professional**. Think: a premium craft studio that loves racing. Not a racing site painted pink — a thoughtfully designed platform where craft meets motorsport culture.
### Neumorphic Design Language
- Soft, raised card elements with subtle inner/outer shadows
- "Pressed" buttons with inset shadow on hover/active
- Rounded corners (12-16px radius)
- Frosted glass effects on overlays
- Soft gradients rather than flat colors
- Ties into "crafty" nature — elements feel embossed/debossed on paper
## Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| --pink-primary | #FFAFCC | Primary brand, CTAs, highlights |
| --pink-light | #FFC8DD | Card backgrounds, soft fills |
| --pink-deep | #FF6B9D | Hover states, active, emphasis |
| --pink-bg | #FFF0F5 | Page background |
| --cream | #FFF8F0 | Alternate section backgrounds |
| --lime-accent | #CCFF33 | Accent pops, badges (sparingly) |
| --blue-soft | #BDE0FE | Info elements |
| --blue-light | #A2D2FF | Links, tertiary |
| --charcoal | #2B2B2B | Primary text |
| --gray-soft | #6B7280 | Secondary text |
| --white | #FFFFFF | Card surfaces |
### Neumorphic CSS
```css
.neu-card {
  background: #FFF0F5;
  border-radius: 16px;
  box-shadow: 8px 8px 16px rgba(209,175,188,0.4), -8px -8px 16px rgba(255,255,255,0.8);
}
.neu-inset {
  background: #FFF0F5;
  border-radius: 12px;
  box-shadow: inset 4px 4px 8px rgba(209,175,188,0.4), inset -4px -4px 8px rgba(255,255,255,0.8);
}
.neu-button {
  background: #FFAFCC;
  border-radius: 12px;
  box-shadow: 4px 4px 8px rgba(209,175,188,0.5), -4px -4px 8px rgba(255,255,255,0.7);
  transition: all 0.2s ease;
}
.neu-button:hover {
  box-shadow: inset 2px 2px 4px rgba(209,175,188,0.5), inset -2px -2px 4px rgba(255,255,255,0.7);
}
```
## Typography
| Role | Font | Weight | Size |
|------|------|--------|------|
| H1 Hero | Outfit | 800 | 56-72px |
| H2 Section | Outfit | 700 | 36-48px |
| H3 Card | Outfit | 600 | 24-28px |
| Body | DM Sans | 400/500 | 16-18px |
| Caption | DM Sans | 400 | 14px |
| Accent/Data | JetBrains Mono | 400 | 14px |
Google Fonts: `Outfit:wght@400;600;700;800`, `DM+Sans:wght@400;500;700`, `JetBrains+Mono:wght@400`
## Logo
Copy from `/tmp/gwg-brand/girls-who-grid-logo.png` to `public/logo.png` and `public/brand/`
Also copy `branding-04.png` and `branding-05.png` to `public/brand/`
## Pages
### 1. HOMEPAGE (sections top to bottom)
**Hero** — 90vh, animated gradient bg (pink-light→cream→pink-bg), GWG logo floating with neumorphic shadow, headline "She's Already On The Grid." (Outfit 800, 64px), subheadline "The community and content platform for women who live and breathe motorsport.", two neumorphic buttons, subtle checkered flag CSS texture, the lime generative line-art from branding-05.png positioned decoratively
**Mission Strip** — neumorphic inset band, quote: "From the grandstands to the garage, we're amplifying the women who show up on the grid — every race, every series, every day." with lime highlights on key words
**Featured Content** — "Latest from the Grid", 3 neumorphic blog cards (image, category badge in lime, title, excerpt, read time), hover lift animation, "View All Posts →"
**Community Proof** — "On the Grid", stats in neumorphic inset circles (15K+ Community, 50+ Races Covered, 100+ Women Featured), testimonial quote cards below
**Newsletter CTA** — full-width pink-primary gradient, "Get the Starting Grid", email input (neumorphic inset) + submit button, "Join 5,000+ women in motorsport"
**Footer** — 4-col on charcoal: logo+desc, quick links, community links, social icons. Warm, not corporate.
### 2. ABOUT
Hero: "Where Women and Motorsport Meet — Unapologetically."
Brand story, 5 neumorphic value cards (Visibility, Community, Authenticity, Ambition, Bold Expression), Team/Founder section, Press kit CTA
### 3. BLOG
Category filter tabs, neumorphic post cards grid, individual post reading experience
### 4. CONTACT
Two-column: left (headline + copy + socials), right (neumorphic form inputs). Craft paper texture bg.
### 5. SHOP (placeholder)
"Coming Soon" with newsletter signup
## Sample Blog Posts to Seed (3)
1. "Your First Race Weekend: The Ultimate Guide for Women in Motorsport"
2. "10 Women Shaping the Future of Racing in 2026"
3. "Race Day Style: What to Wear When You're Trackside"
## Quality Checklist
- Homepage loads with all sections and neumorphic styling
- Typography: Outfit headings, DM Sans body, JetBrains Mono accents
- Colors match spec exactly
- Mobile responsive (375px)
- Nav + Footer on all pages
- Blog posts render
- About page complete
- Contact form renders
- No console errors
- Favicon = GWG logo
- Smooth animations (fade-in on scroll, hover lift, button press)
- Accessible: heading hierarchy, alt text, contrast
