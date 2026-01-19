export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Murphy Ben International",
    "url": "https://www.mbi247.com",
    "logo": "https://www.mbi247.com/logo.png",
    "sameAs": [
      "https://www.youtube.com/@AforevoStage",
      "https://www.youtube.com/@AforevoDubbing",
      "https://www.youtube.com/@Yorubahood",
      "https://www.instagram.com/aforevo",
      "https://twitter.com/mbi247"
    ],
    "description": "Africa's leading digital media and entertainment company. Owners of Aforevo, Vybz FM, and the continent's largest YouTube MCN.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2-4 Ladipo Kuku Street, Allen Avenue",
      "addressLocality": "Ikeja",
      "addressRegion": "Lagos",
      "postalCode": "100281",
      "addressCountry": "NG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-808-862-4247",
      "contactType": "customer service",
      "areaServed": "Global"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
