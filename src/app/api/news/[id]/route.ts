import { NextRequest, NextResponse } from 'next/server'

import {
  createApiUrl,
  createErrorResponse,
  createSuccessResponse,
  fetchFromApiEndpoint,
} from '@/lib/api-utils'
import { ApiError, Event } from '@/services/api'

// Validators
function validateArticleId(id: string): void {
  if (!id || typeof id !== 'string') {
    throw new ApiError(400, 'Invalid article ID')
  }
}

// API Service
async function fetchArticleById(articleId: string): Promise<Event> {
  validateArticleId(articleId)

  const url = createApiUrl('/all')
  url.searchParams.append('articleId', articleId)

  return fetchFromApiEndpoint<Event>(url)
}

// Main handler
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  try {
    const { id } = await params
    const article = await fetchArticleById(id)
    return createSuccessResponse(article)
  } catch (error) {
    if (error instanceof ApiError) {
      return createErrorResponse(error.message, error.status)
    }

    console.error('Unexpected error:', error)
    return createErrorResponse('Internal server error', 500)
  }
}
