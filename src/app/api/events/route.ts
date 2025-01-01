import { NextRequest, NextResponse } from 'next/server'

import {
  createApiUrl,
  createErrorResponse,
  createSuccessResponse,
  fetchFromApiEndpoint,
} from '@/lib/api-utils'
import { ApiError, ApiListResponse, Event } from '@/services/api'

// API Service
async function fetchEvents(searchParams: URLSearchParams): Promise<ApiListResponse<Event>> {
  const url = createApiUrl('/events/all', searchParams)
  return fetchFromApiEndpoint<ApiListResponse<Event>>(url)
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
