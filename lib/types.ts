export type ServiceCategory = 'MEDIA' | 'TECH' | 'DISTRIBUTION' | 'INFRASTRUCTURE';

export interface EmpireService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: ServiceCategory;
  features: string[];
  legacyUrl?: string; // Reference to old site for SEO redirect mapping
}

export interface NetworkChannel {
  name: string;
  handle: string;
  subscribers: string;
  category: 'NOLLYWOOD' | 'MUSIC' | 'COMEDY' | 'LIFESTYLE';
  description: string;
  isFlagship: boolean;
}

export interface EmpireMetric {
  label: string;
  value: string;
  suffix: string;
  lastUpdated: string;
  source: 'INTERNAL_AUDIT' | 'YOUTUBE_API';
}
