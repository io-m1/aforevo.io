export interface HeroData {
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  link: string;
  icon?: string;
  details?: string[]; // New: Detailed bullet points
}

export interface StatItem {
  id?: string;
  label: string;
  value: string;
  suffix?: string;
}

export interface YouTubeChannel {
  name: string;
  handle: string;
  subs: string;
  views: string;
}

export interface HomePageContent {
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: HeroData;
  metrics: {
    heading: string;
    items: StatItem[];
  };
  youtube: {
    heading: string;
    channels: YouTubeChannel[];
  };
  services: {
    heading: string;
    items: ServiceItem[];
  };
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

export interface AboutPageContent {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    heading: string;
    subheading: string;
  };
  narrative: {
    heading: string;
    content: string[]; // Array of paragraphs
  };
  values: {
    heading: string;
    items: Array<{ title: string; description: string }>;
  };
  leadership: {
    heading: string;
    text: string;
  };
}

export interface ServicesPageContent {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    heading: string;
    subheading: string;
  };
  categories: Array<{
    title: string;
    description: string;
    items: ServiceItem[];
  }>;
}

export interface ContactPageContent {
  metadata: {
    title: string;
    description: string;
  };
  heading: string;
  subheading: string;
  form: {
    labels: {
      name: string;
      email: string;
      subject: string;
      message: string;
      submit: string;
    }
  };
  info: {
    heading: string;
    address: string[];
    email: string;
    phone: string;
  };
}
