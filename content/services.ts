import { EmpireService } from '@/lib/types';

export const EMPIRE_SERVICES: EmpireService[] = [
  {
    id: 'youtube-mcn',
    title: 'YouTube MCN',
    tagline: 'Africa’s Premier Partner Network',
    description: 'We manage rights, monetize content, and optimize growth for over 50 channels. Our proprietary tools protect IP and maximize RPM for African creators.',
    category: 'MEDIA',
    features: ['Rights Management', 'Content ID Strategy', 'Monetization Optimization'],
    legacyUrl: '/services/mcn'
  },
  {
    id: 'aforevo-dubbing',
    title: 'Aforevo Dubbing',
    tagline: 'Breaking Language Barriers',
    description: 'The continent’s largest dubbing infrastructure. We translate Nollywood content into French, Swahili, Portuguese, and Lingala to unlock new markets.',
    category: 'INFRASTRUCTURE',
    features: ['Multilingual Audio', 'Subtitle Synchronization', 'Localization Strategy'],
    legacyUrl: '/services/dubbing'
  },
  {
    id: 'vybz-fm',
    title: 'Vybz 94.5 FM',
    tagline: 'More Music, Less Talk',
    description: 'Lagos’s dominant Afrobeats station. A terrestrial anchor that complements our digital reach, influencing the streets and the streams simultaneously.',
    category: 'MEDIA',
    features: ['Terrestrial Broadcasting', 'Event Activation', 'Artist Promotion'],
    legacyUrl: '/brands/vybz'
  },
  {
    id: 'revo-plus',
    title: 'Revo+',
    tagline: 'Cinema in Your Pocket',
    description: 'Our proprietary SVOD platform delivering premium Nollywood content to the diaspora. Offline viewing, original series, and exclusive premieres.',
    category: 'TECH',
    features: ['SVOD Platform', 'Mobile App', 'Original Content'],
    legacyUrl: '/brands/revo'
  },
  {
    id: 'aforevo-music',
    title: 'Aforevo Music',
    tagline: 'The Sound of Africa',
    description: 'A 360-degree music label and distributor. We bridge the gap between talent and global DSPs (Spotify, Apple Music), ensuring artists get paid.',
    category: 'DISTRIBUTION',
    features: ['Digital Distribution', 'Label Services', 'Publishing Admin'],
    legacyUrl: '/services/music'
  },
  {
    id: 'content-syndication',
    title: 'Global Syndication',
    tagline: 'Exporting Culture',
    description: 'Licensing African IP to global broadcasters, airlines, and streaming giants. We are the gateway for African content to enter the global market.',
    category: 'DISTRIBUTION',
    features: ['Licensing', 'Format Sales', 'Airline Partnerships'],
    legacyUrl: '/services/syndication'
  }
];
