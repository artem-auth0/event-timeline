import { NextRequest } from 'next/server'

const API_BASE_URL = 'https://api.goperigon.com/v1'
const API_KEY = process.env.PERIGON_API_KEY

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params // Get id from route params

  try {
    const response = await fetch(`${API_BASE_URL}/all?apiKey=${API_KEY}&articleId=${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`)
    }

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    console.error('API Error:', error)
    return Response.json({ error: 'Failed to fetch article' }, { status: 500 })
  }
}
