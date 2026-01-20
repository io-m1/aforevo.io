export async function getPulseFromWordPress() {
  // Mock data to ensure build passes. 
  // Later we can connect this to a real WP API.
  return [
    {
      id: 101,
      title: "MBI Acquires Distribution Rights for 'Lagos Heist'",
      excerpt: "The deal secures global streaming rights for the upcoming blockbuster...",
      date: "2026-01-15",
      link: "#"
    },
    {
      id: 102,
      title: "Vybz FM Hits 1 Million Listeners Online",
      excerpt: "Our digital stream has broken new records in the UK and US markets...",
      date: "2026-01-12",
      link: "#"
    },
    {
      id: 103,
      title: "Aforevo YouTube Network Expands to Francophone Africa",
      excerpt: "New channels launched in Senegal and Ivory Coast to serve growing demand...",
      date: "2026-01-10",
      link: "#"
    }
  ];
}
