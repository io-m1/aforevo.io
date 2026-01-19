/**
 * Purpose: Simulates a CMS client to fetch content.
 * Depends on: types/cms.ts, content/*.json
 * Used by: app/page.tsx, app/brands/page.tsx
 */

import { HomePageContent, BrandsPageContent } from '@/types/cms';
import homeData from '@/content/home.json'; 
import brandsData from '@/content/brands.json';

export async function getHomePageContent(): Promise<HomePageContent> {
  return homeData as HomePageContent;
}

export async function getBrandsPageContent(): Promise<BrandsPageContent> {
  return brandsData as BrandsPageContent;
}
