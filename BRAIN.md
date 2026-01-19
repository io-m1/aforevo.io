BRAIN.md — Murphy Ben International (MBI) Website Rebuild
Living Architecture & Decision Document

Last Updated: 2026-01-19
Project Status: Phase 0 - Research & Planning
Version: 0.1.0

---

VISION & GOALS

Primary Mission
Rebuild https://mbi247.com/ as a production-grade, modern Next.js 14+ website that:
- Decisively surpasses the current outdated static site
- Reflects 2026 industry standards: fast, mobile-first, immersive, content-rich
- Outperforms competitors: Showmax, IROKOtv, AfroLandTV, Demand Africa, Netflix Africa
- Strategically migrates and enhances all existing content while preserving brand authority

Success Metrics
- Performance: Lighthouse score >95, Core Web Vitals in green
- SEO: Top 3 rankings for "Nollywood streaming", "Afrobeatz radio", "African content aggregator"
- Mobile: <3s load time on 3G, perfect mobile UX score
- Engagement: 40%+ reduction in bounce rate vs. current site
- Conversion: Clear CTAs for each service vertical with measurable actions

Strategic Positioning
Murphy Ben International (MBI) claims to be Africa's largest content aggregator and media powerhouse. The new site must:
1. Validate this claim visually through scale indicators (content volume, reach metrics, partner logos)
2. Showcase breadth across all verticals: Nollywood, Afrobeatz, dubbing, production, distribution, radio (Vybz FM), streaming (Aforevo, Revo+), talent management
3. Build trust through professional design, case studies, and authoritative content
4. Drive action with clear service inquiries, demo requests, and partnership CTAs

---

COMPETITIVE ANALYSIS

African Streaming Leaders (Research Findings)

Showmax (Market Leader - 39% share, 2.1M subscribers)
Winning Patterns:
- Local content focus: 7-9 of top 10 shows are homegrown
- Regional offices (SA, Nigeria, Kenya, Ghana) for cultural understanding
- HBO exclusive licensing for premium positioning
- DStv integration for distribution leverage
- 2 concurrent streams + 25 mobile downloads
- Flexible payment for unbanked users

Design Takeaways:
- Hero carousels featuring local productions prominently
- Regional content hubs with localized navigation
- Download/offline viewing as key feature
- Partnership logos for credibility

IROKOtv (Nollywood Pioneer, 2011)
Winning Patterns:
- Exclusive Nollywood focus (world's largest legal distributor)
- Early mover advantage in West Africa VOD
- Mobile-first from inception

Design Takeaways:
- Genre-based content discovery for Nollywood
- Mobile payment integration (M-Pesa, etc.)
- Simple, fast interfaces for low-bandwidth markets

AfroLandTV (Pan-African Startup)
Winning Patterns:
- Pan-African scope (not just Nollywood): African, African-American, Black European, Caribbean, Afro-Latino
- Strict content vetting (avoiding stereotypical poverty/war narratives)
- Positive cultural representation focus

Design Takeaways:
- Multi-region content categorization
- Curated collections with editorial voice
- Cultural pride messaging in copy

Demand Africa (Lifestyle & Entertainment)
Winning Patterns:
- Lifestyle + travel + entertainment blend
- Worldwide accessibility
- Multi-platform presence

Design Takeaways:
- Lifestyle-first visual language
- Travel-inspired imagery and layouts
- Cross-platform consistency

Global Media Site Patterns (Netflix, Hulu, Twitch Marketing)

Common Excellence Patterns:
- Hero Video Carousels: Auto-playing trailers with subtle audio fade-in
- Immersive Scrolling: Parallax, fade-ins, content reveals on scroll
- Content Grids: Responsive card layouts with hover previews
- Embedded Trailers: YouTube/Vimeo embeds with custom players
- Talent Showcases: Team/artist profiles with headshots and bios
- Fast Channels: Live streaming indicators and schedules
- Multilingual Toggles: Language switchers in header
- Trust Signals: Partner logos, awards, metrics (subscribers, views, countries)
- Dark Mode Preference: Entertainment sites favor dark themes for video focus
- Minimal Chrome: Let content breathe, reduce UI clutter

Key Differentiators for MBI

What MBI Must Do Better:
1. Aggregator Positioning: Unlike single-vertical competitors, showcase the full ecosystem (production → distribution → streaming → radio → talent)
2. B2B + B2C Hybrid: Serve both consumers (streaming) and industry partners (dubbing, distribution services)
3. Pan-African Authority: Emphasize continental reach and multilingual capabilities
4. Innovation Narrative: Highlight tech stack, AI dubbing, multi-platform distribution as competitive advantages

---

CONTENT MIGRATION STRATEGY

Source Analysis: Current mbi247.com

Current Site Structure (Static HTML):
- Single-page layout with text-heavy sections
- No visuals, no interactivity, poor UX
- Sections identified:
  - Hero/Intro
  - About MBI
  - Services (multiple verticals)
  - Brands (Aforevo, Revo+, Vybz FM, etc.)
  - Contact/Footer

Content Extraction Plan:

Phase 1: Text Migration (Preserve & Enhance)
| Old Section   | New Component         | Enhancement Strategy                          |
|---------------|-----------------------|-----------------------------------------------|
| Hero text     | HeroSection.tsx       | Add video background, animated stats, CTA buttons |
| About MBI     | AboutSection.tsx      | Add timeline, team photos, mission/vision cards |
| Services list | ServicesGrid.tsx      | Icon cards, hover effects, modal details      |
| Brands        | BrandsShowcase.tsx    | Logo carousel, individual brand pages         |
| Contact       | ContactSection.tsx    | Interactive form, map embed, social links     |

Phase 2: Content Enhancement Layers
1. Visual Assets (to be generated via ImageCreator):
   - Hero video/image: African entertainment montage
   - Service icons: Custom icons for each vertical
   - Brand logos: High-res versions of Aforevo, Revo+, Vybz FM
   - Team photos: Placeholder professional headshots
   - Background textures: Afrocentric patterns, gradients

2. SEO-Rich Rewrites:
   - Original tone: Authoritative, corporate, claims-heavy
   - Enhanced copy: Keep authority, add emotion, storytelling, data points
   - Keyword integration: "Nollywood streaming", "Afrobeatz radio", "African dubbing services", "content aggregator Africa"

3. Interactive Elements:
   - Embedded video players (YouTube/Vimeo)
   - Audio players for Vybz FM samples
   - Image galleries for productions
   - Testimonial carousels
   - Live streaming indicators

Phase 3: Content Storage Structure
```
/content/
  ├── about/
  │   ├── mission.md
  │   ├── history.md
  │   └── team.json
  ├── services/
  │   ├── nollywood.md
  │   ├── afrobeatz.md
  │   ├── dubbing.md
  │   ├── production.md
  │   ├── distribution.md
  │   ├── radio.md
  │   ├── streaming.md
  │   └── talent-management.md
  ├── brands/
  │   ├── aforevo.md
  │   ├── revo-plus.md
  │   └── vybz-fm.md
  └── metadata/
      └── seo-defaults.json
```

Content Migration Checklist:
- [ ] Extract all text from current site
- [ ] Identify key claims and metrics to preserve
- [ ] Rewrite copy with SEO keywords (keep original tone)
- [ ] Create markdown files for each section
- [ ] Define JSON schemas for structured data
- [ ] Generate placeholder image requirements list
- [ ] Map old URLs to new routes (if applicable)

---

SEO STRATEGY

Target Keywords (Primary)
1. Nollywood streaming (High volume, high intent)
2. Afrobeatz radio online (Medium volume, niche)
3. African content aggregator (Low volume, B2B)
4. African dubbing services (Low volume, B2B)
5. Murphy Ben International (Brand)
6. Aforevo streaming (Brand)
7. Vybz FM live (Brand)

Target Keywords (Secondary)
- African entertainment platform
- Nollywood movies online
- African music streaming
- Content distribution Africa
- Talent management Africa
- Revo+ streaming service

Technical SEO Implementation

1. Metadata Strategy (Next.js 14 Metadata API)
```typescript
// Every page exports generateMetadata or static metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://mbi247.com'),
  title: 'Page Title | Murphy Ben International',
  description: 'SEO-optimized description with keywords',
  keywords: ['keyword1', 'keyword2'],
  alternates: {
    canonical: '/current-page',
    languages: {
      'en': '/en/page',
      'fr': '/fr/page', // Future multilingual
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Murphy Ben International',
    title: 'OG Title',
    description: 'OG Description',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Title',
    description: 'Twitter Description',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

2. Rendering Strategy by Page Type
| Page Type      | Strategy              | Rationale                          |
|----------------|-----------------------|------------------------------------|
| Homepage       | SSG                   | Static, high traffic, rarely changes |
| About          | SSG                   | Static content                     |
| Services pages | SSG with ISR (revalidate: 3600) | Periodic updates                |
| Brands pages   | SSG with ISR          | Periodic updates                   |
| Blog (future)  | ISR                   | Fresh content, SEO-critical        |
| Contact        | SSR                   | Form handling, dynamic             |

3. Structured Data (JSON-LD)
- Organization schema (homepage)
- BreadcrumbList (all pages)
- VideoObject (embedded trailers)
- Service schema (service pages)
- LocalBusiness (if physical offices)

4. Performance Optimization (Core Web Vitals)
- LCP (Largest Contentful Paint): <2.5s
  - Optimize hero images with next/image
  - Preload critical assets
  - Use priority prop for above-fold images
- FID (First Input Delay): <100ms
  - Minimize JavaScript
  - Code splitting with dynamic imports
  - Server Components by default
- CLS (Cumulative Layout Shift): <0.1
  - Define image dimensions
  - Reserve space for embeds
  - Avoid layout shifts on load

5. Sitemap & Robots
```xml
<!-- sitemap.xml (dynamic generation) -->
<urlset>
  <url>
    <loc>https://mbi247.com/</loc>
    <lastmod>2026-01-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Auto-generate from content files -->
</urlset>
```

```
# robots.txt
User-agent: *
Allow: /
Sitemap: https://mbi247.com/sitemap.xml
```

6. Multilingual Hints (Future-Proof)
- English (primary)
- French (West Africa)
- Portuguese (Angola, Mozambique)
- Swahili (East Africa)
- Implement with next-intl or similar

---

ARCHITECTURE DECISIONS

Tech Stack Rationale

Framework: Next.js 14+ (App Router)
Why:
- Server Components by default (better SEO, performance)
- Streaming and Suspense for progressive rendering
- Built-in Metadata API (no next-seo needed)
- Image optimization out of the box
- Vercel deployment optimization
- ISR for content freshness without full rebuilds

Alternatives Considered:
- Remix: Less mature ecosystem
- Gatsby: Slower builds, less flexible
- Astro: Not ideal for interactive features

Language: TypeScript (Strict)
Why:
- Type safety prevents runtime errors
- Better IDE support and refactoring
- Self-documenting code
- Industry standard for production apps

Styling: Tailwind CSS + Headless UI
Why:
- Utility-first for rapid development
- Excellent mobile-first responsive design
- Small bundle size with purging
- Headless UI for accessible components
- Easy dark mode support

Alternatives Considered:
- Styled Components: Runtime overhead
- CSS Modules: Less flexible
- Chakra UI: Heavier bundle

Content Management: Static → CMS-Ready
Phase 1: Markdown/JSON in `/content/`
- Fast to implement
- Version controlled
- No external dependencies

Phase 2 (Future): Sanity.io or Contentful
- Non-technical staff can update
- Rich media management
- Preview mode
- Webhooks for ISR

Animation: Framer Motion
Why:
- Declarative API
- Performance optimized
- Gesture support
- Spring physics for natural motion

Usage Guidelines:
- Subtle, purposeful animations only
- No animations that hurt Core Web Vitals
- Respect prefers-reduced-motion

Folder Structure (Final)

```
mbi247-nextjs/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (metadata, fonts, providers)
│   ├── page.tsx                  # Homepage
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx              # Services overview
│   │   ├── nollywood/
│   │   ├── afrobeatz/
│   │   ├── dubbing/
│   │   ├── production/
│   │   ├── distribution/
│   │   ├── radio/
│   │   ├── streaming/
│   │   └── talent-management/
│   ├── brands/
│   │   ├── page.tsx
│   │   ├── aforevo/
│   │   ├── revo-plus/
│   │   └── vybz-fm/
│   ├── contact/
│   │   └── page.tsx
│   ├── sitemap.ts                # Dynamic sitemap generation
│   ├── robots.ts                 # Dynamic robots.txt
│   ├── opengraph-image.tsx       # OG image generation
│   └── not-found.tsx             # 404 page
├── components/                   # Reusable UI components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── BrandsShowcase.tsx
│   │   ├── StatsSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── VideoEmbed.tsx
│   │   ├── ImageGallery.tsx
│   │   └── Carousel.tsx
│   └── shared/
│       ├── SEO.tsx               # SEO utilities
│       └── StructuredData.tsx
├── content/                      # Static content (MD/JSON)
│   ├── about/
│   ├── services/
│   ├── brands/
│   └── metadata/
├── lib/                          # Utilities and helpers
│   ├── content.ts                # Content loading utilities
│   ├── seo.ts                    # SEO helpers
│   ├── constants.ts              # Site-wide constants
│   └── utils.ts                  # General utilities
├── public/                       # Static assets
│   ├── images/
│   │   ├── logos/
│   │   ├── brands/
│   │   └── og/
│   ├── videos/
│   └── fonts/
├── styles/
│   └── globals.css               # Tailwind directives + custom styles
├── types/                        # TypeScript types
│   ├── content.ts
│   └── metadata.ts
├── tests/                        # Vitest + React Testing Library
│   ├── components/
│   └── pages/
├── BRAIN.md                      # This file
├── README.md                     # Project documentation
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json
└── .env.local                    # Environment variables
```

---

DESIGN PRINCIPLES

Visual Language
- Dark Mode First: Entertainment content pops on dark backgrounds
- Bold Typography: Large headings, clear hierarchy
- Vibrant Accents: African-inspired colors (gold, red, green) for CTAs
- High-Quality Imagery: Professional photos, no stock clichés
- Video-Centric: Trailers and clips as primary content showcase
- Whitespace: Let content breathe, avoid clutter

Color Palette (Proposed)
```css
/* Primary */
--primary-bg: #0A0A0A;           /* Deep black */
--primary-text: #FFFFFF;         /* White */
--primary-accent: #E63946;       /* Vibrant red (African sunset) */

/* Secondary */
--secondary-bg: #1A1A1A;         /* Charcoal */
--secondary-text: #B0B0B0;       /* Light gray */
--secondary-accent: #FFD700;     /* Gold (premium) */

/* Tertiary */
--tertiary-accent: #2A9D8F;      /* Teal (modern) */
--success: #06D6A0;              /* Green */
--warning: #F4A261;              /* Orange */
--error: #E63946;                /* Red */
```

Typography
- Headings: Inter (bold, modern, clean)
- Body: Inter (regular, excellent readability)
- Accent: Bebas Neue (for hero titles, impactful)

Component Patterns
- Hero: Full-viewport video background with overlay text + CTA
- Services: Icon cards in responsive grid (3 cols desktop, 2 tablet, 1 mobile)
- Brands: Logo carousel with hover zoom
- Stats: Animated counters with icons
- Testimonials: Card carousel with quotes
- Contact: Split layout (form + map/info)

Animation Guidelines
- Scroll Reveals: Fade-in + slide-up on scroll (Intersection Observer)
- Hover Effects: Subtle scale (1.05), shadow, color shifts
- Page Transitions: Smooth fade between routes
- Loading States: Skeleton screens, not spinners
- Micro-interactions: Button press feedback, form validation

---

FEATURE ROADMAP & PRIORITIZATION

Phase 0: Research & Planning (Current)
- [x] Competitive analysis
- [x] Content migration strategy
- [x] SEO strategy
- [x] Architecture decisions
- [x] BRAIN.md creation

Phase 1: Foundation (Week 1)
- [ ] Initialize Next.js 14 project with TypeScript
- [ ] Configure Tailwind CSS + Headless UI
- [ ] Set up folder structure
- [ ] Install dependencies (Framer Motion, etc.)
- [ ] Configure ESLint, Prettier, Husky
- [ ] Create base layout (Header, Footer)
- [ ] Implement SEO metadata utilities
- [ ] Set up environment variables

Phase 2: Content Migration (Week 1-2)
- [ ] Extract text from current mbi247.com
- [ ] Create markdown files for all sections
- [ ] Write content loading utilities
- [ ] Define TypeScript interfaces for content
- [ ] Generate image requirements list
- [ ] Create placeholder images (ImageCreator)

Phase 3: Homepage Development (Week 2)
- [ ] Hero section with video background
- [ ] About section with mission/vision
- [ ] Services grid with icons
- [ ] Brands showcase carousel
- [ ] Stats section with animated counters
- [ ] Contact section with form
- [ ] Implement scroll animations
- [ ] Mobile responsive testing

Phase 4: Service Pages (Week 3)
- [ ] Create service page template
- [ ] Nollywood page
- [ ] Afrobeatz page
- [ ] Dubbing page
- [ ] Production page
- [ ] Distribution page
- [ ] Radio (Vybz FM) page
- [ ] Streaming (Aforevo/Revo+) page
- [ ] Talent management page

Phase 5: Brand Pages (Week 3)
- [ ] Aforevo streaming page
- [ ] Revo+ page
- [ ] Vybz FM page
- [ ] Embed live players/streams

Phase 6: SEO & Performance (Week 4)
- [ ] Generate sitemap.xml
- [ ] Configure robots.txt
- [ ] Add structured data (JSON-LD)
- [ ] Optimize images (next/image)
- [ ] Implement lazy loading
- [ ] Test Core Web Vitals
- [ ] Lighthouse audit (target >95)
- [ ] Mobile performance testing (3G)

Phase 7: Polish & Testing (Week 4)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile device testing (iOS, Android)
- [ ] Accessibility audit (WCAG AA)
- [ ] Form validation and error handling
- [ ] 404 page design
- [ ] Loading states for all async operations
- [ ] Final copy review and edits

Phase 8: Deployment & Launch (Week 5)
- [ ] Set up Vercel project
- [ ] Configure custom domain (mbi247.com)
- [ ] Set up SSL certificate
- [ ] Configure environment variables
- [ ] Deploy to production
- [ ] Set up analytics (Google Analytics, Vercel Analytics)
- [ ] Monitor performance and errors
- [ ] Create launch announcement

Future Enhancements (Post-Launch)
- [ ] Integrate Sanity CMS for content management
- [ ] Add blog section for SEO content
- [ ] Implement search functionality
- [ ] Add newsletter signup
- [ ] Create admin dashboard for staff
- [ ] Multilingual support (FR, PT, SW)
- [ ] User authentication for streaming services
- [ ] Payment integration for subscriptions
- [ ] Live chat support
- [ ] A/B testing framework

---

TECHNICAL DEBT & OPTIMIZATIONS

Known Limitations (Phase 1)
1. Static Content: Using MD/JSON instead of CMS (acceptable for MVP)
2. No Authentication: Streaming services not integrated yet
3. Single Language: English only (multilingual future)
4. Manual Deployments: No CI/CD pipeline initially

Future Optimizations
1. CMS Integration: Migrate to Sanity.io for non-technical updates
2. CDN: Cloudflare for global content delivery
3. Edge Functions: Move dynamic logic to edge for lower latency
4. Database: Add PostgreSQL for user data, analytics
5. Caching Strategy: Redis for API responses
6. Monitoring: Sentry for error tracking, Datadog for performance

Performance Budget
- Initial Load: <3s on 3G
- Time to Interactive: <5s
- Bundle Size: <200KB (gzipped)
- Image Sizes: <100KB per image (WebP format)
- Lighthouse Score: >95 (all categories)

---

DECISION LOG

2026-01-19: Project Initialization
Decision: Use Next.js 14 App Router instead of Pages Router
Rationale: App Router is the future, better performance with Server Components, built-in Metadata API, streaming support
Impact: Steeper learning curve but future-proof architecture
Alternatives Considered: Pages Router (deprecated), Remix (less mature)

Decision: TypeScript strict mode
Rationale: Catch errors at compile time, better DX, self-documenting
Impact: Slightly slower initial development, much faster debugging
Alternatives Considered: JavaScript (too risky for production)

Decision: Tailwind CSS for styling
Rationale: Rapid development, excellent mobile-first, small bundle
Impact: Utility-class-heavy markup, but worth the tradeoff
Alternatives Considered: Styled Components (runtime overhead), CSS Modules (less flexible)

Decision: Static content (MD/JSON) before CMS
Rationale: Faster MVP, version controlled, no external dependencies
Impact: Manual content updates initially, but easy to migrate later
Alternatives Considered: Sanity from day 1 (overkill for MVP)

Decision: Dark mode as primary theme
Rationale: Entertainment sites favor dark themes, video content pops
Impact: Must ensure sufficient contrast for accessibility
Alternatives Considered: Light mode (less immersive for media)

---

UPGRADE PRINCIPLES (NEVER DOWNGRADE)

Core Tenets
1. Performance AND Visuals: Never sacrifice speed for aesthetics or vice versa
2. SEO AND UX: Both must improve together
3. Mobile AND Desktop: Equal priority, mobile-first approach
4. Content AND Design: Preserve original content authority while enhancing presentation
5. Accessibility AND Innovation: Cutting-edge features must be accessible

Balance Checklist (Every Feature)
Before implementing any feature, ask:
- [ ] Does this improve performance or maintain it?
- [ ] Does this enhance SEO or maintain it?
- [ ] Does this work on mobile as well as desktop?
- [ ] Does this preserve or enhance original content?
- [ ] Is this accessible to all users?
- [ ] Does this align with brand authority?

Red Flags (Immediate Review)
- Animation causing CLS or FID issues
- Images without optimization
- Client Components for static content
- Missing alt text or ARIA labels
- Hardcoded content (should be in /content/)
- Duplicate metadata across pages
- Blocking resources on critical path

---

REFERENCES & RESOURCES

Documentation
- Next.js 14 Docs (https://nextjs.org/docs)
- Tailwind CSS Docs (https://tailwindcss.com/docs)
- Framer Motion Docs (https://www.framer.com/motion/)
- TypeScript Handbook (https://www.typescriptlang.org/docs/)

Inspiration Sites
- Showmax (local content focus)
- Netflix Africa (hero patterns)
- IROKOtv (Nollywood UX)
- AfroLandTV (pan-African scope)
- Hulu marketing pages (immersive design)

SEO Tools
- Google Search Console
- Lighthouse CI
- Screaming Frog
- Ahrefs / SEMrush

Performance Tools
- WebPageTest
- Chrome DevTools
- Vercel Analytics
- Bundle Analyzer

---

NEXT STEPS

Immediate Actions (Phase 1):
1. Complete BRAIN.md (this document)
2. Extract content from current mbi247.com
3. Initialize Next.js 14 project
4. Set up folder structure
5. Create content markdown files
6. Generate placeholder images

Blockers: None currently

Questions for Stakeholder:
- Preferred contact form destination (email, CRM)?
- Existing brand assets (logos, videos) location?
- Priority service verticals for Phase 1?
- Multilingual requirement timeline?

---

END OF BRAIN.md v0.1.0
