import { SearchResult } from '@/types/search';
import brandsData from '@/content/brands.json';
import mediaData from '@/content/media.json';
import homeData from '@/content/home.json';

// Flatten data into a searchable array
export function getSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // 1. Index Brands
  brandsData.brands.forEach((brand) => {
    results.push({
      id: brand.id,
      title: brand.name,
      description: brand.tagline,
      category: 'Brand',
      href: `/brands/${brand.id}`, // Dynamic route
    });
  });

  // 2. Index Movies
  mediaData.movies.items.forEach((movie) => {
    results.push({
      id: movie.id,
      title: movie.title,
      description: `${movie.year} • ${movie.genre}`,
      category: 'Movie',
      image: movie.image,
      href: `/brands/aforevo`, // For MVP, route media to the parent brand
    });
  });

  // 3. Index Music
  mediaData.music.items.forEach((track) => {
    results.push({
      id: track.id,
      title: track.title,
      description: `${track.year} • ${track.artist}`,
      category: 'Music',
      image: track.image,
      href: `/brands/music`, // For MVP, route to music brand
    });
  });

  // 4. Index Services
  homeData.services.items.forEach((service) => {
    results.push({
      id: service.id,
      title: service.title,
      description: 'MBI Ecosystem Service',
      category: 'Service',
      href: service.link,
    });
  });

  return results;
}

// Client-side filtering logic
export function searchContent(query: string): SearchResult[] {
  const index = getSearchIndex();
  if (!query) return [];

  const lowerQuery = query.toLowerCase();
  return index.filter((item) => 
    item.title.toLowerCase().includes(lowerQuery) || 
    item.description?.toLowerCase().includes(lowerQuery)
  );
}
