import { Tv, Radio, Clapperboard, Globe, Smartphone, Music } from 'lucide-react';

export const brandsData = [
  {
    id: "aforevo",
    name: "Aforevo",
    tagline: "The Pulse of African Entertainment",
    description: "Our flagship YouTube network with over 50 channels, dominating the Nollywood and French-African digital space.",
    stats: { label: "Subscribers", value: "10M+" },
    icon: Tv,
    color: "from-red-600 to-red-900",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=800"
  },
  {
    id: "vybz-fm",
    name: "Vybz 94.5 FM",
    tagline: "More Music, Less Talk",
    description: "Lagos' premier Afrobeats station. We dictate the culture, setting the trends for music across the continent.",
    stats: { label: "Listeners", value: "1.5M+" },
    icon: Radio,
    color: "from-purple-600 to-purple-900",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800"
  },
  {
    id: "revo-plus",
    name: "Revo+",
    tagline: "Cinema in Your Pocket",
    description: "The dedicated streaming app for premium African content. Offline viewing, original series, and blockbuster movies.",
    stats: { label: "Downloads", value: "500K+" },
    icon: Smartphone,
    color: "from-blue-600 to-blue-900",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800"
  },
  {
    id: "aforevo-dubbing",
    name: "Aforevo Dubbing",
    tagline: "Breaking Language Barriers",
    description: "State-of-the-art dubbing studios translating African stories into French, Swahili, Portuguese, and English.",
    stats: { label: "Hours Dubbed", value: "20K+" },
    icon: Globe,
    color: "from-green-600 to-green-900",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=800"
  },
  {
    id: "aforevo-music",
    name: "Aforevo Music",
    tagline: "The Sound of Africa",
    description: "Distribution and management for the continent's rising stars. We bridge the gap between talent and global DSPs.",
    stats: { label: "Streams", value: "1B+" },
    icon: Music,
    color: "from-pink-600 to-pink-900",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800"
  },
  {
    id: "aforevo-stage",
    name: "Aforevo Stage",
    tagline: "Live Performance & Events",
    description: "The experiential arm of MBI. Concerts, festivals, and live theater productions that bring the screen to life.",
    stats: { label: "Attendees", value: "50K+" },
    icon: Clapperboard,
    color: "from-yellow-600 to-yellow-900",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800"
  }
];
