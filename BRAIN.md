Aforevo.io — Flagship Digital Platform for Murphy Ben International (MBI)
Living Architecture, Decision Document, Non-Negotiable Brand Bible & Supreme Execution Manual

Last Updated: January 20, 2026  
Project Status: Phase 1 Complete — Core Platform Live & Stable  
Version: 1.0.0  
Deployed at: https://aforevoio.vercel.app/  
Repository: https://github.com/io-m1/aforevo.io

CORE VISION (LOCKED — NEVER DOWNGRADE)

Murphy Ben International is positioned as Africa's leading digital media & entertainment company.  
Aforevo.io is the flagship digital experience that proves this claim through:

Immersive showcase of African stories (Nollywood, Afrobeatz, interviews, trailers, documentaries)
Unapologetic display of scale and authority (subscriber counts, view metrics, channel network, global reach)
Professional, high-performance UI that reflects premium branding
Clear ecosystem presentation uniting all MBI brands (Aforevo Cinema, MBI Music, Vybz FM, etc.)

Success Metrics (Achieved & Ongoing)
Live production deployment on Vercel with excellent uptime
High Core Web Vitals performance (Next.js + Tailwind optimization)
Visible engagement drivers: trending content, top picks, live stats, network showcase
Brand authority reinforced through hard metrics (10M+ subs, 500M+ views, etc.)

NON-NEGOTIABLE BRAND INTEGRITY RULES (HARDCODED — ETERNAL)

These elements define the brand's perceived supremacy. NEVER downgrade any of them for any reason — including "upgrades," refactoring, or new features. If a proposed change risks dilution, it is automatically rejected.

1. Key Scale Metrics (Hardcoded Claims)
   10M+ combined subscribers
   500M+ monthly views
   50+ active channels
   20,000+ hours content library
   Global reach in 150+ countries
   Live network: 99.99% uptime, 10.4M+ live subs (or current real-time equivalents)
   These numbers must never be reduced. Updates may only increase them or keep them equal.

2. Messaging & Tone
   Primary tagline: "Africa's Leading Digital Media & Entertainment Company"
   Secondary: "Telling African Stories to the World"
   Tone: Authoritative, proud, celebratory, achievement-focused ("#1 Trending", "Legends in the Making")
   Never soften, genericize, or make apologetic. Always amplify African excellence.

3. Visual & Experience Standards
   Current design sophistication (layout density, typography, spacing, card styles, animations)
   Immersive content focus (video thumbnails, carousels, grids)
   Professional polish (no cheap effects, no clutter)
   Any visual refresh must match or exceed current perceived premium quality.

4. Performance Baseline
   Lighthouse score target >95
   Fast LCP, FID, CLS (green Core Web Vitals)
   Never accept regressions for new features.

5. Content Presentation
   Prominent sections: Trending, Top Picks, Network Giants, Live Network, Ecosystem
   These must remain visible and celebrated on homepage.

Rule Enforcement: Before any PR, ask: "Does this enhance or preserve brand authority?" If ambiguous → reject.

CURRENT IMPLEMENTATION SUMMARY

Built on the Precedent Next.js starter template — opinionated, performant, and production-ready.

Tech Stack (Locked — Proven & Optimal)
Framework: Next.js 14+ (App Router, Server Components default)
Language: TypeScript (strict mode)
Styling: Tailwind CSS + Radix primitives
Animations: Framer Motion (subtle only)
Icons: Lucide
Utilities: Custom hooks (useIntersectionObserver, useScroll, etc.)
CMS: Sanity.io (for dynamic content such as alerts, live flashes, and real-time metrics)
Deployment: Vercel (optimized)
Auth (prepared): Clerk integration ready

Folder Structure (Current — Stable)
/                   Root
├── app/            App Router pages & layouts
├── components/     Reusable UI components
├── content/        Static content (markdown/JSON for sections)
├── lib/            Utilities, hooks, data fetching
├── public/         Static assets (images, favicons)
├── types/          Shared TypeScript types
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json

Key Implemented Features (Homepage — Live)
Hero introduction for MBI positioning
Trending content carousel ("Adakirikiri", etc.)
"Top Picks For You" video grid (trailers, interviews, documentaries)
"MBI Network Giants" channel showcase with subscriber/watchtime stats
"The Live Network" real-time metrics panel
"Our Ecosystem" brand highlights (Aforevo Cinema, MBI Music, etc.)
Explore CTAs and library links

Content is currently driven from /content/ or /lib/ data files — version-controlled and performant. Dynamic elements may pull from Sanity CMS.

ARCHITECTURE PRINCIPLES (LOCKED)
Server Components first → maximum performance & SEO
Static/ISR rendering where possible
Tailwind utility classes only → no custom CSS bloat
TypeScript everywhere → no any, full type coverage
Composition over inheritance
Small, single-purpose components
No heavy external dependencies that hurt bundle size

SEO & PERFORMANCE (CURRENT BASELINE)
Next.js Metadata API used throughout
Optimized images via next/image
Fast static generation for homepage
OpenGraph & Twitter cards configured
Robots.txt and sitemap present

Target: Maintain top rankings for brand terms and "African entertainment" keywords.

DEVELOPER EXECUTION MANUAL (SUBORDINATE — ENFORCES THE BIBLE)

Status
Subordinate Execution Doctrine — NON-AUTHORITATIVE

Governing Law
This execution section exists solely to implement, execute, and operationalize the decisions defined in the sections above.

In any case of ambiguity, conflict, or perceived improvement:

THE BRAND BIBLE SECTIONS ABOVE WIN. NO EXCEPTIONS.

Purpose
This section translates the locked brand, architectural, performance, and perception mandates into developer-safe, production-ready execution steps.

It does not define vision, tone, metrics, or positioning.
It does not reinterpret brand authority.
It does not introduce alternatives.

Its only function is correct implementation.

Execution Principles (MANDATORY)
1. Preserve Supremacy  
   Every task must preserve or amplify perceived scale, authority, and dominance.

2. No Silent Downgrades  
   Any change that risks performance, density, motion quality, or metric perception is rejected.

3. Server-First Always  
   Static or Server Components by default. Client Components only where interaction is impossible otherwise.

4. Performance Is Non-Negotiable  
   Lighthouse >95. Core Web Vitals green. No regressions tolerated.

5. Content Is Sacred  
   Existing authoritative content is preserved, enhanced, never softened.

Locked Technical Stack (IMPLEMENT — DO NOT DEBATE)
Framework: Next.js 14+ (App Router)
Language: TypeScript (strict)
Styling: Tailwind CSS only
Rendering: SSG / ISR / SSR as defined by use case
Images: next/image only
Deployment: Vercel
Animations: Framer Motion (subtle, purposeful)
CMS: Sanity.io (for dynamic content such as alerts, live flashes, and real-time metrics)

No framework swaps. No styling abstractions. No CSS frameworks. No SPA patterns.

Content Execution Rules
All copy must originate from existing MBI properties (mbi247.com, Aforevo channels, network brands)
Enhancements may add clarity, SEO density, or emotional power — never dilution
Metrics displayed must meet or exceed the locked minimums above
Dynamic content (alerts, live flashes, real-time metrics) may be sourced from Sanity CMS while preserving static supremacy anchors.

Suggested content locations (migrate progressively):
/content/
  ├── hero/
  ├── trending/
  ├── network/
  ├── ecosystem/
  ├── stats/

Hardcoding is permitted only for supremacy anchors (metrics, claims).

Homepage Execution Checklist
MANDATORY SECTIONS (VISIBLE ABOVE THE FOLD OR WITHIN FIRST SCROLL):
Hero (cinematic, dominant, video-forward)
Live / Trending Content
Network Giants (channel dominance)
Live Metrics / Stats Strip
Ecosystem Overview

If any section is removed, reduced, or deprioritized → REJECT CHANGE.

SEO Implementation
Next.js Metadata API only
Unique metadata per route
Structured Data:
  Organization
  VideoObject
  Brand / Network schemas

SEO exists to amplify dominance, not chase keywords.

Performance Enforcement
No blocking scripts above the fold
All media dimensioned
Motion respects prefers-reduced-motion
Bundle size monitored continuously

Performance regressions block merges.

PR Enforcement Checklist (REQUIRED)
Every PR must answer YES to all:
Does this preserve or increase brand authority?
Does this maintain or improve performance?
Does this preserve density and cinematic feel?
Does this avoid visual or metric dilution?
Does this align with the Brand Bible sections above?

If any answer is uncertain → PR rejected.

Final Enforcement Clause
This entire document is the single source of truth.

Execution sections may evolve only to improve implementation clarity.

They may never:
Redefine brand tone
Reduce metrics
Introduce alternative architectures
Conflict with the locked vision above

FUTURE ROADMAP (ENHANCEMENTS ONLY — NO DOWNGRADES)
1. Dynamic content loading (API integration for real videos)
2. User authentication & personalized picks
3. Expanded brand sub-pages (dedicated Aforevo, Vybz FM sections)
4. Multilingual support (French, Portuguese, Swahili)
5. Full streaming integration
6. Potential domain migration (mbi247.com → canonical)

All future work must respect the Non-Negotiable Brand Integrity Rules above.

Aforevo.io is the empire.  
This document is the supreme manual.

