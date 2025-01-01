import { NextRequest, NextResponse } from 'next/server'

import { ApiError, ApiListResponse, Event } from '@/services/api'

// Types
interface ApiConfig {
  readonly baseUrl: string
  readonly apiKey: string
}

// Configuration
const API_CONFIG: ApiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_PERIGON_API_URL ?? '',
  apiKey: process.env.PERIGON_API_KEY ?? '',
} as const

// Validators
function validateConfig(config: ApiConfig): void {
  if (!config.baseUrl || !config.apiKey) {
    throw new ApiError(500, 'Missing API configuration')
  }
}

// API Service
async function fetchEvents(searchParams: URLSearchParams): Promise<ApiListResponse<Event>> {
  validateConfig(API_CONFIG)

  const url = new URL(`${API_CONFIG.baseUrl}/events/all`)
  // Merge existing search params
  searchParams.forEach((value, key) => url.searchParams.append(key, value))

  const response = await fetch(url.toString(), {
    headers: {
      'x-api-key': API_CONFIG.apiKey,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new ApiError(response.status, `Failed to fetch events: ${response.statusText}`)
  }

  return response.json()
}

// Response handlers
function createErrorResponse(error: string, status: number): NextResponse {
  return NextResponse.json({ error }, { status })
}

function createSuccessResponse<T>(data: T): NextResponse {
  return NextResponse.json(data)
}

// Main handler
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url)
    const events = await fetchEvents(searchParams)
    return createSuccessResponse(events)
  } catch (error) {
    if (error instanceof ApiError) {
      return createErrorResponse(error.message, error.status)
    }

    console.error('Unexpected error:', error)
    return createErrorResponse('Internal server error', 500)
  }
}
