import { client } from '@/sanity/lib/client';
import { currentTitanQuery } from '@/lib/sanity.queries';
import TitanRevealClient from './TitanRevealClient'; // We split this to keep server logic clean

export default async function TitanReveal() {
  const titan = await client.fetch(currentTitanQuery, {}, { next: { revalidate: 60 } });

  // If no titan is selected in CMS, hide the section
  if (!titan) return null;

  return <TitanRevealClient titan={titan} />;
}
