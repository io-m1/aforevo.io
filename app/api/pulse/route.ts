import { NextResponse } from 'next/server';
import pulseData from '@/content/pulse.json';

// GET: Retrieve the current Pulse Feed
export async function GET() {
  // In a real app, this would query a database (Supabase/Postgres)
  // For now, it serves the "Living JSON"
  return NextResponse.json(pulseData);
}

// POST: Ingest a new Pulse Signal (e.g. from GitHub Actions or CMS)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the signal
    if (!body.category || !body.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Mock DB Insertion
    const newSignal = {
      id: `p${Date.now()}`,
      category: body.category,
      message: body.message,
      timestamp: 'Just Now',
      location: body.location || 'Unknown',
      stats: body.stats
    };

    // Return the updated "feed" (Simulated)
    return NextResponse.json({ 
      success: true, 
      signal: newSignal 
    });

  } catch (error) {
    return NextResponse.json({ error: 'Invalid Request' }, { status: 500 });
  }
}
