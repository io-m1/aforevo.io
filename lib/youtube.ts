export async function getLiveYouTubeMetrics() {
  // Keep existing mock for the main stats ticker
  return [
    { name: "Aforevo Stage", handle: "@AforevoStage", subs: "2.6M", views: "1.2B" },
    { name: "Yorubahood", handle: "@Yorubahood", subs: "1.3M", views: "900M" },
    { name: "Aforevo Cinema", handle: "@AforevoCinema", subs: "24K", views: "5M" },
    { name: "Vybz 94.5 FM", handle: "@Vybz945FmLagos", subs: "100K", views: "50M" }
  ];
}

// NEW: Batch fetcher for the Network Grid
export async function getBatchChannelDetails(channelIds: string[]) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  
  // Fallback if no API key is present (Prevents crash)
  if (!apiKey) {
    console.warn("⚠️ No YOUTUBE_API_KEY found. Using placeholders.");
    return {};
  }

  // We chunk IDs into groups of 50 (YouTube API limit per call)
  const chunkSize = 50;
  const chunks = [];
  for (let i = 0; i < channelIds.length; i += chunkSize) {
    chunks.push(channelIds.slice(i, i + chunkSize));
  }

  const channelMap: Record<string, string> = {};

  try {
    const results = await Promise.all(chunks.map(async (chunk) => {
      const ids = chunk.join(',');
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${ids}&key=${apiKey}`,
        { next: { revalidate: 3600 } } // Cache for 1 hour to save quota
      );
      return res.json();
    }));

    results.forEach((data) => {
      if (data.items) {
        data.items.forEach((item: any) => {
          // Store high-res thumbnail mapped to channel ID
          channelMap[item.id] = item.snippet.thumbnails.high.url;
        });
      }
    });
  } catch (error) {
    console.error("Failed to fetch YouTube channel details", error);
  }

  return channelMap;
}
