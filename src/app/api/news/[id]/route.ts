import { NextRequest } from 'next/server'

import { ApiError, Event } from '@/services/api'

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

function validateArticleId(id: string): void {
  if (!id || typeof id !== 'string') {
    throw new ApiError(400, 'Invalid article ID')
  }
}

// API Service
async function fetchArticleById(articleId: string): Promise<Event> {
  validateConfig(API_CONFIG)
  validateArticleId(articleId)

  const url = new URL(`${API_CONFIG.baseUrl}/all`)
  url.searchParams.append('apiKey', API_CONFIG.apiKey)
  url.searchParams.append('articleId', articleId)

  const response = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new ApiError(response.status, `Failed to fetch article: ${response.statusText}`)
  }

  return response.json()
}

// Response handlers
function createErrorResponse(error: string, status: number): Response {
  return Response.json({ error }, { status })
}

function createSuccessResponse(data: Event): Response {
  return Response.json(data)
}

// Main handler
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
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
