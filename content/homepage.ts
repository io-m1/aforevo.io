export type HeroData = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundVideo?: string;
};

export type MetricsItem = {
  label: string;
  value: string;
};

export type MetricsData = {
  items: MetricsItem[];
};

export type BrandData = {
  name: string;
  logo: string;
  link: string;
};

export type ServiceData = {
  title: string;
  description: string;
  icon?: string;
};

export type HomePageContent = {
  hero: HeroData;
  metrics: MetricsData;
  brands: BrandData[];
  services: ServiceData[];
};

export const content: HomePageContent = {
  hero: {
    title: "Africa's Largest Media & Entertainment Empire",
    subtitle: "MBI aggregates Nollywood, Afrobeats, radio, and digital content for global audiences",
    ctaText: "Explore Our Channels",
    ctaLink: "/brands",
    backgroundVideo: "/videos/afro_reel.mp4"
  },
  metrics: {
    items: [
      { label: "YouTube Subscribers", value: "10M+" },
      { label: "Monthly Views", value: "500M+" },
      { label: "Active Channels", value: "12" },
      { label: "Countries Reached", value: "45+" }
    ]
  },
  brands: [
    { name: "Aforevo", logo: "/logos/aforevo.png", link: "https://www.youtube.com/@Aforevo" },
    { name: "Vybz FM", logo: "/logos/vybzfm.png", link: "https://www.youtube.com/@VybzFM" },
    { name: "Revo+", logo: "/logos/revoplus.png", link: "https://www.youtube.com/@RevoPlus" }
  ],
  services: [
    {
      title: "Content Distribution",
      description: "We distribute high-quality African content across YouTube, social media, and streaming platforms."
    },
    {
      title: "Digital Media Management",
      description: "We manage creators, channels, and brands to maximize reach and monetization."
    },
    {
      title: "Radio Broadcasting",
      description: "Vybz FM and our other stations deliver Afrobeat hits and curated shows globally."
    },
    {
      title: "Analytics & Growth",
      description: "We use live metrics to optimize performance and ensure results-driven success."
    }
  ]
};
