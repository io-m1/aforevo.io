import { MetadataRoute } from 'next';
import brandsData from '@/content/brands.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mbi247.com';

  // Static Routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/brands',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic Brand Routes
  const brandRoutes = brandsData.brands.map((brand) => ({
    url: `${baseUrl}/brands/${brand.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...brandRoutes];
}
