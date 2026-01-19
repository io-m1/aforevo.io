/**
 * Purpose: Defines strict interfaces for content objects.
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
  features: string[];
  ctaLink: string;
  ctaText: string;
  image?: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface AboutPageContent {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    heading: string;
    subheading: string;
  };
  mission: {
    heading: string;
    body: string;
  };
  stats: StatItem[];
  story: {
    heading: string;
    paragraphs: string[];
  };
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
