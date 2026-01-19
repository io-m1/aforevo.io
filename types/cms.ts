/**
 * Purpose: Defines strict interfaces for content objects.
 * Used by: lib/content.ts, components, app pages
 */

export interface HeroData {
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string; // SEO-rich description
  icon?: string;
  link: string;
}

export interface HomePageContent {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: HeroData;
  services: {
    heading: string;
    items: ServiceItem[];
  };
}
