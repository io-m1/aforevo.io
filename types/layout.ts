export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string; // Icon name reference
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}

export interface LayoutContent {
  navbar: {
    links: NavLink[];
    cta: NavLink;
  };
  footer: {
    brandDescription: string;
    address: string[];
    contact: {
      phone: string;
      email: string;
    };
    socials: SocialLink[];
    columns: FooterColumn[];
    copyright: string;
  };
}
