import { HomePageContent, BrandsPageContent, AboutPageContent, ContactPageContent } from '@/types/cms';
import homeData from '@/content/home.json'; 
import brandsData from '@/content/brands.json';
import aboutData from '@/content/about.json';
import contactData from '@/content/contact.json';
import mediaData from '@/content/media.json';

export async function getHomePageContent(): Promise<HomePageContent> {
  return homeData as HomePageContent;
}
export async function getBrandsPageContent(): Promise<BrandsPageContent> {
  return brandsData as BrandsPageContent;
}
export async function getAboutPageContent(): Promise<AboutPageContent> {
  return aboutData as AboutPageContent;
}
export async function getContactPageContent(): Promise<ContactPageContent> {
  return contactData as ContactPageContent;
}
export async function getMediaContent() {
  return mediaData;
}
