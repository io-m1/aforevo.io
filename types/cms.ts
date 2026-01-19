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
  description: string;
  icon?: string;
  link: string;
}

export interface BrandItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[]; // List of key capabilities (e.g., "YouTube MCN", "Dubbing")
  ctaLink: string;
  ctaText: string;
  image?: string; // Placeholder for brand logo/banner
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

export interface BrandsPageContent {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    heading: string;
    subheading: string;
  };
  brands: BrandItem[];
}
