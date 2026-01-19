/**
 * Purpose: Simulates a CMS client to fetch content.
 * Depends on: types/cms.ts, content/*.json
 */

import { HomePageContent, BrandsPageContent, AboutPageContent } from '@/types/cms';
import homeData from '@/content/home.json'; 
import brandsData from '@/content/brands.json';
import aboutData from '@/content/about.json';

export async function getHomePageContent(): Promise<HomePageContent> {
  return homeData as HomePageContent;
}

export async function getBrandsPageContent(): Promise<BrandsPageContent> {
  return brandsData as BrandsPageContent;
}

export async function getAboutPageContent(): Promise<AboutPageContent> {
  return aboutData as AboutPageContent;
}
