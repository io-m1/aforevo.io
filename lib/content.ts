/**
 * Purpose: Simulates a CMS client to fetch content.
 * Depends on: types/cms.ts, content/*.json
 * Used by: app/page.tsx
 */

import { HomePageContent } from '@/types/cms';
// In a real CMS setup, this would be an API call. 
// For Phase 2, we import the JSON directly.
import homeData from '@/content/home.json'; 

export async function getHomePageContent(): Promise<HomePageContent> {
  // Simulating network delay for realistic loading state testing if needed
  // await new Promise(resolve => setTimeout(resolve, 100));
  
  return homeData as HomePageContent;
}
