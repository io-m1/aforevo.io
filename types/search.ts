export type SearchCategory = 'Brand' | 'Movie' | 'Music' | 'Service';

export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  category: SearchCategory;
  image?: string; // Poster or Logo
  href: string;
}
