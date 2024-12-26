import { NextResponse } from 'next/server';

const API_BASE_URL = 'https://api.goperigon.com/v1';
const API_KEY = process.env.PERIGON_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  try {
    const response = await fetch(`${API_BASE_URL}/events/all?${searchParams.toString()}`, {
      headers: {
        'x-api-key': API_KEY || '',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}
